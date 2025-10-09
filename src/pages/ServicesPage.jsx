import Breadcrumb from "../components/Breadcrumb";
import Services from "../sections/Services";

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services"
        description="Comprehensive solutions for all your tech needs"
      />
      <Services />
    </>
  );
};

export default ServicesPage;
