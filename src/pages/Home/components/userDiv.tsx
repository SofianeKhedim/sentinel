import { Link } from 'react-router-dom';
import {DropdownMenuRadioGroupDemo} from '@/pages/Home/components/DropdownMenuRadioGroupDemo'
import { Bell } from 'lucide-react';
import { History } from 'lucide-react';
export default function UserDiv() {
  return (
    <div className='flex flex-row items-center justify-between  pt-4'>
        <DropdownMenuRadioGroupDemo />
        <div className='flex flex-row gap-5 text-primary'>
            {/* sois disant ydouk lnotif  */}
            <Link className='rounded-full p-2 bg-[#F6F8FF]' to="/"><Bell/></Link>
            <Link className='rounded-full p-2 bg-[#F6F8FF]' to="/"><History/></Link>
        </div>
    </div>
  )
}
