function Counter({ label, value, onChange, sub }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-xs text-gray-400">{sub}</p>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={() => onChange(value - 1)} className="w-8 h-8 border border-gray-400 rounded-full">−</button>
        <span className="w-3">{value}</span>
        <button onClick={() => onChange(value + 1)} className="w-8 h-8 border border-gray-400 rounded-full">+</button>
      </div>
    </div>
  );
}

export default function GuestRoomPicker({ value, onChange }) {
  return (
    <div className="absolute left-0 right-0 sm:left-1/2 lg:left-4/5 sm:-translate-x-1/2 mt-3 bg-white rounded-2xl shadow-2xl w-full sm:w-80 p-6 space-y-5"> 
      <Counter
        label="Adults"
        sub="Ages 13+"
        value={value.adults}
        onChange={(v) => onChange({ ...value, adults: Math.max(1, v) })}
      />
      <Counter
        label="Children"
        sub="Ages 2–12"
        value={value.children}
        onChange={(v) => onChange({ ...value, children: Math.max(0, v) })}
      />
      <Counter
        label="Infants"
        sub="Ages 0–2"
        value={value.infants}
        onChange={(v) => onChange({ ...value, infants: Math.max(0, v) })}
      />
      <Counter
        label="Rooms"
        sub="Number of rooms"
        value={value.rooms}
        onChange={(v) => onChange({ ...value, rooms: Math.max(1, v) })}
      />
    </div>
  );
}
