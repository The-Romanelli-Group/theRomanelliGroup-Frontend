import { createContext, useContext, useState } from "react";

const ResourcesContext = createContext(null);

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

  const value = {
    search,
    setSearch,

    activeSearch,
    setActiveSearch,

    filters,
    setFilters,

    contentType,
    setContentType,

    clearAll,
  };

  return (
    <ResourcesContext.Provider value={value}>
      {children}
    </ResourcesContext.Provider>
  );
};

export const useResources = () => {
  const context = useContext(ResourcesContext);

  if (!context) {
    throw new Error(
      "useResources must be used inside <ResourcesProvider>."
    );
  }

  return context;
};