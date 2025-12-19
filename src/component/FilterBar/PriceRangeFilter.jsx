export default function PriceRangeFilter({ value, onChange,variant = "desktop", }) {
  return (
    <div className={variant === "desktop" ? "dropdown" : "dropdown-mobile space-y-3"}>
        <label for="minmax-range" class="block mb-1 text-sm font-medium text-heading">Price</label>
      <input
        type="range"
        min="1000"
        max="10000"
        step="500"
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"

      />
      <p className="text-xs text-gray-600 mt-2">Up to <strong>₹{value || 10000}</strong></p>
    </div>
  );
}
