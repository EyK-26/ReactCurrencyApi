import { Link, Outlet, useNavigate } from "react-router-dom";

export const Layout = () => {
  const navigate = useNavigate();
  return (
    <div className="layout">
      <div className="layout_content">
        <Outlet />
      </div>
      <button onClick={() => navigate(-1)}>go back</button>{" "}
      <Link to="/">back to home</Link>
    </div>
  );
};
