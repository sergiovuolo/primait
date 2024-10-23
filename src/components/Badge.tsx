import React from "react";
import "./Badge.css";

export interface BadgeProps {
  variant?: "positive" | "negative" | "neutral";  
  title: string;                  
}

const Badge: React.FC<BadgeProps> = ({ variant = "positive", title }) => {
  return (
    <span className={`badge ${variant}`}>
      {title}
    </span>
  );
};

export default Badge;
