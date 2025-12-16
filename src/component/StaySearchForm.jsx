import React from "react";
import LocationInput from "./LocationInput";
import GuestsInput from "./GuestsInput";
import StayDatesRangeInput from "./StayDatesRangeInput";
import { ChevronRight } from "lucide-react";

const StaySearchForm = () => {
  return (
    <form className="w-full mt-4 flex md:flex-row flex-col rounded-xl shadow-xl bg-white">
      {/* <LocationInput className="flex-[1.5]" />
      <div className="self-center border-r border-slate-200 h-8"></div> */}
      <StayDatesRangeInput className="flex-1.5" />
      <div className="self-center border-r border-slate-200 h-8 hidden lg:block"></div>
      <div className="border border-slate-200 w-full self-center md:hidden block"></div>
      <GuestsInput className="flex-1" />

      <button
        className="my-auto mr-2 py-4 px-4 md:flex justify-center items-center rounded-full bg-[#eea159] hidden"
        role="submit"
      >
      <ChevronRight />
      </button>
    </form>
  );
};

export default StaySearchForm;
