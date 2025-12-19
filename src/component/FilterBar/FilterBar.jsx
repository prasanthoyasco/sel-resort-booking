import { useState, useRef, useEffect } from "react";
import PropertyTypeFilter from "./PropertyTypeFilter";
import PriceRangeFilter from "./PriceRangeFilter";
import RoomsBedsFilter from "./RoomsBedsFilter";
import FiltersModal from "./FiltersModal";

export default function FilterBar() {
  const [open, setOpen] = useState(null);
  const wrapperRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [filters, setFilters] = useState({
    propertyTypes: [],
    price: null,
    rooms: 0,
    beds: 0,
  });

  const activeCount =
    filters.propertyTypes.length +
    (filters.price ? 1 : 0) +
    (filters.rooms || filters.beds ? 1 : 0);

  // 🔥 CLICK OUTSIDE HANDLER
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(null);
      }
    };

    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const filterSummary = () => {
    const parts = [];

    // Property type
    if (filters.propertyTypes.length > 0) {
      parts.push(filters.propertyTypes.join(" / "));
    } else {
      parts.push("Property");
    }

    // Price
    if (filters.price) {
      parts.push(`within the range of Max ₹ ${filters.price}`);
    }

    // Rooms & beds logic
    if (filters.rooms > 0) {
      if (filters.rooms === 1) {
        parts.push(
          filters.beds <= 1
            ? "for 1 room with a king size bed"
            : `for 1 room with ${filters.beds} single beds`
        );
      } else {
        parts.push(
          `for ${filters.rooms} rooms with ${
            filters.beds || filters.rooms * 2
          } single beds or ${filters.rooms} King size bed `
        );
      }
    }

    return parts.join(" ");
  };

  return (
    <div ref={wrapperRef} className="relative z-40">
      {/* All filters */}
      <div className="lg:hidden">
      <div className="flex gap-3">
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden relative flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-600 text-sm font-medium"
        >
          Filters
        </button>
        <div className="relative flex items-center h-full">
          {activeCount > 0 && (
            <p className="text-xs text-gray-600 mt-0 max-w-2xl">
              <strong>So You Want:</strong> {filterSummary()}
            </p>
          )}
        </div>
      </div>
        <FiltersModal open={mobileOpen} onClose={() => setMobileOpen(false)}>
          <div className="space-y-6">
            {/* Property Type */}
            <div>
              <h4 className="font-medium mb-2">Property type</h4>
              <PropertyTypeFilter
                value={filters.propertyTypes}
                onChange={(v) => setFilters({ ...filters, propertyTypes: v })}
                variant="mobile"
              />
            </div>

            {/* Price */}
            <div>
              {/* <h4 className="font-medium mb-2">Price range</h4> */}
              <PriceRangeFilter
                value={filters.price}
                onChange={(v) => setFilters({ ...filters, price: v })}
                variant="mobile"
              />
            </div>

            {/* Rooms */}
            <div>
              <h4 className="font-medium mb-2">Rooms & Beds</h4>
              <RoomsBedsFilter
                value={{
                  rooms: filters.rooms,
                  beds: filters.beds,
                }}
                onChange={(v) => setFilters({ ...filters, ...v })}
                variant="mobile"
              />
            </div>

            {/* Apply button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-medium"
            >
              Apply Filters
            </button>
          </div>
        </FiltersModal>
      </div>

      <div className="hidden lg:flex items-center gap-3">
        <button className="hidden lg:flex relative items-center gap-2 px-4 py-2 rounded-full border border-indigo-600 text-sm font-medium">
          <span
            onClick={(e) => {
              e.stopPropagation();
              if (activeCount > 0) {
                setFilters({
                  propertyTypes: [],
                  price: null,
                  rooms: 0,
                  beds: 0,
                });
                setOpen(null);
              }
            }}
            className="cursor-pointer"
          >
            {activeCount === 0 ? "Filters" : "Clear"}
          </span>

          {activeCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center">
              {activeCount}
            </span>
          )}
        </button>

        <div className="w-px h-6 bg-gray-200" />

        {/* Property type */}
        <div className="relative">
          <button
            onClick={() => setOpen(open === "type" ? null : "type")}
            className="filter-pill"
          >
            Property type
            {filters.propertyTypes.length > 0 && (
              <span className="count-badge">
                {filters.propertyTypes.length}
              </span>
            )}
          </button>

          {open === "type" && (
            <PropertyTypeFilter
              value={filters.propertyTypes}
              onChange={(v) => setFilters({ ...filters, propertyTypes: v })}
            />
          )}
        </div>

        {/* Price range */}
        <div className="relative">
          <button
            onClick={() => setOpen(open === "price" ? null : "price")}
            className="filter-pill"
          >
            Price range
          </button>

          {open === "price" && (
            <PriceRangeFilter
              value={filters.price}
              onChange={(v) => setFilters({ ...filters, price: v })}
            />
          )}
        </div>

        {/* Rooms & Beds */}
        <div className="relative">
          <button
            onClick={() => setOpen(open === "rooms" ? null : "rooms")}
            className="filter-pill"
          >
            Rooms & Beds
          </button>

          {open === "rooms" && (
            <RoomsBedsFilter
              value={{ rooms: filters.rooms, beds: filters.beds }}
              onChange={(v) => setFilters({ ...filters, ...v })}
            />
          )}
        </div>

        <div className="relative flex items-center h-full">
          {activeCount > 0 && (
            <p className="text-sm text-gray-600 mt-0 max-w-3xl">
              <strong>So You Want:</strong> {filterSummary()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
