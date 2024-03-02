import { useCheckTaskMutation } from '@/app/backend/endpoints/tasks';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Task({
  task,
  nextIn,
  id,
  dci,
  checked,
}: {
  task: string;
  nextIn: string;
  id: number;
  dci: string;
  checked: boolean;
}) {
  const [check] = useCheckTaskMutation();
  const [isChecked, setIsChecked] = useState(checked);
  const handleCheck = (id: number) => {
    console.log('checked');

    check(id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  var date = new Date(nextIn);
  var hours = date.getHours().toString().padStart(2, '0');
  var minutes = date.getMinutes().toString().padStart(2, '0');
  var timeString = hours + ':' + minutes;
  return (
    <div>
      <div className="w-full flex flex-row items-center justify-between px-5 py-4 bg-[#F6F8FF] rounded-t-[10px] font-Inter">
        <h3 className="text-primary font-semibold">{task}</h3>
        <div className="flex flex-row items-center gap-1">
          <p className="text-[#777] text-[12px]  font-[500]">Next in:</p>
          <h3 className="font-[500] ">{timeString}</h3>
        </div>
        <div className="flex flex-row items-center gap-1">
          {/* <h3 className="font-[500] ">{done}</h3> */}
          <p className="text-[#777] text-[12px]  font-[500] pr-1">Done</p>
          <Checkbox
            onCheckedChange={() => {
              handleCheck(id);
              setIsChecked(!isChecked);
            }}
            checked={isChecked}
          />
        </div>
      </div>

      <div className="w-full flex flex-row justify-between px-5 py-2 bg-primary rounded-b-[10px] text-[#F4F7FE]">
        <p>Daily {dci.toLowerCase()} consuming</p>
        {/* <Link to="">learn more </Link> */}
      </div>
    </div>
  );
}
