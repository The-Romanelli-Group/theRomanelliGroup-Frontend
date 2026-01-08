import PdfViewer from "../component/pdfViewer";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import Navbar from "../widgets/navbar";
import MainPage from "../component/page/home/mainPage";
import MainPageBuy from "../component/page/buy/mainPageBuy";
import Mainsell from "../component/page/sell/mainsell";
import MainPageContact from "../component/page/contactUs/mainPageContact";
import MainPageProperties from "../component/page/properties/mainPageProperties";
import ScrollToTop from "../component/scrollTop/scrollToTop";
import MainPageResource from "../component/page/resources/mainPageResource";
import DetailSingleItem from "../component/page/properties/detailSingleItem";
import DetailPage from "../component/page/properties/detailPropertyPage/detailPage";
import ScrollToTopButton from "../component/scrollTop/fixedScroller";
import SingleBlog from "../component/page/resources/singleBlog";
import SEOHead from "../components/SEOHead";
import KeyboardNavigation from "../components/KeyboardNavigation";
import CookiePolicy from "../component/page/policies/cookiePolicy";
import TermsOfUse from "../component/page/policies/termsOfUse";
import PrivacyPolicy from "../component/page/policies/privacyPolicy";
import DmcaNotice from "../component/page/policies/dmcaNotice";
import FairHousing from "../component/page/policies/fairHousing";
import AccessibilityPolicy from "../component/page/policies/accessibilityPolicy";
import CookieConsent from "../component/page/Default Pages/cookieConsent";


const AccessComponent = () => {
  const [location, setLocation] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const handleLocationChange = () => setLocation(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const isPolicyPage = ['/cookie-policy', '/terms-of-use', '/privacy-policy', '/dmca-notice', '/fair-housing', '/accessibility-policy','/pdf-viewer'].includes(location);

  return (
    <>
      <HelmetProvider>
        <Router>
        <KeyboardNavigation />
        {!isPolicyPage && <Navbar />}
        <ScrollToTop />
        <main id="main-content" tabIndex="-1">
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<PublicRoute />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/buy" element={<MainPageBuy />} />
            <Route path="/sell" element={<Mainsell />} />
            <Route path="/contact-us" element={<MainPageContact />} />
            <Route path="/properties" element={<MainPageProperties />} />
            <Route path="/resources" element={<MainPageResource />} />
             <Route path="/resources/blogs/:id" element={<SingleBlog />} />
            <Route path="/properties/:id" element={<DetailSingleItem />} />
            <Route path="/details/properties" element={<DetailPage />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/dmca-notice" element={<DmcaNotice />} />
            <Route path="/fair-housing" element={<FairHousing />} />
            <Route path="/accessibility-policy" element={<AccessibilityPolicy />} />
            <Route path="/pdf-viewer" element={<PdfViewer />} />
          </Route>
          {/* Private Route */}
          <Route path="/" element={<PrivateRoute />}>

          </Route>
        </Routes>
        </main>
          <SEOHead />
          <ScrollToTopButton/>
          <CookieConsent />
        </Router>
      </HelmetProvider>
    </>
  );
};
export default AccessComponent;
