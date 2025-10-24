import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import serviceImage from "@/assets/service-domain.jpg";

const FreeDomain = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Free Domain Name</h1>
          
          <img
            src={serviceImage}
            alt="Free Domain Name"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Get Your Perfect Domain Name Free</h2>
            
            <p className="mb-4">
              Your domain name is your digital address and brand identity. SpiderWebs 
              includes a free domain name with all our web development packages, helping 
              you establish a professional online presence without additional costs.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Domain Services Include:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Free domain registration for one year</li>
              <li>Wide selection of domain extensions (.com, .net, .org, etc.)</li>
              <li>Domain privacy protection included</li>
              <li>Easy domain management dashboard</li>
              <li>DNS management and configuration</li>
              <li>Email forwarding setup</li>
              <li>Domain transfer assistance</li>
              <li>Auto-renewal options available</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Choosing Your Domain Name:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Brand Identity:</strong> We help you select a name that reflects your business</li>
            
              <li><strong>Availability Check:</strong> Verify domain availability across extensions</li>
              <li><strong>Trademark Research:</strong> Ensure your chosen name is legally safe to use</li>
              <li><strong>Alternative Suggestions:</strong> Multiple options if your first choice is taken</li>
            </ul>

            <p className="mb-4">
              A good domain name is memorable, easy to spell, and represents your brand 
              effectively. Our team assists you in selecting the perfect domain that will 
              serve your business for years to come.
            </p>

            <div className="bg-secondary/30 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-3">Domain Management Features:</h3>
              <ul className="space-y-2">
                <li>✓ Full ownership and control of your domain</li>
                <li>✓ Easy DNS record management</li>
                <li>✓ Subdomain creation capabilities</li>
                <li>✓ Domain forwarding and redirection</li>
                <li>✓ WHOIS privacy protection</li>
                <li>✓ 24/7 access to domain settings</li>
              </ul>
            </div>

            <p className="mt-6">
              After the first year, renewal is available at competitive market rates. 
              We'll notify you well in advance to ensure your domain remains active 
              without interruption.
            </p>
          </div>
        </div>
         <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default FreeDomain;
