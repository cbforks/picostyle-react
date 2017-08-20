import React from "react"
import ReactDOM from 'react-dom'
import picostyle from "../"

const ps = picostyle(React.createElement)

class Hello extends React.Component {
  render() {
    const keyColor = "#f07"

    const Text = ps("h1")({
      fontSize: "64px",
      cursor: "pointer",
      color: "#fff",
      padding: "0.4em",
      transition: "all .2s ease-in-out",
      ":hover": {
        transform: "scale(1.3)",
      },
      "@media (max-width: 450px)": {
        fontSize: "32px",
      },
    })

    const Wrapper = ps("div")({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      height: "100vh",
      backgroundColor: keyColor,
    })

    return (
      <Wrapper id="pico">
        <Text>Picostyle</Text>
      </Wrapper>
    )
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById("app")
)
