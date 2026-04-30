import Layout from "@/components/Layout";
import SkillsComponent from "@/components/Skills";

const SkillsPage = () => {
  return (
    <Layout 
      title="Tech Stack" 
      date="Core Expertise"
      mediaSrc="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
      bgImageSrc="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
    >
      <SkillsComponent />
    </Layout>
  );
};

export default SkillsPage;
