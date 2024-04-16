import React, { useState } from 'react';

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

const ResistorColorCalculator = () => {
  const [selectedColors, setSelectedColors] = useState(['black', 'black']);

  const handleColorChange = (index: number, color: string) => {
    const newColors = [...selectedColors];
    newColors[index] = color;
    setSelectedColors(newColors);
  };

  const colorCode = (color: string) => COLORS.indexOf(color);

  const decodedValue = () => {
    // Verificar que haya al menos dos colores seleccionados
    if (selectedColors.length < 2) {
      return 'Select two colors';
    }
    return colorCode(selectedColors[0]) * 10 + colorCode(selectedColors[1]);
  };

  return (
    <div>
      <h1>Resistor Color Calculator</h1>
      <div>
        <label>First Band:</label>
        <select onChange={(e) => handleColorChange(0, e.target.value)}>
          {COLORS.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Second Band:</label>
        <select onChange={(e) => handleColorChange(1, e.target.value)}>
          {COLORS.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p>Decoded Value: {decodedValue()}</p>
      </div>
    </div>
  );
};

export default ResistorColorCalculator;
