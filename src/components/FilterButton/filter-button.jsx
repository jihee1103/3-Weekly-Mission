import "./filter-button-style.css";

export function FilterButton({ name, onClick }) {
  return (
    <>
      <button className="filter-button" onClick={onClick}>
        {name}
      </button>
    </>
  );
}
