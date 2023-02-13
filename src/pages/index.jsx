import { useState, useEffect } from "react";
//COMPONENTS
import { CardList } from "../Components/index";
//THEME
import { ThemeContext, themes, BtnDarkMode } from "../styles/ThemeContext";
function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {/* <ThemeContext.Provider value={{ theme: theme }}> */}

      <section className={`container`}>
        {/* <BtnDarkMode
          className="darkMode-btn"
          value={theme}
          onClick={(e) => {
            changeTheme(e.target.value);
          }}
        /> */}
        <CardList />
      </section>
      {/* </ThemeContext.Provider> */}
    </>
  );
}

export default Home;
