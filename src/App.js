import React, { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Favorites from "./components/pages/Favorites";
import { Routes, Route } from "react-router-dom";
import propertyData from "./dummyData/propertyData";

function App() {
  const [properties, setProperties] = useState(() => {
    return JSON.parse(localStorage.getItem("propertyData")) || propertyData;
  });

  const [filters, setFilters] = useState({
    location: "Select location",
    minPrice: 0,
    maxPrice: 0,
    propertyType: "Select property type",
    search: "",
  });

  const [filteredProperties, setFilteredProperties] = useState(properties);

  useEffect(() => {
    localStorage.setItem("propertyData", JSON.stringify(properties));
  }, [properties]);

  function favoriteHandle(id) {
    setProperties((prevProperties) => {
      return prevProperties.map((property) => {
        return id === property.id
          ? { ...property, isFavorite: !property.isFavorite }
          : property;
      });
    });
    setFilteredProperties((prevFilteredProperties) => {
      return prevFilteredProperties.map((property) => {
        return id === property.id
          ? { ...property, isFavorite: !property.isFavorite }
          : property;
      });
    });
  }

  function searchbarHandle(event) {
    setFilters((prevFilters) => {
      return {
        ...prevFilters,
        search: event.target.value,
      };
    });
  }

  function filterHandle(type, option) {
    setFilters((prevFilters) => {
      if (type === "price") {
        return {
          ...prevFilters,
          minPrice: option.minPrice,
          maxPrice: option.maxPrice,
        };
      } else
        return {
          ...prevFilters,
          [type]: option,
        };
    });
  }

  function searchHandle() {
    setFilteredProperties(() => {
      let newArray = properties.filter((property) => {
        if (
          filters.location === "Select location" ||
          filters.location === property.location
        ) {
          return true;
        }
      });
      newArray = newArray.filter((property) => {
        if (
          (filters.minPrice === 0 && filters.maxPrice === 0) ||
          (filters.minPrice <= property.price &&
            filters.maxPrice >= property.price)
        ) {
          return true;
        }
      });
      newArray = newArray.filter((property) => {
        if (
          filters.propertyType === "Select property type" ||
          filters.propertyType.toLowerCase() === property.type
        ) {
          return true;
        }
      });

      newArray = newArray.filter((property) => {
        const searchText = filters.search.replaceAll(/\s/g, "").toLowerCase();
        const locationText = property.location
          .replaceAll(/\s/g, "")
          .toLowerCase();
        const typeText = property.type.replaceAll(/\s/g, "").toLowerCase();
        const stateText = property.state.replaceAll(/\s/g, "").toLowerCase();
        const addressText = property.address
          .replaceAll(/\s/g, "")
          .toLowerCase();
        if (
          filters.search === "" ||
          locationText.includes(searchText) ||
          searchText.includes(locationText) ||
          typeText.includes(searchText) ||
          searchText.includes(typeText) ||
          stateText.includes(searchText) ||
          searchText.includes(stateText) ||
          addressText.includes(searchText) ||
          searchText.includes(addressText)
        ) {
          return true;
        }
      });
      return newArray;
    });
  }
  return (
    <Fragment>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Main
              searchbarHandle={searchbarHandle}
              filterHandle={filterHandle}
              searchHandle={searchHandle}
              filteredProperties={filteredProperties}
              favoriteHandle={favoriteHandle}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              properties={properties}
              favoriteHandle={favoriteHandle}
            />
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;
