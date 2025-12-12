import React from 'react'

const Bookingform = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow space-y-4">
            <div className="text-gray-400 line-through">₹2500</div>
            <div className="text-2xl font-bold text-[#758dc2]">₹1900 /night</div>

            <div className="bg-gray-100 rounded-lg p-4 space-y-2 text-sm">
              <div>Feb 02 – Feb 06</div>
              <div>Check in – Check out</div>
              <div>4 Guests</div>
            </div>

            <div className="flex justify-between text-sm">
              <span>₹1900.00 x 3 day</span>
              <span>₹5700.00</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹5700.00</span>
            </div>

            <button className="w-full btn-bg-primery text-black py-3 rounded-full">
              Reserve
            </button>
          </div>
  )
}

export default Bookingform
