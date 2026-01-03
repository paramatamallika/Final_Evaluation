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

  // 🔍 FILTER + SEARCH LOGIC
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

  // ➕ ADD RESTAURANT
  const addRest = (data) => {
    if (!data.restaurantName || !data.address) {
      alert("All fields required");
      return;
    }

    const newRest = {
      ...data,
      restaurantID: Date.now(),
    };

    setRestaurants([...restaurants, newRest]);
    alert("Restaurant Added Successfully");
  };

  // ❌ DELETE RESTAURANT
  const deleteRestaurant = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete?"
    );
    if (!confirmDelete) return;

    const updated = restaurants.filter((r) => r.restaurantID !== id);
    setRestaurants(updated);
    alert("Restaurant Deleted");
  };

  // ✏️ UPDATE RESTAURANT
  const updateRestaurant = (id, updatedData) => {
    const updated = restaurants.map((r) =>
      r.restaurantID === id ? { ...r, ...updatedData } : r
    );
    setRestaurants(updated);
    alert("Restaurant Updated Successfully");
  };

  return (
    <div style={{ display: "flex" }}>
      {/* 🔹 SIDEBAR */}
      <div
        style={{
          width: "260px",
          borderRight: "1px solid gray",
          padding: "10px",
        }}
      >
        <h3>Add Restaurant</h3>
        <RestaurantForm addRest={addRest} />
      </div>

      {/* 🔹 MAIN CONTENT */}
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
          {filteredRestaurants.length === 0 ? (
            <p>No Restaurants Found</p>
          ) : (
            filteredRestaurants.map((r) => (
              <RestaurantCard
                key={r.restaurantID}
                rest={r}
                isAdmin={true}
                onDelete={deleteRestaurant}
                onUpdate={updateRestaurant} // <-- pass update function
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
