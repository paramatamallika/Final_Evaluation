import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState(
    JSON.parse(localStorage.getItem("evalData")) || []
  );

  useEffect(() => {
    localStorage.setItem("evalData", JSON.stringify(restaurants));
  }, [restaurants]);

  return (
    <DataContext.Provider value={{ restaurants, setRestaurants }}>
      {children}
    </DataContext.Provider>
  );
};
