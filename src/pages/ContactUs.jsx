import React from "react";
import ContactSection from "../component/ContactSection";
import ResortSection from "../component/ResortSection";
import GalleryHero from "../component/GalleryHero";
import NewFooter from "../component/NewFooter";

export const ContactUs = () => {
  return (
    <div>
      <GalleryHero
        title="Contact Us"
        height = "h-[30vh] lg:h-[70vh]"
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
      <ContactSection />
      <FullWidthMap />
      <ResortSection />
      <NewFooter />
    </div>
  );
};

export default function FullWidthMap() {
  return (
    <section className="w-[90%] rounded-2xl relative mx-auto" data-aos="zoom-in" data-aos-delay="500">
      <div className="w-full h-[450px] rounded-2xl">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000!2d76.82056837504634!3d11.083468089084587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859fe8387793f%3A0x13264b368b85e3e4!2sThe%20Farm%20Retreat!5e1!3m2!1sen!2sin"
          className="w-full h-full border-0 rounded-2xl"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
