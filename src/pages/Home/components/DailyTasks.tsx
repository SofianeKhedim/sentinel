import Task from '@/pages/Home/components/Task';
// import { Button } from "@/components/ui/button"

const tasks = [
  {
    task: 'Task01',
    nextIn: '2h',
    done: '2/3',
  },
  {
    task: 'Task01',
    nextIn: '2h',
    done: '2/3',
  },
  {
    task: 'Task01',
    nextIn: '2h',
    done: '2/3',
  },
  {
    task: 'Task01',
    nextIn: '2h',
    done: '2/3',
  },
  {
    task: 'Task01',
    nextIn: '2h',
    done: '2/3',
  },
  
];

export default function DailyTasks() {
  return (
    // mazal manzid  ndir gradient
    <div className=" pt-7 ">
      <h3 className=" font-Inter text-[#777] text-[18px] font-semibold pb-2">
        Daily Tasks
      </h3>
      <div className="overflow-y-scroll h-[390px] space-y-4">
        {tasks.map((elm, i) => (
          <Task
            key={'task' + i}
            task={elm.task}
            nextIn={elm.nextIn}
            done={elm.done}
          />
        ))}
      </div>
      {/* <div className='flex flex-row justify-around pt-8'>
        <Button className='text-[18px] font-Inter font-[500] py-4 px-5'>add med</Button>
        <Button className='text-[18px] font-Inter font-[500] py-4 px-5'>med list </Button>
        
        </div> */}
    </div>
  );
}
