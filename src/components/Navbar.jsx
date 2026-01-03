import { useEffect, useRef } from "react";

function Navbar({
  searchText,
  setSearchText,
  typeFilter,
  setTypeFilter,
  parkingFilter,
  setParkingFilter,
}) {
  const searchRef = useRef(null);

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, []);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        display: "flex",
        gap: "10px",
        marginBottom: "10px",
      }}
    >
      <input
        ref={searchRef}
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <select
        value={typeFilter}
        onChange={(e) => setTypeFilter(e.target.value)}
      >
        <option value="">All Types</option>
        <option value="Rajasthani">Rajasthani</option>
        <option value="Gujarati">Gujarati</option>
        <option value="Mughlai">Mughlai</option>
        <option value="Jain">Jain</option>
        <option value="Thai">Thai</option>
        <option value="North Indian">North Indian</option>
        <option value="South Indian">South Indian</option>
      </select>

      <select
        value={parkingFilter}
        onChange={(e) => setParkingFilter(e.target.value)}
      >
        <option value="">All Parking</option>
        <option value="true">Parking Available</option>
        <option value="false">No Parking</option>
      </select>
    </div>
  );
}

export default Navbar;
