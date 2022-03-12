import dynamic from "next/dynamic";
import { GlobalAppWrapper, GlobalTitle } from "../../styles";
import LoaderMap from "./loaderMap";
import { ContactDivider, MapView, NavigationLink } from "./styles";
// import Map from "./map";
import Link from "next/link";

const ContactBanner = () => {
  const Map = dynamic(() => import("./map"), {
    loading: () => <LoaderMap />,
    ssr: false,
  });
  return (
    <GlobalAppWrapper id="contact">
      <ContactDivider>
        <GlobalTitle>Need a developer?</GlobalTitle>
        <Link href="/contact" passHref>
          <NavigationLink>Let&apos;s Talk!</NavigationLink>
        </Link>
      </ContactDivider>
      <ContactDivider>
        <Map />
      </ContactDivider>
    </GlobalAppWrapper>
  );
};

export default ContactBanner;
