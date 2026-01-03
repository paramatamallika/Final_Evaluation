import { useState } from "react";

function RestaurantForm({ addRest }) {
  const [form, setForm] = useState({
    restaurantName: "",
    address: "",
    type: "Rajasthani",
    parkingLot: true,
    image:
      "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg",
  });

  const handleAdd = () => {
    if (!form.restaurantName || !form.address) {
      alert("Please fill all fields");
      return;
    }

    addRest(form); 
    alert("Restaurant added successfully");

    // clear form
    setForm({
      restaurantName: "",
      address: "",
      type: "Rajasthani",
      parkingLot: true,
      image:
        "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg",
    });
  };

  return (
    <div>
      <input
        placeholder="Restaurant Name"
        value={form.restaurantName}
        onChange={(e) =>
          setForm({ ...form, restaurantName: e.target.value })
        }
      />

      <input
        placeholder="Address"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />

      <select
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      >
        <option>Rajasthani</option>
        <option>Gujarati</option>
        <option>Mughlai</option>
        <option>Jain</option>
        <option>Thai</option>
        <option>North Indian</option>
        <option>South Indian</option>
      </select>

      <select
        value={form.parkingLot}
        onChange={(e) =>
          setForm({ ...form, parkingLot: e.target.value === "true" })
        }
      >
        <option value="true">Parking Available</option>
        <option value="false">No Parking</option>
      </select>

      <button onClick={handleAdd}>Add Restaurant</button>
    </div>
  );
}

export default RestaurantForm;
