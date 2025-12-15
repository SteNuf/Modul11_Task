import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <p>Welcome to My Address App!</p>
      <Outlet />
    </>
  );
}

export default Root;
