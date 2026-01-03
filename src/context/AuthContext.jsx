import { createContext, useState } from "react";
export const AuthContext = createContext();

const validUsers = [
  { email: "admin@gmail.com", pass: "admin1234", role: "admin" },
  { email: "customer@gmail.com", pass: "customer1234", role: "customer" },
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser")) || null
  );

  const login = (email, password) => {
    const found = validUsers.find(
      (u) => u.email === email && u.pass === password
    );
    if (found) {
      setUser(found);
      localStorage.setItem("authUser", JSON.stringify(found));
      return found.role;
    } else return null;
  };

  const logout = () => {
    localStorage.removeItem("authUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
