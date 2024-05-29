interface Person {
  name: string;
  age: number;
  address: {
    city: string;
    zip: number;
  };
}

export const ObjectLiterals = () => {
  const person: Person = {
    name: "Fernando",
    age: 35,
    address: {
      city: "New York",
      zip: 55,
    },
  };
  return (
    <>
      <h3>Objetos literales</h3>
      {person.name}
    </>
  );
};
