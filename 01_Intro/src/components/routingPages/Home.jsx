import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#1e293b",
    color: "#fff",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#e5e7eb",
    marginLeft: "20px",
    fontSize: "18px",
    fontWeight: "500",
  };

  const activeStyle = {
    color: "#38bdf8",
    borderBottom: "2px solid #38bdf8",
    paddingBottom: "4px",
  };

  const layoutStyle = {
    display: "flex",
    minHeight: "calc(100vh - 70px)",
  };

  const asideStyle = {
    width: "220px",
    backgroundColor: "#0f172a",
    color: "#fff",
    padding: "20px",
  };

  const contentStyle = {
    flex: 1,
    padding: "30px",
    backgroundColor: "#f8fafc",
  };

  return (
    <div>
      {/* Top Navbar */}
      <nav style={navStyle}>
        <h2>Home</h2>

        <div>
          <NavLink
            to=""
            end
            style={({ isActive }) =>
              isActive ? { ...linkStyle, ...activeStyle } : linkStyle
            }
          >
            Welcome
          </NavLink>

          <NavLink
            to="about"
            style={({ isActive }) =>
              isActive ? { ...linkStyle, ...activeStyle } : linkStyle
            }
          >
            About
          </NavLink>

          <NavLink
            to="contact"
            style={({ isActive }) =>
              isActive ? { ...linkStyle, ...activeStyle } : linkStyle
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>

      {/* Layout */}
      <main style={layoutStyle}>
        <aside style={asideStyle}>
          <p>📌 Dashboard</p>
          <p>⚙ Settings</p>
          <p>📄 Profile</p>
        </aside>

        <section style={contentStyle}>
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Home;
