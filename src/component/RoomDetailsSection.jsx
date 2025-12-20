import {
  BedDouble,
  ShieldCheck,
  Tv,
  Dog,
  Wifi,
  WashingMachine,
  Armchair,
  AirVent,
  Accessibility,
} from "lucide-react";
import { PiHairDryer, PiBeerBottle } from "react-icons/pi";

const amenities = [
  { icon: BedDouble, label: "King Size Bed" },
  { icon: ShieldCheck, label: "Safety Box" },
  { icon: Armchair, label: "Balcony" },
  { icon: Tv, label: "32 Inch TV" },
  { icon: Accessibility, label: "Disabled Access" },
  { icon: Dog, label: "Pet Allowed" },
  { icon: PiBeerBottle, label: "Welcome Bottle" },
  { icon: Wifi, label: "Wifi / Netflix Access" },
  { icon: PiHairDryer, label: "Hair Dryer" },
  { icon: AirVent, label: "Air Condition" },
  { icon: WashingMachine, label: "Laundry Service" },
];

export default function RoomDetailsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT CONTENT */}
        <div data-aos="fade-right">
          <p className="mb-4 text-xs tracking-[0.25em] uppercase text-[#eea159]">
            Luxury Experience
          </p>

          <h2 className="mb-8 text-4xl font-semibold leading-tight text-gray-900 md:text-5xl">
            A deep space that
            <br />
            invites you to truly
            <br />
            Switch Off.
          </h2>

          <div className="space-y-6 text-gray-600 leading-relaxed max-w-xl">
            <p>
              The dark wood panelling and furnishings, deluxe red-draped
              four-poster bed, and magnificent black stone bathroom evoke
              the charm of a secluded Sierra Nevada getaway.
            </p>

            <p>
              The intimate scale and finish give the room a distinctly
              personal feel.
            </p>
          </div>
        </div>

        {/* RIGHT FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
          {amenities.map((item, index) => (
            <div
              key={item.label}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <Amenity icon={item.icon} label={item.label} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ---------- Amenity Row ---------- */
function Amenity({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-4 border-b border-gray-200 py-5">
      <Icon className="text-[#eea159]" size={24} />
      <span className="text-sm text-gray-700">{label}</span>
    </div>
  );
}
