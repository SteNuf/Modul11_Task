import Button from "../../components/button/Button";
import TextInput from "../../components/input/TextInput";
import GenderInput from "../../components/input/GenderInput";
import BirthInput from "../../components/input/BirthInput";
import { useState } from "react";
import { Dayjs } from "dayjs";

function CreateView() {
  const [username, setUsername] = useState("");
  const [birthdate, setBirthdate] = useState<Dayjs | null>(null);

  const handleSave = () => {
    localStorage.setItem("username", username);
    localStorage.setItem(
      "birthdate",
      birthdate ? birthdate.format("DD.MM.YYYY") : ""
    );
    console.log("Username gespeichert:", username);
  };

  return (
    <>
      {" "}
      <div className="app-input">
        <div className="app-input-username">
          <label>Username:</label>
          <TextInput
            className="app-input-textfield"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="app-input-birthdate">
          <label>Geburtsdatum:</label>
          <BirthInput
            className="app-input-birth-textfield"
            value={birthdate}
            onChange={(newValue) => setBirthdate(newValue)}
          />
        </div>

        <div className="app-input-gender">
          <label>Geschlecht:</label>
          <GenderInput />
        </div>

        <div className="app-input-email">
          <label>Email: </label>
          <TextInput className="app-input-textfield" />
        </div>

        <div className="app-input-adress">
          <label>Post Adresse:</label>
          <TextInput className="app-input-textfield" />
        </div>

        <div className="app-input-phonenumber">
          <label>Telefonnummer:</label>
          <TextInput className="app-input-textfield" />
        </div>

        <div className="app-input-website">
          <label>Website:</label>
          <TextInput className="app-input-textfield" />
        </div>

        <div className="app-button">
          <Button className="app-submit_button" onClick={handleSave} />
        </div>
      </div>
    </>
  );
}
export default CreateView;
