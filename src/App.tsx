import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index.tsx";
import Career from "./pages/Career.tsx";
import SocialWork from "./pages/SocialWork.tsx";
import CommerceEducation from "./pages/CommerceEducation.tsx";
import MedhaSanman from "./pages/MedhaSanman.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/career" element={<Career />} />
          <Route path="/social-work" element={<SocialWork />} />
          <Route path="/commerce-education" element={<CommerceEducation />} />
          <Route path="/medha-sanman" element={<MedhaSanman />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {import.meta.env.PROD && <Analytics />}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
