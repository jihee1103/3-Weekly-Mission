export function FilterButton({ name, onClick }) {
  return (
    <>
      <button onClick={onClick}>{name}</button>
    </>
  );
}
