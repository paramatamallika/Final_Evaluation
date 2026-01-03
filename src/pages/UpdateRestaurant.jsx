import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";

export default function UpdateRestaurant() {
  const { id } = useParams();
  const nav = useNavigate();
  const { restaurants, setRestaurants } = useContext(DataContext);

  const rest = restaurants.find((r) => r.restaurantID == id);
  const [data, setData] = useState(rest);

  const handleUpdate = () => {
    if (!data.restaurantName || !data.address) {
      alert("fill fields");
      return;
    }
    if (window.confirm("Update?")) {
      setRestaurants(
        restaurants.map((r) =>
          r.restaurantID == id ? data : r
        )
      );
      alert("Updated");
      nav("/admin/dashboard");
    }
  };

  return (
    <div>
      <input
        value={data.restaurantName}
        onChange={(e) =>
          setData({ ...data, restaurantName: e.target.value })
        }
      />
      <input
        value={data.address}
        onChange={(e) => setData({ ...data, address: e.target.value })}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}
