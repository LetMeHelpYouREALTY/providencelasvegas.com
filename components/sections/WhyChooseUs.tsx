import { Shield, TrendingUp, Users, Award, Clock, Home } from "lucide-react";
import SectionMedia from "@/components/media/SectionMedia";

const features = [
  {
    icon: Shield,
    title: "Services: Buy, Sell, Luxury, 55+",
    description:
      "Full service real estate—home buying, selling, luxury homes, 55+ communities, new construction, and relocation.",
  },
  {
    icon: TrendingUp,
    title: "Locations: Providence, North Las Vegas",
    description:
      "Providence Real Estate serves Providence (27 neighborhoods) and North Las Vegas, NV 89166.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description:
      "Dedicated attention to every buyer and seller with customized solutions for your needs.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description:
      "500+ successful transactions and satisfied clients across Providence neighborhoods.",
  },
  {
    icon: Clock,
    title: "Responsive Agent",
    description:
      "Quick response times and seamless communication for all Las Vegas real estate needs.",
  },
  {
    icon: Home,
    title: "Full Service Real Estate",
    description:
      "Complete support from search to closing—services and locations across Las Vegas.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionMedia
          imageKey="section-why-choose"
          heading="Why Providence Real Estate"
          subtitle="Providence Real Estate serves Providence and North Las Vegas, NV 89166. Expert local guidance for buying and selling homes in Providence Las Vegas."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="bg-blue-100 rounded-full p-4 mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
