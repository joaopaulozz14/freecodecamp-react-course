/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("rgb");
  const [color, setColor] = useState("rgb(200,241,5)");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
    console.log(color);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    let rgbColor = `rgb(${r},${g},${b})`;
    /* console.log(rgbColor); */
    setColor(rgbColor);
  }

  useEffect(() => {
    if (typeOfColor === "hex") handleCreateRandomHexColor()
      else handleCreateRandomRgbColor();
  }, [typeOfColor]);
  
  return (
    <div style={{ width: "100vw", height: "100vh", background: color }}>
      <button
        className="text-white bg-gray-500 p-2"
        onClick={() => setTypeOfColor("hex")}
      >
        Create HEX Color
      </button>
      <button
        className="text-white bg-gray-500 mx-3 p-2"
        onClick={() => setTypeOfColor("rgb")}
      >
        Create RGB Color
      </button>
      <button
        className="text-white bg-gray-500 p-2"
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div style={{ color: "#fff" }}>
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
