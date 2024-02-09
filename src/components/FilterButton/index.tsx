import { ReactNode } from "react";
import "./style.css";

interface FilterButtonProps {
  children: ReactNode;
  id?: number;
}

const FilterButton = ({ children, id = 0 }: FilterButtonProps) => {
  return (
    <div className="FilterButton" id={String(id)}>
      {children}
    </div>
  );
};

export default FilterButton;
