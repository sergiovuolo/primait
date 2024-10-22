import { useState } from "react";

export default function App() {
  const tabs = [
        { title: "Email", description: "Description 1"}, 
        { title: "Files", description: "Description 2"},
        { title: "Edits", description: "Description 3" },
        { title: "Downloads", description: "Description 4" },
        { title: "Documents", description: "Description 5" },
    ];
  const [activeTab, setActiveTab] = useState(0);

  const selectTab = (index: number) => {
    setActiveTab(index)
  }
  
  return (
    <>
      <div className="tab__header">
        {tabs.map((item, index) => (
          <li className={`${index === activeTab && "active"} tab__button`} key={item.title} onClick={() => selectTab(index)}>
            {item.title}
          </li>
        ))}
      </div>
      <div className="tab__container ">
        <div className="tab__content">
            <div>
                <p>{tabs[activeTab].description}</p>
            </div>
        </div>
      </div>
    </>
  );
}
