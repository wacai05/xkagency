import Layout from "@/components/Layout";
import ContactComponent from "@/components/Contact";

const ContactPage = () => {
  return (
    <Layout 
      title="Start Today" 
      date="Get in Touch"
      mediaSrc="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
      bgImageSrc="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
    >
      <ContactComponent />
    </Layout>
  );
};

export default ContactPage;
