import Doctor  from '@/assets/Man Health Worker Light Skin Tone.svg'
import Location from '@/assets/Round Pushpin.svg'
import './Card.css'
export default function CardMeet() {
  return (
    <div className='bg-[#F6F8FF] px-3 py-6 space-y-12  rounded-[24px] '>
      <div className=' space-y-2'>
        <div className='flex flex-col'>
          <h2 className='font-inter  font-bold text-3xl text-[#1B2559] '>Upcomming event</h2>
          {/* this it timer for the next consultation    */}
          <h2 className='font-sans font-semibold text-2xl text-[#8294FF]'>3h24min</h2>
        </div>
       
      </div>
      <div className='space-y-[6px]'>
        <div className='flex flex-row gap-1'>
            <img src={Doctor} alt="" width="25px"/>
            <h3 className='text-[17px] text-[#5D72F5] font-medium '>Dr. Ahmed Benali,Dermatology</h3>
        </div>
        <div className='flex flex-row gap-1'>
            <img src={Location} alt="" width="25px"/>
            <h3 className=' font-medium text-[#5D72F5]'>Clinique El Azhar, Alger</h3>
        </div>
      </div>
    </div>
  );
}
