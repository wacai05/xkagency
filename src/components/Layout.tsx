import Navbar from "./Navbar";
import { ReactNode } from "react";
import ScrollExpandMedia from "./ScrollExpandMedia";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  date?: string;
  mediaSrc?: string;
  bgImageSrc?: string;
}

const Layout = ({ 
  children, 
  title = "xkagency", 
  date = "2024 Portfolio",
  mediaSrc = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
  bgImageSrc = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
}: LayoutProps) => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden grainy-backdrop">
      <Navbar />
      <main>
        <ScrollExpandMedia
          mediaType="image"
          mediaSrc={mediaSrc}
          bgImageSrc={bgImageSrc}
          title={title}
          date={date}
          scrollToExpand="Scroll to explore"
        >
          {children}
        </ScrollExpandMedia>
      </main>
    </div>
  );
};

export default Layout;
