import { applications, contacts } from "../data/mockData";
import ActionRequired from "../components/dashboard/ActionRequired";

function Dashboard() {
    return (
    <>
        <h1>Dashboard</h1>
        <ActionRequired 
            applications={applications}
            contacts={contacts}
        />
    </>
    )
}


export default Dashboard;