import Layout from "@/components/Layout";
import AboutComponent from "@/components/About";

const AboutPage = () => {
  return (
    <Layout 
      title="The Agency" 
      date="Our Vision"
      mediaSrc="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
      bgImageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    >
      <AboutComponent />
    </Layout>
  );
};

export default AboutPage;
