import React, { ReactNode } from "react";
import { Content } from "./styles";

interface TabContentProps {
    active: boolean;
    children: ReactNode;
}

const TabContent: React.FC<TabContentProps> = ({ active, children }) => (
    <Content active={active}>
        {children}
    </Content>
)

export default TabContent