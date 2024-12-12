import { poppins } from "../fonts";

export default function Page() {
  return (
    <div className="flex flex-col w-full h-full">
      <p className={`text-center p-2 border-b  ${poppins.className}`}>
        Locator Plus
      </p>
      <div className="w-full h-full flex justify-between">
        <div className="w-[80%] h-full bg-slate-300"></div>
        <div className="w-[15%] h-full bg-slate-300"></div>
      </div>
    </div>
  );
}
