import "./style.css";

const FilterButton = ({ children, id }) => {
  return (
    <div className="FilterButton" id={id}>
      {children}
    </div>
  );
};

export default FilterButton;
