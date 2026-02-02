import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Epizode from "./pages/Epizode";
import Gosti from "./pages/Gosti";
import Galerija from "./pages/Galerija";
import Prodavnica from "./pages/Prodavnica";
import ONama from "./pages/ONama";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// App component with CartProvider wrapping all routes
const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/epizode" element={<Epizode />} />
            <Route path="/gosti" element={<Gosti />} />
            <Route path="/galerija" element={<Galerija />} />
            <Route path="/prodavnica" element={<Prodavnica />} />
            <Route path="/o-nama" element={<ONama />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
