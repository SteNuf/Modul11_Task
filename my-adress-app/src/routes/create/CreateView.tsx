import Button from "../../components/button/Button";
import TextInput from "../../components/input/TextInput";
import GenderInput from "../../components/input/GenderInput";
import BirthInput from "../../components/input/BirthInput";
import { useState } from "react";
import { Dayjs } from "dayjs";

type Person = {
  id: string;
  username: string;
  birthdate: string;
  gender: string;
  email: string;
  postAdress: string;
  phonenumber: string;
  website: string;
};

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
const storageKey = "persons";

const generateId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;

const loadPersons = (): Person[] => {
  const raw = localStorage.getItem(storageKey);

  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Person[]) : [];
  } catch {
    return [];
  }
};

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
    if (!birthdate) next.birthdate = "Bitte Geburtsdatum waehlen.";
    if (!gender) next.gender = "Bitte Geschlecht waehlen.";
    if (!emailRegex.test(email.trim())) next.email = "Ungueltige E-Mail.";
    if (!postAdress.trim()) next.postAdress = "Bitte Adresse eingeben.";
    if (!phoneRegex.test(phonenumber.trim()))
      next.phonenumber = "Telefonnummer pruefen (mind. 7 Zeichen).";
    if (!website.trim()) next.website = "Bitte Website eingeben.";
    else if (!urlRegex.test(website.trim()))
      next.website = "Ungueltige URL (http[s]://...).";

    setErrors(next);
    return Object.values(next).every((msg) => msg === "");
  };

  const handleSave = () => {
    if (!validate()) {
      alert("Bitte fehlende oder fehlerhafte Felder pruefen.");
      return;
    }

    const newPerson: Person = {
      id: generateId(),
      username: username.trim(),
      birthdate: birthdate ? birthdate.format("DD.MM.YYYY") : "",
      gender,
      email: email.trim(),
      postAdress: postAdress.trim(),
      phonenumber: phonenumber.trim(),
      website: website.trim(),
    };

    const persons = loadPersons();
    localStorage.setItem(storageKey, JSON.stringify([...persons, newPerson]));

    console.log("Person gespeichert:", newPerson);
    console.log("Gespeicherte ID:", newPerson.id);
  };

  return (
    <>
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
          />
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
          />
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
          />
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
          />
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
          />
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
