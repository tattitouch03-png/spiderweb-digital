import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import serviceImage from "@/assets/service-hosting.jpg";

const FreeHosting = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Free Hosting (Best in Industry)</h1>
          
          <img
            src={serviceImage}
            alt="Free Hosting"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Industry-Leading Free Hosting</h2>
            
            <p className="mb-4">
              SpiderWebs offers premium web hosting services at no cost. Our hosting 
              infrastructure is built on enterprise-grade servers, ensuring your website 
              remains fast, secure, and always accessible to your visitors.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Hosting Features:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>99.9% uptime guarantee</li>
              <li>Fast SSD storage for lightning-quick performance</li>
              <li>Unlimited bandwidth</li>
              <li>Free SSL certificates included</li>
              <li>Daily automated backups</li>
              <li>24/7 server monitoring</li>
              <li>DDoS protection and security features</li>
              <li>Easy-to-use control panel</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Technical Specifications:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Server Infrastructure:</strong> Latest-generation servers with redundant systems</li>
              <li><strong>Data Centers:</strong> Multiple locations worldwide for optimal speed</li>
              <li><strong>Technology Stack:</strong> Support for PHP, MySQL, Node.js, and more</li>
              <li><strong>Scalability:</strong> Resources that grow with your website</li>
              <li><strong>Email Hosting:</strong> Professional email accounts included</li>
            </ul>

            <p className="mb-4">
              Unlike other "free" hosting services that compromise on quality, SpiderWebs 
              provides the same high-performance infrastructure used by premium hosting 
              providers. There are no hidden fees, and no surprise charges.
            </p>

            <div className="bg-secondary/30 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-3">Why Our Hosting Stands Out:</h3>
              <ul className="space-y-2">
                <li>✓ No ads or branding on your website</li>
                <li>✓ Full control over your hosting environment</li>
                <li>✓ Professional support when you need it</li>
                <li>✓ Regular software updates and security patches</li>
                <li>✓ Easy migration from other hosting providers</li>
                <li>✓ Suitable for business and commercial use</li>
              </ul>
            </div>

            <p className="mt-6">
              Our free hosting service is part of our commitment to making professional 
              web presence accessible to everyone. We believe that cost should never be 
              a barrier to having a great website.
            </p>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default FreeHosting;
