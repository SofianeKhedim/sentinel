import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
export default function Select() {
  return (
    <div className="py-3 flex flex-row justify-between">
        {/* 3 button div */}
        <div className="space-x-2">
        <Button className="text-white ">All</Button>
        <Button variant="outline" className="text-primary">Apointement</Button>
        <Button variant="outline" className="text-primary">Medications</Button>
        </div>
        <Button variant="outline" className="bg-primary" size="icon">
      <Plus className="h-5 w-5 font-extrabold text-white" />
    </Button>

    </div>
  )
}
