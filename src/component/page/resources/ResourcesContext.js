import { createContext, useContext, useState } from "react";

const ResourcesContext = createContext();

export const ResourcesProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  const [activeSearch, setActiveSearch] = useState("");

  const [filters, setFilters] = useState({
    topic: null,
    sort: "Latest First",
    type: null,
  });

  const [contentType, setContentType] = useState("all");

  const clearAll = () => {
    setSearch("");
    setActiveSearch("");
    setContentType("all");

    setFilters({
      topic: null,
      sort: "Latest First",
      type: null,
    });
  };

  return (
    <ResourcesContext.Provider
      value={{
        search,
        setSearch,

        activeSearch,
        setActiveSearch,

        filters,
        setFilters,

        contentType,
        setContentType,

        clearAll,
      }}
    >
      {children}
    </ResourcesContext.Provider>
  );
};

export const useResources = () => useContext(ResourcesContext);