import UserDiv from "@/pages/Home/components/userDiv";
import CardMeet from "./components/CardMeet";
import DailyTasks from "@/pages/Home/components/DailyTasks";
function Home() {
  return <div className="px-5">
    <div className="flex flex-col gap-10">
    <UserDiv/>
    <CardMeet/>
    </div>
    <DailyTasks/>
  </div>;
}

export default Home;
