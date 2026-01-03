import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import RestaurantForm from "../components/restuarantForm";
import RestaurantCard from "../components/RestaurantCard";
import { DataContext } from "../context/DataContext";

function AdminDashboard() {
  const { restaurants, setRestaurants } = useContext(DataContext);

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

  const addRest = (data) => {
    const newRest = { ...data, restaurantID: Date.now() };
    setRestaurants((prev) => [...prev, newRest]);
    alert("Restaurant Added");
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "250px",
          borderRight: "1px solid gray",
          padding: "10px",
        }}
      >
        <h3>Add Restaurant</h3>
        <RestaurantForm addRest={addRest} />
      </div>

      <div style={{ flex: 1, padding: "10px" }}>
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
              isAdmin={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
