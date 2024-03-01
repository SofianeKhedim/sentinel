import { FileQuestion } from "lucide-react"
export default function Doctor({Name}:{Name:string}) {
  return (
    <div className="flex flex-row justify-between py-4 px-6 bg-[#F6F8FF] border border-[#E7EEFA] rounded-lg">
        <h1 className="text-primary text-[20px] font-[600]">{Name}</h1>
       <FileQuestion size={30}  className="text-primary"/>
    </div>
  )
}
