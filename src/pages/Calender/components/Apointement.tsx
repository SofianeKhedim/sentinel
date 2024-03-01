import { FilePenLine } from "lucide-react"

export default function Apointement() {
  return (
    <div className="bg-[#F6F8FF] font-Inter  border border-primary rounded-[10px] flex flex-row items-center justify-between  py-1 pl-1 pr-6">
        <div className="flex flex-row gap-2 ">
            <div className="flex text-center  gap-0.5 flex-col px-7 py-2 border-2 border-primary rounded-md">
                <h3 className="text-[20px] font-[400] text-primary">jan</h3>
                <h3 className="text-[30px] font-[700] text-primary">06</h3>
            </div>
            <div className="flex flex-col justify-center">
                <h2 className="text-[#3D3D3D] font-[500] text-[16px] font-Inter">Dr.Ahmed,Dermatology</h2>
                <h4 className="text-[#A7A7A7] text-[15px] font-[500]">10:00 AM-12:00 AM</h4>
                <p className="text-[#6276F0] font-[500] text-[14px]">Clinique El Azhar, Alger</p>
            </div>
        </div>
        <FilePenLine size={24} />
    </div>
  )
}
