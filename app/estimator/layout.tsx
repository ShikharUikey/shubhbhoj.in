import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catering Cost Estimator",
  description: "Calculate your premium wedding and corporate catering budget instantly. Shubh Bhoj offers transparent, customizable catering packages in Delhi NCR.",
  keywords: ["catering packages delhi", "catering quote delhi", "wedding catering cost delhi", "book caterer in delhi ncr", "custom catering packages delhi", "affordable catering services in delhi"],
  alternates: {
    canonical: "/estimator",
  },
  openGraph: {
    title: "Catering Cost Estimator | Shubh Bhoj",
    description: "Calculate your premium wedding and corporate catering budget instantly. Shubh Bhoj offers transparent, customizable catering packages in Delhi NCR.",
    url: "/estimator",
  },
  twitter: {
    title: "Catering Cost Estimator | Shubh Bhoj",
    description: "Calculate your premium wedding and corporate catering budget instantly. Shubh Bhoj offers transparent, customizable catering packages in Delhi NCR.",
  },
};

export default function EstimatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
