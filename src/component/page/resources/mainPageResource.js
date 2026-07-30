import React, { useMemo, useState } from "react";
import Page1 from "../../widgets/page1";
import Category from "./category";
import StayUpdated from "./stayUpdated";
import Footer from "../Default Pages/footer";

const MainPageResource = () => {
  const [search, setSearch] = useState("");
  const [activeSearch, setActiveSearch] = useState("");

  const [filters, setFilters] = useState({
    topic: null,
    sort: "Latest First",
    type: null,
  });

  const [contentType, setContentType] = useState("all");

  const resourceState = useMemo(
    () => ({
      search,
      setSearch,

      activeSearch,
      setActiveSearch,

      filters,
      setFilters,

      contentType,
      setContentType,
    }),
    [search, activeSearch, filters, contentType]
  );

  return (
    <>
      <Page1 page="Resources" resourceState={resourceState} />

      <Category resourceState={resourceState} />

      <StayUpdated />

      <Footer />
    </>
  );
};

export default MainPageResource;