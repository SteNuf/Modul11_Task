import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Overview from "./routes/overview/Overview";
import Create from "./routes/create/create";
import Edit from "./routes/edit/Edit";

function App() {
  const router = createBrowserRouter([
    {
      path: "overview",
      element: <Overview />,
      children: [
        { path: "create", element: <Create /> },
        { path: "edit", element: <Edit /> },
      ],
    },
  ]);

  return (
    <>
      <div></div>
    </>
  );
}

export default App;
