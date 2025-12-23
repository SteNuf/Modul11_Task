import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Usercard from "../../components/userCard/Usercard";
import type { Person } from "../../types/person";

const storageKey = "persons";

function OverView() {
  const navigate = useNavigate();
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
      console.warn("Could not load stored persons.");
    }
  }, []);

  const handleDelete = (id: string) => {
    if (!confirm("Person wirklich löschen?")) return;
    setPersons((prev) => {
      const next = prev.filter((p) => p.id !== id);
      localStorage.setItem(storageKey, JSON.stringify(next));
      return next;
    });
  };

  return (
    <>
      {persons.length === 0 ? (
        <div>Keine Personen gespeichert.</div>
      ) : (
        persons.map((person) => (
          <Usercard
            key={person.id}
            person={person}
            onClick={() => navigate(`/create?id=${person.id}`)}
            onDelete={() => handleDelete(person.id)}
          />
        ))
      )}
    </>
  );
}
export default OverView;
