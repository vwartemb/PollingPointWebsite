import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import EmpowerSection from "../components/home/EmpowerSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import CTASection from "../components/home/CTASection";
import Questions from "../components/home/Questions";
import { MapPin, Search, User } from "lucide-react";

function HomePage() {  
  return (
    <>
      <HeroSection
        title="Know your candidates, own your vote"
        subtitle="Democracy works best when voters are informed. We make it simple to research elections, compare candidates, and participate in the decisions that shape your community."
        showButtons={true}
        primaryButtonText="Find My Ballot"
        secondaryButtonText="Learn More"
       />
      <FeaturesSection 
        title="Everything you need"
        description="Simple, comprehensive tools to help you make informed decisions"
        features={[
          {
            icon: <Search className="text-green-400 mb-4" size={32} />,
            title: "Nonpartisan and easy to use",
            description: "Unbiased information from trusted sources, designed for everyone",
            button: <button className="text-blue-400 font-semibold hover:text-blue-300">About Us →</button>,
          },
          {
            icon: <User className="text-blue-400 mb-4" size={32} />,
            title: "Candidates side by side",
            description: "Compare positions and voting records in one place",
            button: <button className="text-blue-400 font-semibold hover:text-blue-300">Compare Candidates →</button>,
          },
          {
            icon: <MapPin className="text-purple-400 mb-4" size={32} />,
            title: "Be prepared to cast your vote",
            description: "Find polling locations, hours, and registration info",
            button: <button className="text-blue-400 font-semibold hover:text-blue-300">Find Location →</button>,
          }
        ]}  
       
      />
      <EmpowerSection />
      <HowItWorksSection />
      
      <CTASection 
        title="Get Started with PollingPoint Today"
        subtitle="Join thousands of voters using PollingPoint to access reliable election information."
        buttonText="Find My Ballot"
        buttonLink="/dashboard"
        imageUrl="/public/images/ctabackground.jpeg"
        //onClick={() => window.location.href = '/home'} 
      />
      
      <CTASection
        title="Stay Informed"
        subtitle="Subscribe to our newsletter for the latest updates on elections and voting resources."
        buttonText="Sign up for alerts"
        buttonLink="/dashboard"
        variant="dark"
        showEmailInput={true}
        //onClick={() => window.location.href = '/home'}  
      />  
      <Questions/>
    </>
  );
}

export default HomePage;
