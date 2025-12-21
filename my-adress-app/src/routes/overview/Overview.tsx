import { useEffect, useState } from "react";
import Usercard from "../../components/userCard/Usercard";
import type { Person } from "../../types/person";

const storageKey = "persons";

function OverView() {
  const [persons, setPersons] = useState<Person[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        setPersons(parsed as Person[]);
      }
    } catch {
      console.warn("Konnte gespeicherte Personen nicht laden.");
    }
  }, []);

  return (
    <>
      {persons.length === 0 ? (
        <div>Keine Personen gespeichert.</div>
      ) : (
        persons.map((person) => <Usercard key={person.id} person={person} />)
      )}
    </>
  );
}
export default OverView;
