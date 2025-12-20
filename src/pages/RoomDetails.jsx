import React from "react";
import RoomHero from "../component/RoomHero";
import RoomDetailsSection from "../component/RoomDetailsSection";
import RoomGallerySection from "../component/RoomGallerySection";
import RoomReviewSection from "../component/RoomReviewSection";
import ResortSection from "../component/ResortSection";
import NewFooter from "../component/NewFooter";
export const RoomDetails = () => {
  return (
    <div className="overflow-x-hidden!">
    <RoomHero
      image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
      title="SIERRA DOUBLE ROOM"
      subtitle="Exquisite furnishings for a cosy ambience"
    />
    <RoomDetailsSection/>
    <RoomGallerySection/>
    <RoomReviewSection/>
    <ResortSection />
    <NewFooter/>
    </div>
  );
};
