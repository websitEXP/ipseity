import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SeasonProvider } from "@/context/season-context";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CatMascot from "@/components/cat-mascot";
import ParticleEffect from "@/components/particle-effect";
import Index from "./pages/index-page.tsx";
import { PoemsPage, PoemDetail } from "./pages/poems.tsx";
import About from "./pages/about.tsx";
import Contact from "./pages/contact.tsx";
import NotFound from "./pages/not-found.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SeasonProvider>
        <HashRouter>
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
        </HashRouter>
      </SeasonProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
