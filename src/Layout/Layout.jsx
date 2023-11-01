import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="layout">
      <div className="layout_content">
        <Outlet />
      </div>
      <Link to="/">back to home</Link>
    </div>
  );
};
