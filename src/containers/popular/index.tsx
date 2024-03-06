
import Card from "../../components/card-popular";
import Tab from "../../components/tab"
import TabContent from "../../components/tab-content"
import * as S from "./styles"
import React, { useState } from "react";


import thumb1 from "../../assets/thumb1.png"
import thumb2 from "../../assets/ashtanga1.jpg"
import thumb3 from "../../assets/thumb3.png"
import thumb4 from "../../assets/ashtanga2.jpg"
import thumb5 from "../../assets/thumb5.png"
import thumb6 from "../../assets/power1.jpg"
import thumb7 from "../../assets/thumb4.png"
import thumb8 from "../../assets/thumb6.png"
import thumb9 from "../../assets/meditation3.jpg"



interface TabInfo {
    label: string;
    content: React.ReactNode;
}

const Popular:React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const tabs: TabInfo[] = [
        {label: 'Meditations', 
        content: 
            <S.Cards>
                <Card title={"Meditation 101"} image={thumb7} author={"Alyssa Luna"} />
                <Card title={"Meditation 107"} image={thumb8} author={"Kaylee Conley"} />
                <Card title={"Meditation 153"} image={thumb9} author={"Charli Dunn"} />
            </S.Cards>
        },
        {label: 'Ashtanga Yoga', 
        content: 
            <S.Cards>
                <Card title={"A Strong Foundation"} image={thumb2} author={"Ariana Walsh"} />
                <Card title={"Salute the Sun"} image={thumb3} author={"Charli Dunn"} />
                <Card title={"Pranayama Yoga"} image={thumb4} author={"Jane Roberts"} />
            </S.Cards>
        },
        {label: 'Hatha Yoga', 
        content: 
            <S.Cards>
                <Card title={"Quick Recharge"} image={thumb5} author={"Destiny Stone"} />
                <Card title={"Rise and Shine"} image={thumb1} author={"Alyssa Luna"} />
                <Card title={"A Strong Foundation"} image={thumb2} author={"Ariana Walsh"} />
            </S.Cards>
        },
        {label: 'Power Yoga', 
        content: 
            <S.Cards>
                <Card title={"Rise and Shine"} image={thumb1} author={"Alyssa Luna"} />
                <Card title={"Quick Recharge"} image={thumb5} author={"Destiny Stone"} />
                <Card title={"Choose Joy"} image={thumb6} author={"Kaylee Conley"} />
            </S.Cards>
        }      
    ];

    return (
    <div className="container">
        <S.Container>
            <h2>Popular Programs</h2>
            <S.TabContainer>
                <S.TabsHeader>
                    {tabs.map((tab, index) => (
                        <Tab
                            key={index}
                            active={index === activeTab}
                            label={tab.label}
                            onClick={() => setActiveTab(index)}
                        />
                    ))}
                </S.TabsHeader>
                {tabs.map((tab, index) => (
                    <TabContent key={index} active={index === activeTab}>
                        {tab.content}
                    </TabContent>

                ))}
            </S.TabContainer>
        </S.Container>
    </div>
)}

export default Popular