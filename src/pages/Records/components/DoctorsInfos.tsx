import { useGetDoctorsQuery } from '@/app/backend/endpoints/doctors';
import Fallback from '@/components/Fallback';
import Doctor from '@/pages/Records/components/Doctor';

export default function DoctorsInfos() {
  const { data, isLoading } = useGetDoctorsQuery(null);

  if (isLoading) return <Fallback />;
  return (
    <div className="pt-4">
      <h1 className="text-[#777] font-[600] text-[16px]">My Doctors</h1>
      <div className=" space-y-3 pt-2">
        {data?.map((doctor, i) => (
          <Doctor key={i} Name={doctor.name} />
        ))}
        {/* <Doctor Name="Dr. Ethan Harris" />
        <Doctor Name="Dr. REGUIEG Zakaria" />
        <Doctor Name="Dr. mohamed Harris" />
        <Doctor Name="Dr. kilimon papari" /> */}
      </div>
    </div>
  );
}
