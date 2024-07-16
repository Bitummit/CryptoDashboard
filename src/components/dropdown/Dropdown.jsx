import { useState } from "react";
import { Dropdown } from "flowbite-react";

export default function Select() {
  const [selectedFilter, setFilter] = useState("All users");

  const customTheme = {
    
  }

  return (
    <div >
        <Dropdown
              size="lg"
              className="flex items-center"
              label={selectedFilter}
              dismissOnClick={true}
            >
              <Dropdown.Item
              className="text-lg"
                onClick={() => {
                  setFilter("All users");
                }}
              >
                All users
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setFilter("Active");
                }}
              >
                Active
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setFilter("Inactive");
                }}
              >
                Inactive
              </Dropdown.Item>
            </Dropdown>
    </div>
  );
}
