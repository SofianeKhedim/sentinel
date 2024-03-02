import ToggleButton from '@/pages/Records/components/ToggleButton';
import Search from '@/pages/Records/components/Search';
import MedicalPapers from '@/pages/Records/components/MedicalPapers';
import Submit from '@/pages/Records/components/Submit';
import DoctorsInfos from '@/pages/Records/components/DoctorsInfos';
import { useState } from 'react';
import { DialogDemo } from '@/components/DialogDemo';
function Records() {
  const [isDoc, setIsDoc] = useState<boolean>(true);

  return (
    <div className="px-5 relative h-full">
      <ToggleButton isDoc={isDoc} setIsDoc={setIsDoc} />
      <Search />
      {/* {isActive ? <MedicalPapers/> : <MedicalPapers/>} */}
      {/* <MedicalPapers/> */}
      {isDoc ? <DoctorsInfos /> : <MedicalPapers />}
      {/* <DoctorsInfos /> */}
      {!isDoc && <Submit />}
      {isDoc && <DialogDemo />}
    </div>
  );
}

export default Records;
