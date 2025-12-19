export default function DatePickerOneMonth({ value, onChange }) {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="absolute left-2/5 mt-4 bg-white rounded-2xl shadow-2xl p-6">
      <p className="text-center font-semibold mb-4">September 2025</p>

      <div className="grid grid-cols-7 gap-2 text-sm">
        {days.map((d) => (
          <button
            key={d}
            onClick={() =>
              !value.start
                ? onChange({ start: d, end: null })
                : onChange({ ...value, end: d })
            }
            className="w-9 h-9 rounded-full hover:bg-indigo-100"
          >
            {d}
          </button>
        ))}
      </div>
    </div>
  );
}
