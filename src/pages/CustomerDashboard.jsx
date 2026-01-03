import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import RestaurantCard from "../components/RestaurantCard";
import { DataContext } from "../context/DataContext";

function CustomerDashboard() {
  const { restaurants } = useContext(DataContext);

  const [searchText, setSearchText] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [parkingFilter, setParkingFilter] = useState("");

  const filteredRestaurants = restaurants.filter((r) => {
    const searchMatch =
      r.restaurantName.toLowerCase().includes(searchText.toLowerCase()) ||
      r.address.toLowerCase().includes(searchText.toLowerCase());

    const typeMatch = typeFilter ? r.type === typeFilter : true;

    const parkingMatch =
      parkingFilter === ""
        ? true
        : String(r.parkingLot) === parkingFilter;

    return searchMatch && typeMatch && parkingMatch;
  });

  return (
    <div style={{ padding: "10px" }}>
      <Navbar
        searchText={searchText}
        setSearchText={setSearchText}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        parkingFilter={parkingFilter}
        setParkingFilter={setParkingFilter}
      />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredRestaurants.map((r) => (
          <RestaurantCard
            key={r.restaurantID}
            rest={r}
            isAdmin={false}  
          />
        ))}
      </div>
    </div>
  );
}

export default CustomerDashboard;
