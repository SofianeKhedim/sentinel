import ToggleButton from '@/pages/Records/components/ToggleButton';
import Search from '@/pages/Records/components/Search'
import MedicalPapers from '@/pages/Records/components/MedicalPapers'
import Submit from '@/pages/Records/components/Submit'
function Records() {
 
  return (
    <div className='px-5'>
      <ToggleButton />
      <Search/>
      <MedicalPapers/>
      <Submit/>


    </div>
  )
}

export default Records