import React from "react";
import { menu } from "./component/Datas";
import FilterTabs from "./component/FilterTabs";
import Menus from "./component/Menus";
import Header from "./component/Header";

const allCategories = ["All", ...new Set(menu.map((item) => item.category))];

function App() {
  const [foodLists, setFoodLists] = React.useState(menu);
  const [activeCategory, setActiveCategory] = React.useState("");
  const [categories, setCategories] = React.useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFoodLists(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setFoodLists(newItems);
  };
  return (
    <div className="max-w-6xl mx-auto">
      <Header />

      <FilterTabs
        categories={categories}
        filterItems={filterItems}
        activeCategory={activeCategory}
      />

      <Menus foodLists={foodLists} />
    </div>
  );
}

export default App;
