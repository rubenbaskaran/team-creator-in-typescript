import React from "react";

const ButtonStyle = {
  width: "400px",
  height: "50px",
  fontSize: "20px",
  marginBottom: "10px",
};

function App(): JSX.Element {
  const [name, setName] = React.useState("Ruben");
  const [backgroundColor, setBackgroundColor] = React.useState("lightgreen");

  function OnNameChangeClick(): void {
    if (name === "Ruben") {
      setName("Baskaran");
    } else {
      setName("Ruben");
    }
  }

  function OnBackgroundColorChangeClick(): void {
    if (backgroundColor === "lightgreen") {
      setBackgroundColor("lightblue");
    } else {
      setBackgroundColor("lightgreen");
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "teal",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: backgroundColor,
          height: "50%",
          width: "50%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label
          style={{
            display: "flex",
            fontSize: 50,
            width: "50%",
            height: "50%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Hello {name}!
        </label>
        <button style={ButtonStyle} onClick={() => OnNameChangeClick()}>
          Click to change name
        </button>
        <button
          style={ButtonStyle}
          onClick={() => OnBackgroundColorChangeClick()}
        >
          Click to change background color
        </button>
      </div>
    </div>
  );
}

export default App;
