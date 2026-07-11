import { useState } from "react";
import SectionHeading from '../components/SectionHeading'
import CertificationCard from '../components/CertificationCard'
import aws from "../assets/certificates/aws.jpg";
import ey from "../assets/certificates/EY_Techathon.jpg";
import msme from "../assets/certificates/msme.jpg";
import cloud from "../assets/certificates/nptel_cloud.jpg";
import iot from "../assets/certificates/nptel_iot.jpg";
import python from "../assets/certificates/nptel_python.jpg";
import osci from "../assets/certificates/osci.jpg";

const CERTIFICATIONS = [
  { title: 'The Joy of Computing using Python', issuer: 'Nptel', date: 'Jun 2024',image: python},
  { title: 'Introduction of Internet of Things', issuer: 'Nptel', date: 'Jan 2026', image: iot},
  { title: 'Cloud Computing', issuer: 'Nptel', date: 'Jul 2024', image: cloud},
  { title: 'AR and VR Application Building', issuer: 'MSME', date: 'Dec 2025',image: msme },
  { title: 'OSCI Contributor', issuer: 'OSCI', date: 'Aug 2025', image:osci},
  { title: 'EY Technathon 6.0', issuer: 'Unstop', date: 'Apr 2026',image:ey },
  { title: 'Machine Learning Terminology and Process', issuer: 'aws traning and certification', date: 'Dec 2024',image:aws },
]

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);
const [selectedTitle, setSelectedTitle] = useState("");

const openModal = (image, title) => {
  setSelectedImage(image);
  setSelectedTitle(title);
};

const closeModal = () => {
  setSelectedImage(null);
  setSelectedTitle("");
};
  // Duplicate the list so the marquee loop is seamless.
  const looped = [...CERTIFICATIONS, ...CERTIFICATIONS]

  return (
    <section id="certifications" className="section overflow-hidden">
      <SectionHeading
        eyebrow="Certifications"
        title="Certifications & Achievements"
        subtitle="Continuous learning across data analytics, programming, and full stack development."
      />

      <div className="relative mt-14">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent sm:w-32" />

        <div className="group flex overflow-hidden py-4">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            {looped.map((cert, i) => (
  <CertificationCard
    key={`${cert.title}-${i}`}
    {...cert}
    onClick={openModal}
  />
))}
          </div>
        </div>
      </div>
      {selectedImage && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
    onClick={closeModal}
  >
    <div
      className="relative"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={closeModal}
        className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-red-500"
      >
        ✕
      </button>

      <img
        src={selectedImage}
        alt={selectedTitle}
        className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
      />
    </div>
  </div>
)}
    </section>
  )
}
