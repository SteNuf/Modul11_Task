import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./sidebar.scss";

function Sidebar() {
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-header">
          <img
            className="sidebar-header-image"
            src="./devkarriere.png"
            alt="Bild von der Firma DevKarriere"
          />
        </div>
        <div className="sidebar-body">
          <Link to={"overview"}>
            <Button className="sidebar-item">Übersicht</Button>
          </Link>

          <Link to={"create"}>
            <Button className="sidebar-item">Erstellen</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
