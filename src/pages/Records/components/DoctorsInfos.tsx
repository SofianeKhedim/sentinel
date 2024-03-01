import Doctor from '@/pages/Records/components/Doctor'

export default function DoctorsInfos() {
  return (
    <div className='pt-4'>
        <h1 className='text-[#777] font-[600] text-[16px]'>My Doctors</h1>
        <div className=' space-y-3 pt-2'>
            <Doctor Name="Dr. Ethan Harris"/>
            {/* change the name  */}
            <Doctor Name="Dr. REGUIEG Zakaria"/>
            <Doctor Name="Dr. mohamed Harris"/>
            <Doctor Name="Dr. kilimon papari"/>
            
        </div>
    </div>
  )
}
