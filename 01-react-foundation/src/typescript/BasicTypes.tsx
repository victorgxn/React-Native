export const BasicTypes = () => {
  const name: string = "Fernando";
  const age: number = 35;
  const isActive: boolean = true;
  const powers: string[] = ["Velocidad", "Volar", "Respirar en el agua"];
  return (
    <>
      <h3>Tipos basicos</h3>
      {name}
      <br />
      {age}
      <br />
      {isActive ? "Activo" : "Inactivo"}
      <br />
      {powers.join(", ")}
    </>
  );
};
