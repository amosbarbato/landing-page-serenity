
import { TabButton } from "./styles"

interface TabProps {
    active: boolean;
    onClick: () => void;
    label: string;
}

const Tab:React.FC<TabProps> = ({ active, onClick, label }) => (
    <TabButton active={active} onClick={onClick} className="opn">
        {label}
    </TabButton>
)

export default Tab