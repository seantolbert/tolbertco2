import React, { useState } from "react";
import tinycolor from "tinycolor2";

function ColorPicker() {
  const [baseColor, setBaseColor] = useState("#ff0000");
  const [lighterShade, setLighterShade] = useState(
    tinycolor(baseColor).lighten().toHexString()
  );
  const [darkerShade, setDarkerShade] = useState(
    tinycolor(baseColor).darken().toHexString()
  );
  const [complementaryColor, setComplementaryColor] = useState(
    tinycolor(baseColor).complement().toHexString()
  );

  const handleColorChange = (e) => {
    e.preventDefault();
    const newColor = tinycolor(e.target.value);
    if (newColor.isValid()) {
      setBaseColor(newColor.toHexString());
      setLighterShade(newColor.lighten(5).toHexString());
      setDarkerShade(newColor.darken(5).toHexString());
      setComplementaryColor(newColor.complement().toHexString());
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-lg font-bold" htmlFor="color-picker">
        Select a color:
      </label>
      <input
        className="appearance-none h-10 w-20 "
        type="color"
        id="color-picker"
        value={baseColor}
        onChange={handleColorChange}
      />

      <div className="flex space-x-4">
        <div
          className="w-24 h-24 rounded-lg shadow-lg"
          style={{ backgroundColor: lighterShade }}
        ></div>
        <div
          className="w-24 h-24 rounded-lg shadow-lg"
          style={{ backgroundColor: baseColor }}
        ></div>
        <div
          className="w-24 h-24 rounded-lg shadow-lg"
          style={{ backgroundColor: darkerShade }}
        ></div>
      </div>

      <div className="text-lg font-bold">
        Complementary Color:{" "}
        <span style={{ color: complementaryColor }}>{complementaryColor}</span>
      </div>
      <div
        style={{ backgroundColor: baseColor }}
        className="w-96 h-96 flex items-center justify-center"
      >
        <div
          style={{
            boxShadow: `-.3rem -.3rem .6rem ${lighterShade}, .3rem .3rem .6rem ${darkerShade}`,
            background: baseColor,
          }}
          className="h-1/2 w-1/2 rounded-full flex items-center justify-center"
        >
          <div
            style={{
              boxShadow: `inset -.2rem -.2rem .5rem ${lighterShade}, inset .2rem .2rem .5rem ${darkerShade}`,
              background: baseColor,
            }}
            className="h-4/5 w-4/5 rounded-full"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;
