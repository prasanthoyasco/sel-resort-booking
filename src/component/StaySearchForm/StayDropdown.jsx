const stays = [
  { id: 1, name: "Luxury Beach Resort" },
  { id: 2, name: "Mountain View Villa" },
  { id: 3, name: "City Center Hotel" },
  { id: 4, name: "Heritage Palace Stay" },
];

export default function StayDropdown({ onSelect }) {
  return (
    <div className="absolute left-0 right-0 sm:left-0 sm:w-96 mt-3 bg-white rounded-2xl shadow-2xl p-4">
      <p className="text-xs text-gray-400 mb-3">Suggested stays</p>
      {stays.map((stay) => (
        <button
          key={stay.id}
          onClick={() => onSelect(stay)}
          className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-100"
        >
          {stay.name}
        </button>
      ))}
    </div>
  );
}

