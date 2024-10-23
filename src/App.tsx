import { useState } from "react";
import Chip from "./components/Chip";
import { BadgeProps } from "./components/Badge";

interface Tab {
  title: string;
  description: string;
  additionalInfo?: BadgeProps;
}

export default function App() {
  const tabs: Tab[] = [
    { title: "Email", description: "Description 1" },
    { title: "Files", description: "Description 2", additionalInfo: { title: "Warning", variant: "negative" } },
    { title: "Edits", description: "Description 3" },
    { title: "Downloads", description: "Description 4" },
    { title: "Documents", description: "Description 5" },
  ];

  const [activeTab, setActiveTab] = useState<number>(0);

  const selectTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="tab__header" role="tablist">
        {tabs.map((item, index) => (
          <li
            key={item.title}
            role="tab"
            aria-selected={index === activeTab}
            tabIndex={index === activeTab ? 0 : -1}
            onClick={() => selectTab(index)}
          >
            <Chip
              title={item.title}
              variant="pill"
              selected={index === activeTab}
              onClick={() => selectTab(index)}
              badge={item.additionalInfo && { title: item.additionalInfo.title, variant: item.additionalInfo.variant }}
            />
          </li>
        ))}
      </div>
      <div className="tab__container">
        <div className="tab__content" role="tabpanel">
          <p>{tabs[activeTab].description}</p>
        </div>
      </div>
    </>
  );
}
