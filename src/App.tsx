import React, { useState } from "react";
import styles from "./App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons/faAngleUp";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons/faAngleDown";

interface MenuItemProps {
  img: string;
  header: string;
  category: string;
  value: number;
}

interface HeaderProps {
  setData: React.Dispatch<React.SetStateAction<MenuItemProps[]>>;
}

const TempData: MenuItemProps[] = [
  {
    img: "https://placehold.co/100x100",
    header: "Tavuk doner",
    category: "1",
    value: 15,
  },
  {
    img: "https://placehold.co/100x100",
    header: "Tavuk doner",
    category: "2",
    value: 18,
  },
  {
    img: "https://placehold.co/100x100",
    header: "Tavuk doner",
    category: "3",
    value: 150,
  },
  {
    img: "https://placehold.co/100x100",
    header: "Tavuk doner 2",
    category: "2",
    value: 150,
  },
  {
    img: "https://placehold.co/100x100",
    header: "Tavuk doner 2",
    category: "3",
    value: 150,
  },
];

const App: React.FC = () => {
  const [data, setData] = useState<MenuItemProps[]>(TempData);

  return (
    <div className={styles.container}>
      <Header setData={setData} />
      <Menu data={data} />
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ setData }) => {
  const originalData = [...TempData];

  function sortHighToLow(): void {
    setData((prev) => [...prev].sort((a, b) => a.value - b.value));
  }

  function sortLowToHigh(): void {
    setData((prev) => [...prev].sort((a, b) => b.value - a.value));
  }

  function handleCategory(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedCategory = event.target.value;
    setData(() =>
      selectedCategory === "0" || selectedCategory === "all"
        ? originalData // Tüm kategorileri göster
        : originalData.filter((data) => data.category === selectedCategory)
    );
  }

  return (
    <div className={styles.header}>
      <h1>X Restoran Menusu</h1>
      <div className={styles.filter}>
        <div className={styles.category}>
          <select id="category" defaultValue={1} onChange={handleCategory}>
            <option value="all">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className={styles.sort}>
          <button onClick={sortHighToLow}>
            <FontAwesomeIcon icon={faAngleDown} style={{ color: "#ff0000" }} />
            &#x20BC;
          </button>
          <button onClick={sortLowToHigh}>
            <FontAwesomeIcon icon={faAngleUp} style={{ color: "#00cc00" }} />
            &#x20BC;
          </button>
        </div>
      </div>
    </div>
  );
};

const Menu: React.FC<{ data: MenuItemProps[] }> = ({ data }) => {
  return (
    <div className={styles.menu}>
      {data.map((item, i) => (
        <MenuItem
          img={item.img}
          header={item.header}
          category={item.category}
          value={item.value}
          key={i}
        />
      ))}
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({
  img,
  header,
  category,
  value,
}) => {
  return (
    <div className={styles.menuItem}>
      <img src={img} alt={header} className={styles.menuImg} />
      <div className={styles.menuText}>
        <h3 className={styles.menuHeader}>{header}</h3>
        <span className={styles.menuCategory}>{category}</span>
        <button className={styles.menuButton}>{value} &#x20BC;</button>
      </div>
    </div>
  );
};

export default App;
