const types = ["Hotel", "Apartment", "Villa", "Resort"];

export default function PropertyTypeFilter({ value, onChange,variant= "desktop" }) {
  const toggle = (t) =>
    value.includes(t)
      ? onChange(value.filter((x) => x !== t))
      : onChange([...value, t]);

  return (
    <div className={variant === "desktop" ? "dropdown" : "dropdown-mobile"}>
      {types.map((t) => (
        <label key={t} className="flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            checked={value.includes(t)}
            onChange={() => toggle(t)}
          />
          {t}
        </label>
      ))}
    </div>
  );
}
