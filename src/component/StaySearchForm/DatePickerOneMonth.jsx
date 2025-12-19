import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DatePickerOneMonth({ value, onChange }) {
  const today = new Date();

  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  return (
    <div className="absolute left-0 right-0 sm:left-1/2 sm:-translate-x-1/2 mt-3 bg-white rounded-2xl shadow-2xl p-3 w-full sm:w-[340px]">
      <DatePicker
        inline
        selectsRange
        startDate={value.start}
        endDate={value.end}
        onChange={([start, end]) => onChange({ start, end })}
        minDate={monthStart}
        maxDate={monthEnd}
        monthsShown={1}
        calendarStartDay={0}
        shouldCloseOnSelect={true}
        renderCustomHeader={({ monthDate }) => (
          <div className="flex items-center justify-between mb-3 px-2">
            {/* 🔒 Disabled arrows */}
            <button
              disabled
              className="p-1 rounded-full opacity-30 cursor-not-allowed"
            >
              <ChevronLeft size={18} />
            </button>

            <p className="font-semibold text-sm">
              {monthDate.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </p>

            <button
              disabled
              className="p-1 rounded-full opacity-30 cursor-not-allowed"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
        dayClassName={(date) => {
          const isStart =
            value.start &&
            date.toDateString() === value.start.toDateString();

          const isEnd =
            value.end &&
            date.toDateString() === value.end.toDateString();

          if (isStart || isEnd) return "custom-selected-day";

          return "custom-day";
        }}
        weekDayClassName={() =>
          "text-xs text-gray-400 font-medium"
        }
      />

      {/* 🔹 Custom styles */}
      <style>{`
        .react-datepicker {
          border: none;
          font-family: inherit;
        }

        .react-datepicker__day-names {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          margin-bottom: 4px;
        }

        .react-datepicker__week {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
        }

        .react-datepicker__day {
          width: 36px;
          height: 36px;
          line-height: 36px;
          margin: 2px auto;
          border-radius: 9999px;
          font-size: 14px;
        }

        .custom-day:hover {
          background-color: #eef2ff;
        }

        .custom-selected-day {
          background-color: #6366f1 !important;
          color: white !important;
          font-weight: 600;
        }

        .react-datepicker__day--in-range {
          background-color: #eef2ff;
          color: #111827;
          border-radius: 0;
        }

        .react-datepicker__day--range-start,
        .react-datepicker__day--range-end {
          background-color: #6366f1 !important;
          color: white !important;
          border-radius: 9999px;
        }

        .react-datepicker__day--outside-month {
          color: #9ca3af;
        }
      `}</style>
    </div>
  );
}
