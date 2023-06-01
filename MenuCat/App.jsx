import menu from "./data/data";
import Title from "./components/Title";
import { useState } from "react";
import Menu from "./components/Menu";
const App = () => {
  const[menuData, setMenuData]=useState(menu)

  return(<>
    <Title/>
    <main>
      <Menu menuData={menuData}/>
    </main>

  </>);
};
export default App;
