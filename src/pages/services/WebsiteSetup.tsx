import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import serviceImage from "@/assets/service-setup.jpg";

const WebsiteSetup = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Website Setup</h1>
          
          <img
            src={serviceImage}
            alt="Website Setup"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Complete Website Configuration</h2>
            
            <p className="mb-4">
              Let SpiderWebs handle all the technical aspects of launching your website. 
              Our comprehensive setup services ensure your site is properly configured, 
              secure, and ready to go live from day one.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Setup Services Include:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Domain registration and DNS configuration</li>
              <li>Web hosting setup and server configuration</li>
              <li>SSL certificate installation for secure connections</li>
              <li>Content Management System (CMS) installation</li>
              <li>Email accounts setup and configuration</li>
              <li>Website analytics and tracking implementation</li>
              <li>SEO foundation setup</li>
              <li>Security plugins and firewalls installation</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Technical Configuration:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Server Optimization:</strong> Fine-tuning server settings for maximum performance</li>
              <li><strong>Database Setup:</strong> Proper database configuration and optimization</li>
              <li><strong>Caching Configuration:</strong> Implementing caching strategies for faster load times</li>
              <li><strong>CDN Integration:</strong> Setting up Content Delivery Networks for global reach</li>
              <li><strong>Backup Systems:</strong> Automated backup solutions for data protection</li>
            </ul>

            <p className="mb-4">
              We handle all the complex technical details so you can focus on your business. 
              Our setup process is thorough, efficient, and designed to get your website 
              online quickly and correctly.
            </p>

            <div className="bg-secondary/30 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-3">What You Get:</h3>
              <ul className="space-y-2">
                <li>✓ Fully configured and tested website</li>
                <li>✓ All necessary login credentials and documentation</li>
                <li>✓ Initial training on managing your website</li>
                <li>✓ Security best practices implementation</li>
                <li>✓ 30-day post-launch technical support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default WebsiteSetup;
