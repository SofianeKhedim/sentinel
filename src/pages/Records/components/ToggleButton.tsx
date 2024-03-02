export default function ToggleButton({ isDoc, setIsDoc }: any) {
  return (
    <div className="w-full flex text-[18px] rounded-[6px] font-[500]  justify-center items-center mt-5 border-2 border-primary">
      <button
        className={` ${
          !isDoc ? 'text-white bg-primary' : 'text-primary bg-white'
        } w-1/2 py-2`}
        onClick={() => {
          setIsDoc(false);
        }}
      >
        My Files
      </button>
      <button
        className={` ${
          isDoc ? 'text-white bg-primary' : 'text-primary bg-white'
        } w-1/2 py-2`}
        onClick={() => {
          setIsDoc(true);
        }}
      >
        Doctor infos
      </button>
    </div>
  );
}
