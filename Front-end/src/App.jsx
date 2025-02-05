import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, ButtonGroup } from "@heroui/button";
import { Image } from "@heroui/image";

function App() {
  return (
    <>
      <Button color="primary">hello</Button>
      <Image
        isBlurred
        alt="HeroUI Album Cover"
        className="m-5"
        src="https://heroui.com/images/album-cover.png"
        width={240}
      />
    </>
  );
}

export default App;
