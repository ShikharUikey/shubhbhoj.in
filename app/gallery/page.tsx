import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GalleryGrid from "../components/GalleryGrid";

export const metadata: Metadata = {
  title: "Event & Wedding Gallery",
  description: "Browse the stunning event gallery of Shubh Bhoj Catering. See our premium food setups, royal presentation, and beautiful event management in Delhi NCR.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Event & Wedding Gallery | Shubh Bhoj Catering",
    description: "Browse the stunning event gallery of Shubh Bhoj Catering. See our premium food setups, royal presentation, and beautiful event management in Delhi NCR.",
    url: "/gallery",
    images: ["/gallery-5.jpg"],
  },
  twitter: {
    title: "Event & Wedding Gallery | Shubh Bhoj Catering",
    description: "Browse the stunning event gallery of Shubh Bhoj Catering. See our premium food setups, royal presentation, and beautiful event management in Delhi NCR.",
    images: ["/gallery-5.jpg"],
  },
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <GalleryGrid />
      </main>
      <Footer />
    </>
  );
}