import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VideoDetail from "./pages/VideoDetail";
import CategoryDetail from "./pages/CategoryDetail";
import CommentatorProfile from "./pages/CommentatorProfile";
import Library from "./pages/Library";
import LiveStream from "./pages/LiveStream";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/kategorie/:id" element={<CategoryDetail />} />
          <Route path="/komentator/:id" element={<CommentatorProfile />} />
          <Route path="/knihovna" element={<Library />} />
          <Route path="/zive" element={<LiveStream />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
