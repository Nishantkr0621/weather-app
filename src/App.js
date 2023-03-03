//import Main from "./components/Main";
import Main from "./component/Main" ;
import "./App.css";
// import data from "./data";
import { createContext, useState, useEffect } from "react";
const contextData = createContext();
export default function App() {
  const [input, setInput] = useState("");
  const [cityName, setCityName] = useState("goa");
  const [data, setData] = useState();
  const [toggle , setToggle] = useState(false);
  console.log(data);
  // console.log(data.name);
  const fetching = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8dc20810cbc2a9a5b9c90ae2c35f8c69&units=metric`;
    // console.log(url);
    let res = await fetch(url);
    let d = await res.json();
    console.log("resp", cityName);
    // console.log(d);
    if (res.status === 200) setData(d);
    // else setCityName("");
  };

  useEffect(() => {
    fetching();
  }, [cityName]);

  return (
    <div
      className="App"
      style={{
        width: "100%",
        // height: "77vh",
        // backgroundColor: "rgb(135,206,235)",
        display: "flex",

        justifyContent: "center",
        paddingTop: "5%",
        paddingBottom: "5%"
      }}
    >
      <div style={{ width: "85%" }}>
        <contextData.Provider
          value={{
            input: input,
            setInput: setInput,
            setCityName: setCityName,
            data: data,
            toggle:toggle,
            setToggle:setToggle,
          }}
        >
          {data && <Main />}
        </contextData.Provider>
      </div>
    </div>
  );
}
export { contextData };
