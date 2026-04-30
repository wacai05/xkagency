import Layout from "@/components/Layout";
import WorkComponent from "@/components/Work";

const WorkPage = () => {
  return (
    <Layout 
      title="Recent Projects" 
      date="Case Studies"
      mediaSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
      bgImageSrc="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop"
    >
      <WorkComponent />
    </Layout>
  );
};

export default WorkPage;
