import { Link } from "react-router-dom";
import Apointement from "./Apointement";
import { FilePenLine } from "lucide-react";
export default function ApointementList() {
  return (
    <div className="pt-5 font-Inter  ">
      <div className="flex flex-row justify-between pb-2">
        <h2 className="text-[18px] text-[#777] font-semibold">
          Apointement List
        </h2>
        <Link
          to="/calendar"
          className="text-[16px] font-[500] text-primary">
          {" "}
          Full List
        </Link>
      </div>
      <div className="flex flex-col gap-2 overflow-y-scroll h-[35vh] ">
        <Apointement />
        <div className="bg-[#F6F8FF] font-Inter  border border-primary rounded-[10px] flex flex-row items-center justify-between  py-1 pl-1 pr-6">
          <div className="flex flex-row gap-2 ">
            <div className="flex text-center  gap-0.5 flex-col px-7 py-2 border-2 border-primary rounded-md">
              <h3 className="text-[20px] font-[400] text-primary">mai</h3>
              <h3 className="text-[30px] font-[700] text-primary">19</h3>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-[#3D3D3D] font-[500] text-[16px] font-Inter">
                Dr.Kader,Ophtalmologue
              </h2>
              <h4 className="text-[#A7A7A7] text-[15px] font-[500]">
                8:00 AM-10:00 AM
              </h4>
              <p className="text-[#6276F0] font-[500] text-[14px]">
                Clinique El Azhar, Alger
              </p>
            </div>
          </div>
          <FilePenLine size={24} />
        </div>
        <div className="bg-[#F6F8FF] font-Inter  border border-primary rounded-[10px] flex flex-row items-center justify-between  py-1 pl-1 pr-6">
          <div className="flex flex-row gap-2 ">
            <div className="flex text-center  gap-0.5 flex-col px-7 py-2 border-2 border-primary rounded-md">
              <h3 className="text-[20px] font-[400] text-primary">dec</h3>
              <h3 className="text-[30px] font-[700] text-primary">17</h3>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-[#3D3D3D] font-[500] text-[16px] font-Inter">
                Dr.Samira,Ophtalmologue
              </h2>
              <h4 className="text-[#A7A7A7] text-[15px] font-[500]">
                8:00 AM-10:00 AM
              </h4>
              <p className="text-[#6276F0] font-[500] text-[14px]">
                Clinique Soleil, Alger
              </p>
            </div>
          </div>
          <FilePenLine size={24} />
        </div>
        <div className="bg-[#F6F8FF] font-Inter  border border-primary rounded-[10px] flex flex-row items-center justify-between  py-1 pl-1 pr-6">
          <div className="flex flex-row gap-2 ">
            <div className="flex text-center  gap-0.5 flex-col px-7 py-2 border-2 border-primary rounded-md">
              <h3 className="text-[20px] font-[400] text-primary">Feb</h3>
              <h3 className="text-[30px] font-[700] text-primary">28</h3>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-[#3D3D3D] font-[500] text-[16px] font-Inter">
                Dr.Lamis,Psycholoque
              </h2>
              <h4 className="text-[#A7A7A7] text-[15px] font-[500]">
                8:00 AM-10:00 AM
              </h4>
              <p className="text-[#6276F0] font-[500] text-[14px]">
                Hopital Bab el Oued, Alger
              </p>
            </div>
          </div>
          <FilePenLine size={24} />
        </div>

      </div>
    </div>
  );
}
