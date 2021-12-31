import React, { useState } from "react";
import Categories from "./Categories";
import menu from "./data";
import Menu from "./Menu";

function App() {
  const [menuItems, setMenuItems] = useState(menu);

  const categories = ["all", ...new Set(menu.map((item) => item.category))];

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
