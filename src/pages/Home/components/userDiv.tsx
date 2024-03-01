import { Link } from 'react-router-dom';
import {DropdownMenuRadioGroupDemo} from '@/pages/Home/components/DropdownMenuRadioGroupDemo'
import { Bell } from 'lucide-react';
import { History } from 'lucide-react';
export default function UserDiv() {
  return (
    <div className='flex flex-row items-center justify-between px-5'>
        <DropdownMenuRadioGroupDemo />
        <div className='flex flex-row gap-5 text-primary'>
            {/* sois disant ydouk lnotif  */}
            <Link className='rounded-full p-2 bg-slate-300' to="/"><Bell/></Link>
            <Link className='rounded-full p-2 bg-slate-300' to="/"><History/></Link>
        </div>
    </div>
  )
}
