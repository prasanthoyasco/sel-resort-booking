import React from "react";
import StayHeaderGallery from "../component/StayHeaderGallery";
import Navigation from "../component/Navigation";
import BookingPage from "../component/BookingPage";
import StayReview from "../component/StayReview";
import StayGallery from "../component/StayGallery/StayGallery";
import LocationSection from "../component/LocationSection";
import NewFooter from "../component/NewFooter";
import HappeningCities from "../component/HappeningCities";

export default function StaylistPage() {
  return (
    <div className="px-5 bg-gray-50">
      {/* <Navigation /> */}
      <StayHeaderGallery />
      <BookingPage/>
      {/* <StayGallery/> */}
      <StayReview/>
      <LocationSection/>
      <HappeningCities/>
       <NewFooter />
    </div>
  );
}
