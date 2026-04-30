import Layout from "@/components/Layout";
import { Pricing as PricingComponent } from "@/components/Pricing";

const Pricing = () => (
  <Layout 
    title="Strategic Investment" 
    date="2024 Plans"
    mediaSrc="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2022&auto=format&fit=crop"
    bgImageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  >
    <PricingComponent />
  </Layout>
);

export default Pricing;
