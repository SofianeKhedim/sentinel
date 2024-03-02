import { useGetTasksQuery } from '@/app/backend/endpoints/tasks';
import Fallback from '@/components/Fallback';
import Task from '@/pages/Home/components/Task';
// import { Button } from "@/components/ui/button"

const DailyTasks = () => {
  const { data, isLoading } = useGetTasksQuery(null);

  console.log(data);
  if (isLoading) return <Fallback />;
  return (
    // mazal manzid  ndir gradient
    <div className=" pt-7 ">
      <h3 className=" font-Inter text-[#777] text-[18px] font-semibold pb-2">
        Daily Tasks
      </h3>
      <div className="overflow-y-scroll h-[390px] space-y-4">
        {data ? (
          data.map((elm) => (
            <Task
              key={elm.id}
              task={elm.prescription.medicine.brand}
              nextIn={elm.date}
              id={elm.id}
              dci={elm.prescription.medicine.dci}
              checked={elm.validated === 1 ? true : false}
            />
          ))
        ) : (
          <p>no tasks</p>
        )}
      </div>
      {/* <div className='flex flex-row justify-around pt-8'>
        <Button className='text-[18px] font-Inter font-[500] py-4 px-5'>add med</Button>
        <Button className='text-[18px] font-Inter font-[500] py-4 px-5'>med list </Button>
        
        </div> */}
    </div>
  );
};

export default DailyTasks;
