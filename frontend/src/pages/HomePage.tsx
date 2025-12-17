import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import EmpowerSection from "../components/home/EmpowerSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import CTASection from "../components/home/CTASection";
import Questions from "../components/home/Questions";

function HomePage() {  
  return (
    <>
      <HeroSection />
      <FeaturesSection />
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
