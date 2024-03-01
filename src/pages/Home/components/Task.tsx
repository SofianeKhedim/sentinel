import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';
export default function Task({
  task,
  nextIn,
  done,
}: {
  task: string;
  nextIn: string;
  done: string;
}) {
  return (
    <div>
      <div className="w-full flex flex-row items-center justify-between px-5 py-4 bg-[#F6F8FF] rounded-t-[10px] font-Inter">
        <h3 className="text-primary font-semibold">{task}</h3>
        <div className="flex flex-row items-center gap-1">
          <p className="text-[#777] text-[12px]  font-[500]">Next in:</p>
          <h3 className="font-[500] ">{nextIn}</h3>
        </div>
        <div className="flex flex-row items-center gap-1">
          <h3 className="font-[500] ">{done}</h3>
          <p className="text-[#777] text-[12px]  font-[500]">Done</p>
        </div>
        <Checkbox />
      </div>

      <div className="w-full flex flex-row justify-between px-5 py-2 bg-primary rounded-b-[10px] text-[#F4F7FE]">
        <p>Daily antibiotic consuming</p>
        {/* <Link to="">learn more </Link> */}
      </div>
    </div>
  );
}
