import Dashwork from "../components/dashboard-working";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Dashwork />
    </div>
  );
};

export default Dashboard;
