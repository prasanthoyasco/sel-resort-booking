import { MapPin, Mail,PhoneCall } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    human: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({});
    setSuccess(false);
  };

  const validate = () => {
    const newErrors = {};

    if (!form.firstName) newErrors.firstName = "First name is required";
    if (!form.lastName) newErrors.lastName = "Last name is required";
    if (!form.email) newErrors.email = "Email is required"
    if (!form.phone) newErrors.phone = "Phone Number is required, We Won't distur You"
    if (!form.message) newErrors.message = "Message is required";
    if (form.human !== "4") newErrors.human = "Wrong answer";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // simulate success
    setSuccess(true);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      human: "",
    });
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-col-3 gap-12">
        {/* LEFT FORM */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-semibold mb-10">Get in Touch</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Name"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                error={errors.firstName}
              />
              <Input
                label="Last name"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                error={errors.lastName}
              />
              <Input
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
              />
              <Input
                label="Mobile"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                error={errors.phone}
              />
            </div>
                <CustomSelect/>
            <div>
              <textarea
                name="message"
                placeholder="Message eg: we would like book your resort for our Marriage...."
                value={form.message}
                onChange={handleChange}
                className="w-full h-40 rounded-md border border-gray-200 bg-white shadow-sm p-4 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
              {errors.message && (
                <p className="text-sm text-red-500 mt-1">{errors.message}</p>
              )}
            </div>

            <Input
              label="Are you human? 3 + 1 ="
              name="human"
              value={form.human}
              onChange={handleChange}
              error={errors.human}
            />

            {success && (
              <p className="text-green-600 font-medium">
                ✅ Message sent successfully!
              </p>
            )}

            <button
              type="submit"
              className="mt-4 inline-flex items-center justify-center rounded-full border border-black px-8 py-3 text-sm font-medium hover:bg-black hover:text-white transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* RIGHT INFO CARD */}
        <div className="bg-white rounded-xl shadow-sm p-8 space-y-15">
          <InfoBlock
            Icon={MapPin}
            title="Address"
            text="97845 Baker st, Coimbatore Tamilnadu - IN."
          />

          <InfoBlock
          Icon={Mail}
            title="Email address"
            text={
              <>
                booking@selhospitality.com <br />
                info@selhospitality.com
              </>
            }
          />

          <InfoBlock
          Icon={PhoneCall}
            title="Telephone"
            text={
              <>
                +91 80939 34027 <br />
                <span className="text-sm text-gray-400">
                  Monday to Friday 9am - 7pm
                </span>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Reusable Components ---------- */

function Input({ label, name, value, onChange, error }) {
  return (
    <div>
      <input
        type="text"
        name={name}
        placeholder={label}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-gray-200 bg-white shadow-sm p-4 focus:outline-none focus:ring-1 focus:ring-orange-500"
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}

function InfoBlock({ title, text, Icon }) {
  return (
    <div className="space-y-2">
      {Icon && <Icon className="w-6 h-6 text-[#eea159]" />}
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
}


function CustomSelect() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("The Farm Retreat");

  const options = [
    "The Farm Retreat",
    "The Retreat Farm",
    "The Jungle Safari",
  ];

  return (
    <div className="relative w-full">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between rounded-md border border-gray-200 bg-white px-4 py-4
                   shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        <span>{value}</span>
        <svg className={`w-4 h-4 text-gray-500 ${open ? "rotate-180":""} transition-all duration-400`} viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.7a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
        </svg>
      </button>

      {open && (
        <ul className="absolute z-20 mt-2 w-full rounded-md border border-gray-300 overflow-hidden bg-white shadow-lg">
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => {
                setValue(opt);
                setOpen(false);
              }}
              className="cursor-pointer px-4 py-3 hover:bg-orange-50"
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}