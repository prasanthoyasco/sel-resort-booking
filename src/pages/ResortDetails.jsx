import React from "react";
import AmenitiesGrid from "../component/AmenitiesGrid";
import GalleryHero from "../component/GalleryHero";
import StaySearchBar from "../component/StaySearchForm/StaySearchBar";
import FilterBar from "../component/FilterBar/FilterBar";
import NewFooter from "../component/NewFooter";
import ResortRoomCard from "../component/ResortRoomCard";
import { useParams } from "react-router-dom";
const resortRooms = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
    title: "Exicutive Calm Suite",
    size: "150 m²",
    description:
      "A space for six souls seeking joy two pools, lush greenery, and endless days under the sun.",
    tags: ["2 bedrooms", "mountain view", "sauna", "1 terrace", "lake view"],
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    title: "Mount Breeze Sun Shine Suite",
    size: "120 m²",
    description:
      "Wake up to the sound of waves with panoramic ocean views, private balcony, and serene interiors.",
    tags: ["1 bedroom", "ocean view", "balcony", "king bed"],
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    title: "Forest Retreat Suite",
    size: "180 m²",
    description:
      "Hidden among tall trees, this villa offers ultimate privacy with a plunge pool and outdoor deck.",
    tags: ["3 bedrooms", "forest view", "private pool", "deck"],
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
    title: "Classic southern touch",
    size: "95 m²",
    description:
      "A romantic escape overlooking the lagoon, perfect for couples seeking calm evenings.",
    tags: ["1 bedroom", "lagoon view", "bathtub", "sunset view"],
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6",
    title: "Mount Presidential",
    size: "260 m²",
    description:
      "Our most luxurious offering with expansive living areas, infinity pool, and personal butler service.",
    tags: [
      "4 bedrooms",
      "infinity pool",
      "private garden",
      "butler service",
    ],
  },
];

export const ResortDetails = () => {
  const { name } = useParams();
  return (
    <>
      <GalleryHero
        title={`${decodeURIComponent(name)} rooms`}
        showPlayButton={false}
        backgroundImage="https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/685a3cf73d56b32034529474_Banner-3.webp"
        playImage="https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/684bbaeede270ba0c81fc1a6_Play.webp"
        cards={[
          {
            id: "left",
            image:
              "https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/684aefed3a25b6819fddd29b_1-p-800.webp",
            title: "Go Home",
            position: "left",
            link: "/",
          },
          {
            id: "right",
            image:
              "https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/684aeff17f4897f4928183ab_2-p-800.webp",
            title: "Our Services",
            position: "right",
            link: "/resorts",
          },
        ]}
      />
      <StaySearchBar />
      <div className="relative px-5 lg:px-20 top-15">
        <FilterBar />
        <div className="space-y-6 mt-10">
          {resortRooms.map((room) => (
            <ResortRoomCard key={room.id} {...room} />
          ))}
        </div>
      </div>
      <AmenitiesGrid />
      <NewFooter />
    </>
  );
};
