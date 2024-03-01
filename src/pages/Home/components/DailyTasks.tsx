import Task from '@/pages/Home/components/Task'
import { Button } from "@/components/ui/button"

export default function DailyTasks() {
  return (
    // mazal manzid  ndir gradient
    <div className=' pt-7 ' >
        <h3 className=' font-Inter text-[#777] text-[18px] font-semibold pb-2'>Daily Tasks</h3>
        <div className='overflow-y-scroll h-[330px] space-y-4'>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        </div>
        <div className='flex flex-row justify-around pt-8'>
        <Button className='text-[18px] font-Inter font-[500] py-4 px-5'>add med</Button>
        <Button className='text-[18px] font-Inter font-[500] py-4 px-5'>med list </Button>
        
        </div>
    </div>
  )
}
