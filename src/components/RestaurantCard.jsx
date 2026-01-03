function RestaurantCard({ rest, isAdmin }) {
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
        src={rest.image}
        alt={rest.restaurantName}
        style={{
          width: "100%",
          height: "140px",
          objectFit: "cover",
        }}
      />

      <h4>{rest.restaurantName}</h4>
      <p>{rest.address}</p>
      <p>{rest.type}</p>
      <p>Parking: {rest.parkingLot ? "Yes" : "No"}</p>
      {isAdmin && (
        <div>
          <button>Update</button>
          <button>Delete</button>
        </div>
      )}
    </div>
  );
}

export default RestaurantCard;
