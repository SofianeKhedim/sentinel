import { Link } from "react-router-dom"
 import Apointement from "./Apointement"
 export default function ApointementList() {
   return (
     <div className="pt-5 font-Inter  ">
        <div className="flex flex-row justify-between pb-2">
            <h2 className="text-[18px] text-[#777] font-semibold">
                Apointement List
            </h2>
            <Link to='/calendar' className="text-[16px] font-[500] text-primary"> Full List</Link>
        </div>
        <div className="flex flex-col gap-2 overflow-y-scroll h-[35vh] ">
            <Apointement />
            <Apointement />
            <Apointement />
            <Apointement />
            <Apointement />
            <Apointement />
            <Apointement />
            
        </div>
     </div>
   )
 }
 