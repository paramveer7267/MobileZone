import Breadcrumb from "../components/Breadcrumb";
import Contact from "../sections/Contact";
const ContactPage = () => {
  return (
    <div>
      <Breadcrumb
        pageName="Contact"
        description="Have questions? We're here to help!"
      />
      <Contact />
    </div>
  );
};

export default ContactPage;
