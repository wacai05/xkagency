import Layout from "@/components/Layout";
import ServicesComponent from "@/components/Services";

const ServicesPage = () => {
  return (
    <Layout 
      title="Strategic Services" 
      date="Tailored Solutions"
      mediaSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
      bgImageSrc="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
    >
      <ServicesComponent />
    </Layout>
  );
};

export default ServicesPage;
