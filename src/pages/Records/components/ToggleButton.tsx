import { useState } from "react";

export default function ToggleButton() {
    const [isActive, setIsActive] = useState<boolean>(true);
   
  return (
    <div className="w-full flex text-[18px] rounded-[6px] font-[500]  justify-center items-center mt-5 border-2 border-primary">
        <button className={` ${
    isActive ? 'text-white bg-primary' : 'text-primary bg-white'
  } w-1/2 py-2`} onClick={()=>{setIsActive(true)}}>
        My Files 
        </button>
        <button className={` ${
    !isActive ? 'text-white bg-primary' : 'text-primary bg-white'
  } w-1/2 py-2`} onClick={()=>{setIsActive(false)}}>
            Doctor infos 
        </button>
    </div>
  )
}

