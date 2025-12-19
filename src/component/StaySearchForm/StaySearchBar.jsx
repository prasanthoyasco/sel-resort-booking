import { useState, useRef, useEffect } from "react";
import StayDropdown from "./StayDropdown";
import DatePickerOneMonth from "./DatePickerOneMonth";
import GuestRoomPicker from "./GuestRoomPicker";
import { Search, X } from "lucide-react";

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

  // 🔥 CLICK OUTSIDE HANDLER
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
      className="relative z-50 w-full top-5 max-w-6xl mx-auto"
    >
      <div className="flex items-center bg-white border border-gray-200 rounded-full shadow-md px-4 py-3 gap-2">
        {/* Stay */}
        <button
          onClick={() => setOpen(open === "stay" ? null : "stay")}
          className={`flex-1 flex justify-between items-center px-5 py-4 text-left rounded-full ${
            open === "stay" ? "shadow-sm border border-gray-100" : ""
          }`}
        >
          <div>
            <p className="text-sm font-bold text-gray-700">Stay</p>
            <p className="text-sm text-gray-900">
              {stay?.name || "Select a stay"}
            </p>
          </div>
          <X
            className={`text-red-500 p-0.5 rounded-full ${
              open === "stay"
                ? "shadow-sm border border-gray-200"
                : " opacity-0"
            }`}
            size={22}
          />
        </button>

        <div className="w-px h-8 bg-gray-200" />

        {/* Date */}
        <button
          onClick={() => setOpen(open === "date" ? null : "date")}
          className={`flex-1 flex justify-between items-center px-5 py-4 text-left rounded-full ${
            open === "date" ? "shadow-sm border border-gray-100" : ""
          }`}
        >
          <div>
            <p className="text-xs font-semibold text-gray-500">
              Check in – Check out
            </p>
            <p className="text-sm text-gray-900">
              {date.start && date.end
                ? `${date.start} - ${date.end}`
                : "Select dates"}
            </p>
          </div>
          <X
            className={`text-red-500 p-0.5 rounded-full ${
              open === "date"
                ? "shadow-sm border border-gray-200"
                : " opacity-0"
            }`}
            size={22}
          />
        </button>

        <div className="w-px h-8 bg-gray-200" />

        {/* Guests */}
        <button
          onClick={() => setOpen(open === "guest" ? null : "guest")}
          className={`flex-1 flex justify-between items-center px-5 py-4 text-left rounded-full ${
            open === "guest" ? "shadow-sm border border-gray-100" : ""
          }`}
        >
          <div>
            <p className="text-xs font-semibold text-gray-500">Guests</p>
          <p className="text-sm text-gray-900">
            {guests.adults + guests.children} guests · {guests.rooms} rooms
          </p>
          </div>
          <X
            className={`text-red-500 p-0.5 rounded-full ${
              open === "guest"
                ? "shadow-sm border border-gray-200"
                : " opacity-0"
            }`}
            size={22}
          />
        </button>

        {/* Search */}
        <button className="ml-2 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center">
          <Search />
        </button>
      </div>

      {/* Popups */}
      {open === "stay" && <StayDropdown onSelect={setStay} />}
      {open === "date" && (
        <DatePickerOneMonth value={date} onChange={setDate} />
      )}
      {open === "guest" && (
        <GuestRoomPicker value={guests} onChange={setGuests} />
      )}
    </div>
  );
}
