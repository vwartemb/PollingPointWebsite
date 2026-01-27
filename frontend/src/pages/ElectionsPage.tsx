import {
  Search,
  Calendar,
  Users,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  Filter,
  MapPin,
  Check,
} from "lucide-react";
import FeaturesSection from "../components/home/FeaturesSection";
import HeroSection from "../components/home/HeroSection";
import QuickStats from "../components/elections/QuickStats";
import ElectionsCards from "../components/elections/ElectionsCards";

function ElectionsPage() {
  return (
    <>
      <HeroSection
        title="Find Your Elections"
        subtitle="Enter your address to see all upcoming elections in your area."
        showButtons={false}
        showSearchBar={true}
        showLocationDisplay={true}
        backgroundImageUrl="/images/ctabackground.jpeg"
      />

      <QuickStats />
      <ElectionsCards />

      <FeaturesSection
        title="Voter Resources"
        description="Tools and resources to help you prepare for election day"
        features={[
          {
            icon: <CheckCircle className="text-green-400 mb-4" size={32} />,
            title: "Check Registration",
            description:
              "Verify your voter registration status and update if needed",
            button: (
              <button className="text-blue-400 font-semibold hover:text-blue-300">
                Check Now →
              </button>
            ),
          },
          {
            icon: <MapPin className="text-blue-400 mb-4" size={32} />,
            title: "Polling Locations",
            description: "Find your polling place with hours and directions",
            button: (
              <button className="text-blue-400 font-semibold hover:text-blue-300">
                Find Location →
              </button>
            ),
          },
          {
            icon: <Calendar className="text-purple-400 mb-4" size={32} />,
            title: "Important Dates",
            description: "Registration deadlines and early voting periods",
            button: (
              <button className="text-blue-400 font-semibold hover:text-blue-300">
                View Calendar →
              </button>
            ),
          },
        ]}
      />
    </>
  );
}

export default ElectionsPage;
