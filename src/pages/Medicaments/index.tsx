import {AccordionDemo} from '@/pages/SideEffects/components/AccordionDemo'
import Search from '@/pages/Records/components/Search'

import Submit from '@/pages/Records/components/Submit'
function Medicaments() {
  return (
    <div className='px-5'>
      <Search/>
      <AccordionDemo/>
      <Submit/>
    </div>
  )
}

export default Medicaments