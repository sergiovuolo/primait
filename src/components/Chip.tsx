import React from "react";
import "./Chip.css";
import Badge, { BadgeProps } from "./Badge";

interface ChipProps {
  variant?: "pill" | "underline";  
  selected?: boolean;
  title: string;
  onClick: () => void;
  badge?: BadgeProps;                   
}

const Chip: React.FC<ChipProps> = ({ variant = "pill", selected = false, title, onClick, badge }) => {
  return (
    <button className={`chip ${variant} ${selected ? "selected" : "not-selected"}`} onClick={onClick} aria-pressed={selected}>
      {title}
      {badge && <Badge {...badge}/>}
    </button>
  );
};

export default Chip;
