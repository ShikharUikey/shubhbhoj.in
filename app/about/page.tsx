import { Metadata } from "next";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Shubh Bhoj Catering, the premium wedding caterers and event management experts based in Delhi NCR.",
  keywords: ["shubh bhoj catering and events delhi", "top catering companies in delhi", "authentic indian catering", "royal hospitality and catering"],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Shubh Bhoj Catering",
    description: "Learn more about Shubh Bhoj Catering, the premium wedding caterers and event management experts based in Delhi NCR.",
    url: "/about",
    images: ["/about-hero.jpg"],
  },
  twitter: {
    title: "About Us | Shubh Bhoj Catering",
    description: "Learn more about Shubh Bhoj Catering, the premium wedding caterers and event management experts based in Delhi NCR.",
    images: ["/about-hero.jpg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}