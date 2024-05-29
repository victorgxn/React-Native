export const BasicFunctions = () => {
  const adddTwoNumbers = (a: number, b: number): number => {
    return a + b;
  };

  return (
    <>
      <h3>Funciones</h3>
      <span>El resultado de sumar: {adddTwoNumbers(2, 8)}</span>
    </>
  );
};
