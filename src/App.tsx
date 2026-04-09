import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SeasonProvider } from "@/context/SeasonContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CatMascot from "@/components/CatMascot";
import ParticleEffect from "@/components/ParticleEffect";
import Index from "./pages/Index.tsx";
import { PoemsPage, PoemDetail } from "./pages/Poems.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SeasonProvider>
        <BrowserRouter>
          <div className="grain-overlay season-transition min-h-screen bg-forest">
            <ParticleEffect />
            <Header />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/poems" element={<PoemsPage />} />
              <Route path="/poems/:id" element={<PoemDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <CatMascot />
          </div>
        </BrowserRouter>
      </SeasonProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
