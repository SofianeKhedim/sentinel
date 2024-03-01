import ToggleButton from '@/pages/Records/components/ToggleButton';
import Search from '@/pages/Records/components/Search'
import MedicalPapers from '@/pages/Records/components/MedicalPapers'
import Submit from '@/pages/Records/components/Submit'
import DoctorsInfos from '@/pages/Records/components/DoctorsInfos';
function Records() {
    // const [isActive, setIsActive] = useState<boolean>(true);

  return (
    <div className='px-5'>
      <ToggleButton />
      <Search/>
      {/* {isActive ? <MedicalPapers/> : <MedicalPapers/>} */}
      {/* <MedicalPapers/> */}
      <DoctorsInfos/>
      <Submit/>


    </div>
  )
}

export default Records