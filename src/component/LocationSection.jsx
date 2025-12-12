import { MapPin } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="w-full bg-white rounded-2xl p-6 mb-10 border border-gray-200">
      {/* Header */}
      <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
        <MapPin className="w-5 h-5" /> Location
      </h2>

      {/* Subtext */}
      <p className="text-gray-600 mb-4">
        The Farm Retreat, Anaikatti Rd, Mangarai, Tamil Nadu 641108
      </p>

      <hr className="my-4 border-gray-300" />

      {/* Google Map iFrame */}
      <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-sm border border-gray-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110773.20920958451!2d76.67890548706056!3d11.083490354564962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859fe8387793f%3A0x13264b368b85e3e4!2sThe%20Farm%20Retreat!5e1!3m2!1sen!2sin!4v1765542765029!5m2!1sen!2sin"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}