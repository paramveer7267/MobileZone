import Breadcrumb from "../components/Breadcrumb";
import Location from "../sections/Locations";
const LocationPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Locations"
        description="Visit us at our convenient Christchurch locations"
      />
      <Location />
    </>
  );
};

export default LocationPage;
