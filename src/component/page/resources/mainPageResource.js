import React from 'react'
import Category from './category'
import StayUpdated from './stayUpdated'
import Footer from '../Default Pages/footer'
import { ResourcesProvider } from "./ResourcesContext";
import FirstPageResource from "./firstPageResource";

const MainPageResource = () => {
  return (
    <ResourcesProvider>
      <FirstPageResource />

      <Category />

      <StayUpdated />

      <Footer />
    </ResourcesProvider>
  );
};

export default MainPageResource;