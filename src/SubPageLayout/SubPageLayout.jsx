import { Link, Outlet } from "react-router-dom";

export const SubPageLayout = () => {
  return (
    <div className="layout">
      <Link to="/">Home</Link>
      <div className="layout_content">
        <Outlet />
      </div>
    </div>
  );
};
