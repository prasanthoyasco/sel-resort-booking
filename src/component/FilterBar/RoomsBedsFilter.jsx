function Counter({ label, value, onChange }) {
  return (
    <div className="flex items-center justify-between">
      <p>{label}</p>
      <div className="flex items-center gap-3 justify-between">
        <button onClick={() => onChange(value - 1)} className="counter-btn">−</button>
        <span className="w-3">{value}</span>
        <button onClick={() => onChange(value + 1)} className="counter-btn">+</button>
      </div>
    </div>
  );
}

export default function RoomsBedsFilter({ value, onChange,variant = "desktop", }) {
  const MAX_PERSONS_PER_ROOM = 2;
  const maxPersons = value.rooms * MAX_PERSONS_PER_ROOM;

  // Auto-fix if persons exceed allowed limit
  const handleRoomsChange = (rooms) => {
    const safeRooms = Math.max(1, rooms);
    const maxAllowedPersons = safeRooms * MAX_PERSONS_PER_ROOM;

    onChange({
      rooms: safeRooms,
      beds: Math.min(value.beds, maxAllowedPersons),
    });
  };

  return (
    <div className={variant === "desktop" ? "dropdown" : "dropdown-mobile space-y-4"}>
      {/* Rooms */}
      <Counter
        label="Rooms"
        value={value.rooms}
        min={1}
        onChange={handleRoomsChange}
      />

      {/* Persons */}
      <Counter
        label="Beds"
        value={value.beds}
        min={1}
        max={maxPersons}
        onChange={(v) =>
          onChange({
            ...value,
            beds: Math.min(Math.max(1, v), maxPersons),
          })
        }
      />
      <div className="flex-col">
      {/* Helper text */}
      <p className="text-xs text-gray-600 mb-1">
        Max <strong>{MAX_PERSONS_PER_ROOM}</strong> persons per room ·{" "}
        <strong>{maxPersons}</strong> total allowed
      </p>

      {/* Bed info */}
        {value.beds <= value.rooms * 2 ? (
        <p className="text-xs text-gray-700">
          You will get <strong>{value.rooms}</strong> room(s) with{" "}
          <strong>King Size Bed</strong>
        </p>
      ) : (
        <p className="text-xs text-gray-700">
          You will get <strong>Single Bed</strong> per person
        </p>
      )}
      </div>
    </div>
  );
}

