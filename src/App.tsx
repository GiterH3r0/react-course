import "./App.css";
import ButtonComponent from "./components/ButtonComponent";

function App() {
  return (
    <>
      <ButtonComponent
        props={{
          title: "Click me!",
          onClickFunction: () => alert("Ez mmr"),
        }}
      />
    </>
  );
}

export default App;
