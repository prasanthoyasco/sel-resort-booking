import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import StayDropdown from "./StayDropdown";
import DatePickerOneMonth from "./DatePickerOneMonth";
import GuestRoomPicker from "./GuestRoomPicker";

export default function StaySearchBar() {
  const [open, setOpen] = useState(null);
  const wrapperRef = useRef(null);

  const [stay, setStay] = useState(null);
  const [date, setDate] = useState({ start: null, end: null });
  const [guests, setGuests] = useState({
    adults: 2,
    children: 1,
    infants: 0,
    rooms: 1,
  });

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative z-50 w-full px-4 sm:px-0 top-4 max-w-6xl mx-auto"
    >
      <div className="flex flex-col sm:flex-row bg-white border border-gray-200 rounded-2xl sm:rounded-full shadow-md p-2 sm:p-3 gap-2">

        {/* Stay */}
        <button
          onClick={() => setOpen(open === "stay" ? null : "stay")}
          className={`flex-1 flex justify-between border border-transparent items-center px-4 py-3 rounded-xl sm:rounded-full text-left ${
            open === "stay" && "shadow-sm border border-gray-200"
          }`}
        >
          <div>
            <p className="text-xs font-semibold text-gray-500">Stay</p>
            <p className="text-sm font-medium">
              {stay?.name || "Select a stay"}
            </p>
          </div>
          <X
            size={18}
            className={`${open === "stay" ? "opacity-100" : "opacity-0"} text-red-500`}
          />
        </button>

        <div className="hidden sm:block w-px h-8 bg-gray-200" />

        {/* Date */}
        <button
          onClick={() => setOpen(open === "date" ? null : "date")}
          className={`flex-1 flex justify-between border border-transparent items-center px-4 py-3 rounded-xl sm:rounded-full text-left ${
            open === "date" && "shadow-sm border border-gray-200"
          }`}
        >
          <div>
            <p className="text-xs font-semibold text-gray-500">
              Check in – Check out
            </p>
            <p className="text-sm font-medium">
              {date.start && date.end
                ? `${date?.start
              ? date?.start.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                })
              : "Add date"} - ${date?.end
              ? date?.end.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                })
              : "Add date"}`
                : "Select dates"}
            </p>
          </div>
          <X size={18} className={`${open === "date" ? "opacity-100" : "opacity-0"} text-red-500`} />
        </button>

        <div className="hidden sm:block w-px h-8 bg-gray-200" />

        {/* Guests */}
        <button
          onClick={() => setOpen(open === "guest" ? null : "guest")}
          className={`flex-1 flex justify-between border border-transparent items-center px-4 py-3 rounded-xl sm:rounded-full text-left ${
            open === "guest" && "shadow-sm border border-gray-200"
          }`}
        >
          <div>
            <p className="text-xs font-semibold text-gray-500">Guests</p>
            <p className="text-sm font-medium">
              {guests.adults + guests.children} guests · {guests.rooms} rooms
            </p>
          </div>
          <X size={18} className={`${open === "guest" ? "opacity-100" : "opacity-0"} text-red-500`} />
        </button>

        {/* Search */}
        <button className="w-full sm:w-12 h-12 rounded-xl sm:rounded-full bg-indigo-600 text-white flex items-center justify-center">
          <Search />
          <span className="sm:hidden ml-2 font-medium">Search</span>
        </button>
      </div>

      {/* Popups */}
      {open === "stay" && <StayDropdown onSelect={setStay} />}
      {open === "date" && <DatePickerOneMonth value={date} onChange={setDate} />}
      {open === "guest" && <GuestRoomPicker value={guests} onChange={setGuests} />}
    </div>
  );
}
