import Button from "../../components/button/Button";
import TextInput from "../../components/input/TextInput";
import GenderInput from "../../components/input/GenderInput";
import BirthInput from "../../components/input/BirthInput";
import { useState } from "react";
import { Dayjs } from "dayjs";

const initialErrors = {
  username: "",
  birthdate: "",
  gender: "",
  email: "",
  postAdress: "",
  phonenumber: "",
  website: "",
};

const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const phoneRegex = /^[0-9+()\-\\s]{7,}$/;
const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w.,@?^=%&:/~+#-]*)?$/i;

function CreateView() {
  const [username, setUsername] = useState("");
  const [birthdate, setBirthdate] = useState<Dayjs | null>(null);
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [postAdress, setPostAdress] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState(initialErrors);

  const validate = () => {
    const next = { ...initialErrors };

    if (!username.trim()) next.username = "Bitte Username eingeben.";
    if (!birthdate) next.birthdate = "Bitte Geburtsdatum wählen.";
    if (!gender) next.gender = "Bitte Geschlecht wählen.";
    if (!emailRegex.test(email.trim())) next.email = "Ungültige E-Mail.";
    if (!postAdress.trim()) next.postAdress = "Bitte Adresse eingeben.";
    if (!phoneRegex.test(phonenumber.trim()))
      next.phonenumber = "Telefonnummer prüfen (mind. 7 Zeichen).";
    if (website.trim() && !urlRegex.test(website.trim()))
      next.website = "Ungültige URL (http[s]://...).";

    setErrors(next);
    return Object.values(next).every((msg) => msg === "");
  };

  const handleSave = () => {
    if (!validate()) {
      alert("Bitte fehlende oder fehlerhafte Felder prüfen.");
    }

    localStorage.setItem("username", username);
    localStorage.setItem(
      "birthdate",
      birthdate ? birthdate.format("DD.MM.YYYY") : ""
    );
    localStorage.setItem("gender", gender);

    console.log("Username gespeichert:", username);
    console.log(
      "Geburtstag gespeichert:",
      birthdate?.format("DD.MM.YYYY") ?? ""
    );
    console.log("gender:", gender);
  };

  localStorage.setItem("email", email);
  console.log("email:", email);

  localStorage.setItem("postadress", postAdress);
  console.log("Post Adresse:");

  localStorage.setItem("phonenumber", phonenumber);
  console.log("Phonenumber:", phonenumber);

  localStorage.setItem("website", website);
  console.log("Website:", website);

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
          {errors.username && (
            <span className="input-error">{errors.username}</span>
          )}
        </div>

        <div className="app-input-birthdate">
          <label>Geburtsdatum:</label>
          <BirthInput
            className="app-input-birth-textfield"
            value={birthdate}
            onChange={(newValue) => setBirthdate(newValue)}
          />{" "}
          {errors.birthdate && (
            <span className="input-error">{errors.birthdate}</span>
          )}
        </div>

        <div className="app-input-gender">
          <label>Geschlecht:</label>
          <GenderInput
            className="app-input-gender-options"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          {errors.gender && (
            <span className="input-error">{errors.gender}</span>
          )}
        </div>

        <div className="app-input-email">
          <label>Email: </label>
          <TextInput
            className="app-input-textfield"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          {errors.email && <span className="input-error">{errors.email}</span>}
        </div>

        <div className="app-input-adress">
          <label>Post Adresse:</label>
          <TextInput
            className="app-input-textfield"
            value={postAdress}
            onChange={(e) => setPostAdress(e.target.value)}
          />
          {errors.postAdress && (
            <span className="input-error">{errors.postAdress}</span>
          )}
        </div>

        <div className="app-input-phonenumber">
          <label>Telefonnummer:</label>
          <TextInput
            className="app-input-textfield"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
          />{" "}
          {errors.phonenumber && (
            <span className="input-error">{errors.phonenumber}</span>
          )}
        </div>

        <div className="app-input-website">
          <label>Website:</label>
          <TextInput
            className="app-input-textfield"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />{" "}
          {errors.website && (
            <span className="input-error">{errors.website}</span>
          )}
        </div>

        <div className="app-button">
          <Button className="app-submit_button" onClick={handleSave} />
        </div>
      </div>
    </>
  );
}
export default CreateView;
