import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import serviceImage from "@/assets/service-speed.jpg";

const SpeedOptimization = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Website Speed Optimization</h1>
          
          <img
            src={serviceImage}
            alt="Website Speed Optimization"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Lightning-Fast Website Performance</h2>
            
            <p className="mb-4">
              In today's digital world, speed matters. A slow website frustrates visitors, 
              hurts your search rankings, and costs you conversions. SpiderWebs specializes 
              in making websites blazingly fast through proven optimization techniques.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Optimization Services:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Comprehensive speed analysis and audit</li>
              <li>Image compression and optimization</li>
              <li>Code minification (CSS, JavaScript, HTML)</li>
              <li>Browser caching implementation</li>
              <li>Content Delivery Network (CDN) integration</li>
              <li>Database query optimization</li>
              <li>Lazy loading for images and videos</li>
              <li>Server response time reduction</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Technical Improvements:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Code Optimization:</strong> Streamlined, efficient code that loads faster</li>
              <li><strong>Asset Optimization:</strong> Compressed files without quality loss</li>
              <li><strong>Caching Strategies:</strong> Smart caching for repeat visitors</li>
              <li><strong>HTTP/2 Implementation:</strong> Modern protocol for faster data transfer</li>
              <li><strong>GZIP Compression:</strong> Reduced file sizes for quicker downloads</li>
              <li><strong>Critical CSS:</strong> Prioritized above-the-fold content loading</li>
            </ul>

            <p className="mb-4">
              Studies show that a 1-second delay in page load time can lead to a 7% reduction 
              in conversions. Our optimization services ensure your website loads in under 3 
              seconds, keeping visitors engaged and improving your bottom line.
            </p>

            <div className="bg-secondary/30 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-3">Performance Benefits:</h3>
              <ul className="space-y-2">
                <li>✓ Improved Google search rankings</li>
                <li>✓ Better user experience and engagement</li>
                <li>✓ Higher conversion rates</li>
                <li>✓ Reduced bounce rates</li>
                <li>✓ Lower bandwidth costs</li>
                <li>✓ Mobile-optimized performance</li>
              </ul>
            </div>

            <p className="mt-6">
              We use industry-leading tools like Google PageSpeed Insights, GTmetrix, and 
              Lighthouse to measure and improve your website's performance. Our goal is to 
              achieve 90+ scores across all metrics.
            </p>

            <div className="mt-6 p-4 border-l-4 border-primary bg-secondary/20">
              <p className="font-semibold mb-2">Speed Guarantee:</p>
              <p>
                We're confident in our optimization techniques. If we can't improve your 
                website's load time by at least 50%, we'll refund your investment—no questions asked.
              </p>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default SpeedOptimization;
