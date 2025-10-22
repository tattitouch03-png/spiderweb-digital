import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import ServiceCard from "@/components/ServiceCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Palette, Settings, Server, Globe, Wrench, Zap } from "lucide-react";
import { Mail, Phone } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Website Design",
      description: "Beautiful, modern, and user-friendly designs tailored to your brand",
      icon: Palette,
      route: "/services/website-design",
    },
    {
      title: "Website Setup",
      description: "Complete website configuration and deployment services",
      icon: Settings,
      route: "/services/website-setup",
    },
    {
      title: "Free Hosting",
      description: "Best-in-industry hosting solutions at no cost",
      icon: Server,
      route: "/services/free-hosting",
    },
    {
      title: "Free Domain Name",
      description: "Get your perfect domain name included with our services",
      icon: Globe,
      route: "/services/free-domain",
    },
    {
      title: "Website Maintenance & Backup",
      description: "Regular updates, security, and automated backups",
      icon: Wrench,
      route: "/services/maintenance-backup",
    },
    {
      title: "Website Speed Optimization",
      description: "Lightning-fast load times for better user experience",
      icon: Zap,
      route: "/services/speed-optimization",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSlider />

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive web development solutions for your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">About SpiderWebs</h2>
          </div>
          <div className="prose prose-lg mx-auto">
            <p className="text-center text-lg mb-6">
              SpiderWebs is a leading web development company dedicated to creating 
              exceptional digital experiences. With years of expertise in modern web 
              technologies, we specialize in building responsive, fast, and scalable 
              websites that help businesses thrive in the digital age.
            </p>
            <p className="text-center text-lg mb-6">
              Our team of experienced developers and designers work closely with clients 
              to understand their unique needs and deliver customized solutions that exceed 
              expectations. From small business websites to complex web applications, we 
              have the expertise to bring your vision to life.
            </p>
            <p className="text-center text-lg">
              We pride ourselves on our commitment to quality, attention to detail, and 
              exceptional customer service. Let us help you build a strong online presence 
              that drives results.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 text-lg">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:contact@spiderwebs.com" className="hover:text-primary transition-colors">
                contact@spiderwebs.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg">
              <Phone className="h-5 w-5 text-primary" />
              <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 SpiderWebs. All rights reserved.</p>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default Index;
