import Select from '@/pages/Calender/components/Select'
import {CalendarDemo} from '@/pages/Calender/components/CalendarDemo'
import ApointementList from '@/pages/Calender/components/ApointementList'
function Calender() {
  return (
    <div className="px-5">
      <Select />
      <CalendarDemo />
      <ApointementList />
    </div>
  )
}

export default Calender