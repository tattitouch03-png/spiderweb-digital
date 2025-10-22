import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import serviceImage from "@/assets/service-maintenance.jpg";

const MaintenanceBackup = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Website Maintenance & Backup</h1>
          
          <img
            src={serviceImage}
            alt="Website Maintenance & Backup"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Comprehensive Website Care</h2>
            
            <p className="mb-4">
              A website is not a one-time project—it requires ongoing care and attention. 
              SpiderWebs provides complete maintenance and backup services to keep your 
              website secure, updated, and performing at its best.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Maintenance Services:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Regular software and plugin updates</li>
              <li>Security monitoring and threat prevention</li>
              <li>Performance optimization and speed checks</li>
              <li>Broken link detection and fixing</li>
              <li>Content updates and modifications</li>
              <li>Browser compatibility testing</li>
              <li>Mobile responsiveness checks</li>
              <li>Uptime monitoring and alerts</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Backup Solutions:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Daily Automated Backups:</strong> Complete website backups every 24 hours</li>
              <li><strong>Secure Storage:</strong> Encrypted backup files stored in multiple locations</li>
              <li><strong>Easy Restoration:</strong> One-click restore functionality when needed</li>
              <li><strong>Version History:</strong> Access to previous versions of your website</li>
              <li><strong>Database Backups:</strong> Full database snapshots included</li>
              <li><strong>File System Backups:</strong> All website files and media protected</li>
            </ul>

            <p className="mb-4">
              Our proactive maintenance approach identifies and resolves issues before 
              they impact your website's performance or security. Regular updates ensure 
              your site remains compatible with the latest web standards and security protocols.
            </p>

            <div className="bg-secondary/30 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-3">Peace of Mind Package:</h3>
              <ul className="space-y-2">
                <li>✓ Immediate response to critical issues</li>
                <li>✓ Monthly maintenance reports</li>
                <li>✓ Priority support for urgent matters</li>
                <li>✓ Security audit and vulnerability scanning</li>
                <li>✓ Performance analysis and recommendations</li>
                <li>✓ 30-day backup retention period</li>
              </ul>
            </div>

            <p className="mt-6">
              Don't wait for problems to occur. Our preventive maintenance keeps your 
              website running smoothly, and our comprehensive backup system ensures you 
              can always recover from unexpected events.
            </p>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default MaintenanceBackup;
