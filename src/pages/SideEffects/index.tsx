import Search from '@/pages/Records/components/Search'
import {DialogDemo} from '@/pages/SideEffects/realcomponents/DialogDemo'
function SideEffects() {
  return (
    <div className='px-5 pt-3'>
      <h1 className='font-[700] text-[#777] text-[16px]'>Side Effects</h1>
      <Search />
      <DialogDemo />
    </div>
  )
}

export default SideEffects