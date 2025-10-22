import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import serviceImage from "@/assets/service-design.jpg";

const WebsiteDesign = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Website Design</h1>
          
          <img
            src={serviceImage}
            alt="Website Design"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Professional Web Design Services</h2>
            
            <p className="mb-4">
              At SpiderWebs, we create stunning, user-friendly website designs that captivate 
              your audience and drive engagement. Our design philosophy combines aesthetics 
              with functionality to deliver exceptional digital experiences.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">What We Offer:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Custom design tailored to your brand identity</li>
              <li>Modern, responsive layouts that work on all devices</li>
              <li>Intuitive user interface and navigation</li>
              <li>Professional color schemes and typography</li>
              <li>Conversion-optimized design elements</li>
              <li>Accessibility-compliant designs</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Our Design Process:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Discovery:</strong> Understanding your business goals and target audience</li>
              <li><strong>Research:</strong> Analyzing competitors and industry trends</li>
              <li><strong>Wireframing:</strong> Creating the blueprint of your website structure</li>
              <li><strong>Design:</strong> Crafting beautiful mockups and prototypes</li>
              <li><strong>Refinement:</strong> Incorporating your feedback for the perfect result</li>
              <li><strong>Delivery:</strong> Providing design files ready for development</li>
            </ul>

            <p className="mb-4">
              Our experienced designers stay updated with the latest design trends and best 
              practices to ensure your website stands out in today's competitive digital landscape.
            </p>

            <div className="bg-secondary/30 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-3">Why Choose Our Design Services?</h3>
              <ul className="space-y-2">
                <li>✓ Unique designs that reflect your brand personality</li>
                <li>✓ Mobile-first approach for optimal user experience</li>
                <li>✓ Fast turnaround times without compromising quality</li>
                <li>✓ Unlimited revisions until you're 100% satisfied</li>
                <li>✓ Ongoing support and design consultation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default WebsiteDesign;
