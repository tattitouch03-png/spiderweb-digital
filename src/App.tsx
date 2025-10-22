import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WebsiteDesign from "./pages/services/WebsiteDesign";
import WebsiteSetup from "./pages/services/WebsiteSetup";
import FreeHosting from "./pages/services/FreeHosting";
import FreeDomain from "./pages/services/FreeDomain";
import MaintenanceBackup from "./pages/services/MaintenanceBackup";
import SpeedOptimization from "./pages/services/SpeedOptimization";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/website-design" element={<WebsiteDesign />} />
          <Route path="/services/website-setup" element={<WebsiteSetup />} />
          <Route path="/services/free-hosting" element={<FreeHosting />} />
          <Route path="/services/free-domain" element={<FreeDomain />} />
          <Route path="/services/maintenance-backup" element={<MaintenanceBackup />} />
          <Route path="/services/speed-optimization" element={<SpeedOptimization />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
