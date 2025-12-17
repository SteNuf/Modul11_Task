import Button from "../../components/button/Button";
import TextInput from "../../components/input/TextInput";
import GenderInput from "../../components/input/GenderInput";
import BirthInput from "../../components/input/BirthInput";

function CreateView() {
  return (
    <>
      {" "}
      <div className="app-input">
        <div className="app-input-username">
          <label>Username:</label>
          <TextInput className="app-input-textfield" />
        </div>

        <div className="app-input-birthdate">
          <label>Geburtsdatum:</label>
          <BirthInput className="app-input-birth-textfield" />
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
          <Button className="app-submit_button" />
        </div>
      </div>
    </>
  );
}
export default CreateView;
