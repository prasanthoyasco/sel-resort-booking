import React from "react";

const Stayinfosection = () => {
  return (
    <div className="space-y-6 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
      {/* Stay Information Title */}
      <h2 className="text-xl font-semibold">Stay information</h2>

      {/* Description */}
      <div className="leading-relaxed text-gray-700">
        <span>
          Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides
          accommodation, an outdoor swimming pool, a bar, a shared lounge, a
          garden and barbecue facilities. Complimentary WiFi is provided.
        </span>
        <br />
        <br />
        <span>
          There is a private bathroom with bidet in all units, along with a
          hairdryer and free toiletries.
        </span>
        <br />
        <br />
        <span>
          The Symphony 9 Tam Coc offers a terrace. Both a bicycle rental service
          and a car rental service are available at the accommodation, while
          cycling can be enjoyed nearby.
        </span>
      </div>

      {/* Divider */}
      <hr className="w-full border-t border-gray-900/10" />

      {/* Room Rates Title */}
      <div>
        <h2 className="text-xl font-semibold">Room Rates</h2>
        <h3 className="mt-2.5 text-base leading-6 text-gray-700 ">
          Prices may increase on weekends or holidays
        </h3>
      </div>

      {/* Rates Table */}
      <dl className=" grid grid-cols-2 gap-6 lg:gap-0 lg:grid-cols-1 text-base leading-6 sm:grid-cols-[min(50%,--spacing(80))_auto]">
        {/* Mon–Thu */}
        <dt
          className="col-start-1 border-t border-gray-900/5  pt-1 lg:pt-3 text-gray-500 
                   first:border-none sm:py-"
        >
          Monday - Thursday
        </dt>
        <dd
          className="pt-1 pb-3 text-gray-950 sm:border-t sm:border-gray-950/5 
                   sm:py-3 font-semibold"
        >
          ₹ 199
        </dd>

        {/* Fri–Sun */}
        <dt
          className="col-start-1 border-t border-gray-950/5 pt-1 lg:pt-3 text-gray-500
                   sm:py-3 font-semibold"
        >
          Friday - Sunday
        </dt>
        <dd
          className="pt-1 pb-3 text-gray-950 sm:border-t sm:border-gray-950/5
                   sm:py-3 font-semibold"
        >
          ₹ 219
        </dd>

        {/* Monthly */}
        <dt
          className="col-start-1 border-t border-gray-950/5 pt-1 lg:pt-3 text-gray-500 
                   sm:py-3 "
        >
          Rent by month
        </dt>
        <dd
          className="pt-1 pb-3 text-gray-950 sm:border-t sm:border-gray-950/5
                   sm:py-3 font-semibold"
        >
          -8.34 %
        </dd>

        {/* Min Nights */}
        <dt
          className="col-start-1 border-t border-gray-950/5 pt-1 lg:pt-3 text-gray-500 
                   sm:py-3 "
        >
          Minimum number of nights
        </dt>
        <dd
          className="pt-1 pb-3 text-gray-950 sm:border-t sm:border-gray-950/5
                   sm:py-3 font-semibold"
        >
          1 night
        </dd>

        {/* Max Nights */}
        <dt
          className="col-start-1 border-t border-gray-950/5 pt-1 lg:pt-3 text-gray-500
                   sm:py-3 "
        >
          Max number of nights
        </dt>
        <dd
          className="pt-1 pb-3 text-gray-950 sm:border-t sm:border-gray-950/5
                   sm:py-3 font-semibold"
        >
          90 nights
        </dd>
      </dl>
    </div>
  );
};

export default Stayinfosection;
