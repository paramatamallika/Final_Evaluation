import { useState } from "react";

function RestaurantCard({ rest, isAdmin, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    restaurantName: rest.restaurantName,
    address: rest.address,
    type: rest.type,
    parkingLot: rest.parkingLot,
    image: rest.image,
  });

  const handleUpdate = () => {
    if (!formData.restaurantName || !formData.address) {
      alert("All fields required");
      return;
    }
    onUpdate(rest.restaurantID, formData); // Call parent update
    setIsEditing(false);
  };

  return (
    <div
      style={{
        border: "1px solid gray",
        width: "230px",
        margin: "10px",
        padding: "10px",
      }}
    >
      <img
        src={formData.image || rest.image}
        alt={formData.restaurantName || rest.restaurantName}
        style={{ width: "100%", height: "140px", objectFit: "cover" }}
      />

      {isEditing ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <input
            type="text"
            value={formData.restaurantName}
            onChange={(e) =>
              setFormData({ ...formData, restaurantName: e.target.value })
            }
            placeholder="Restaurant Name"
          />
          <input
            type="text"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            placeholder="Address"
          />
          <input
            type="text"
            value={formData.type}
            onChange={(e) =>
              setFormData({ ...formData, type: e.target.value })
            }
            placeholder="Type"
          />
          <label>
            Parking:
            <input
              type="checkbox"
              checked={formData.parkingLot}
              onChange={(e) =>
                setFormData({ ...formData, parkingLot: e.target.checked })
              }
              style={{ marginLeft: "5px" }}
            />
          </label>
          <input
            type="text"
            value={formData.image}
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
            placeholder="Image URL"
          />
          <div style={{ display: "flex", gap: "5px" }}>
            <button onClick={handleUpdate}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <div>
          <h4>{rest.restaurantName}</h4>
          <p>{rest.address}</p>
          <p>{rest.type}</p>
          <p>Parking: {rest.parkingLot ? "Yes" : "No"}</p>

          {isAdmin && (
            <div style={{ display: "flex", gap: "5px" }}>
              <button onClick={() => setIsEditing(true)}>Update</button>
              <button onClick={() => onDelete(rest.restaurantID)}>Delete</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default RestaurantCard;
