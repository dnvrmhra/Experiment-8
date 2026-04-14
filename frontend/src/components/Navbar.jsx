import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div style={styles.navbar}>
      <h3>JWT App</h3>

      <div>
        <span style={{ marginRight: "15px" }}>
          Role: <b>{user?.role}</b>
        </span>

        <button onClick={() => navigate("/dashboard")}>Dashboard</button>

        {user?.role === "admin" && (
          <button onClick={() => navigate("/admin")}>Admin</button>
        )}

        <button onClick={handleLogout} style={{ marginLeft: "10px" }}>
          Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: "#1976d2",
    color: "white"
  }
};

export default Navbar;