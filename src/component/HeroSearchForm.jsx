import React, { useState } from "react";
import StaySearchForm from "./StaySearchForm";
import { ChevronDown, ChevronRight } from "lucide-react";

const HeroSearchForm = ({
  className = "",
  currentTab = "The Farm Retreat",
}) => {
  const tabs = ["The Farm Retreat", "Chetinadu Farms", "Safari Farms"];
  const [tabActive, setTabActive] = useState(currentTab);
const [open, setOpen] = useState(false);
  return (
    <div className={`w-full max-w-6xl py-2 md:py-3 px-1 ${className}`}>
      <h2 className="text-white text-center mb-4 font-bold text-2xl">Select Your Stay with Sel</h2>
      {/* TABS */}
      <div className="md:hidden mb-4">
        <div
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between bg-white px-5 py-3 rounded-full cursor-pointer shadow-md"
        >
          <span className="font-semibold text-gray-800">{tabActive}</span>
          <ChevronDown
            size={18}
            className={`transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>

        {open && (
          <div className="mt-3 bg-white rounded-2xl shadow-lg overflow-hidden">
            {tabs.map((tab) => (
              <div
                key={tab}
                onClick={() => {
                  setTabActive(tab);
                  setOpen(false);
                }}
                className={`px-5 py-4 cursor-pointer transition ${
                  tab === tabActive
                    ? "bg-[#fff5eb] text-[#eea159] font-bold"
                    : "hover:bg-gray-100"
                }`}
              >
                {tab}
              </div>
            ))}
          </div>
        )}
      </div>

      <ul className=" md:flex hidden space-x-5 sm:space-x-8 lg:space-x-11 overflow-x-auto justify-center">
        {tabs.map((tab, index) => {
          const active = tab === tabActive;
          return (
              <>
              <li
                key={index}
                onClick={() => setTabActive(tab)}
                className={`flex items-center cursor-pointer text-sm lg:text-base  ${
                  active
                    ? "text-[#eea159] font-bold bg-white px-3 py-2 rounded-full"
                    : "text-white hover:text-gray-100 animate-pulse font-medium"
                }`}
              >
                {active && (
                  <span className="block w-2.5 h-2.5 rounded-full bg-[#eea159] mr-2" />
                )}
                {tab}
              </li>
              </>
          );
        })}
      </ul>

      {/* FORM CONTENT */}
      <div className="mt-0">
        {tabActive === "The Farm Retreat" && <StaySearchForm />}
        {tabActive === "Chetinadu Farms" && <StaySearchForm />}
        {tabActive === "Safari Farms" && <StaySearchForm />}
      </div>
    </div>
  );
};

export default HeroSearchForm;
