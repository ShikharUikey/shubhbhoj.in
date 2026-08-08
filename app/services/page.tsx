import { Metadata } from "next";
import Navbar from "../components/Navbar";
import ServicesPreview from "../components/ServicesPreview";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Catering Services in Delhi NCR",
  description: "Explore our premium catering services for weddings, corporate events, birthday parties, and outdoor events in Delhi NCR.",
  keywords: ["wedding caterers in india", "premium wedding catering delhi", "corporate event catering delhi", "birthday party caterers delhi", "vegetarian catering services delhi", "live food counters for weddings", "engagement party caterers delhi", "mehendi and sangeet catering", "corporate lunch catering services", "seminar and conference catering", "anniversary party catering", "pure veg catering services delhi", "multi cuisine catering delhi", "mocktail and bar catering setup", "chat counter for weddings"],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Catering Services in Delhi NCR | Shubh Bhoj",
    description: "Explore our premium catering services for weddings, corporate events, birthday parties, and outdoor events in Delhi NCR.",
    url: "/services",
    images: ["/services-hero.jpg"],
  },
  twitter: {
    title: "Catering Services in Delhi NCR | Shubh Bhoj",
    description: "Explore our premium catering services for weddings, corporate events, birthday parties, and outdoor events in Delhi NCR.",
    images: ["/services-hero.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesPreview />
      </main>
      <Footer />
    </>
  );
}
