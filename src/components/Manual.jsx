import { Outlet } from "react-router-dom";
import "../index.css"

export const Manual = () => {
  return (
    <>
      <div className="incompleted">
        <h1>To be announced</h1>
        <p>Sorry this page has not created yet...</p>
        
      </div>
      <Outlet />
    </>
  );
};