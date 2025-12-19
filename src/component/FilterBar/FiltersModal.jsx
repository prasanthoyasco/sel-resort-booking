import Portal from "./Portal";
export default function FiltersModal({ open, onClose, children }) {
  if (!open) return null;

  return (
     <Portal>
    <div className="fixed inset-0 z-60 lg:hidden">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* bottom sheet */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-5 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg">Filters</h3>
          <button
            onClick={onClose}
            className="text-sm text-gray-500"
          >
            Close
          </button>
        </div>

        {children}
      </div>
    </div>
    </Portal>
  );
}
