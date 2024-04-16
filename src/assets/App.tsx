import React, { useState } from 'react';

const ResistorColorCalculator = () => {
  const [selectedColors, setSelectedColors] = useState(['black', 'black', 'black']);

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

  const decodedValue = (color: string) => {
    if (color === 'black') return 0;
    if (color === 'brown') return 1;
    if (color === 'red') return 2;
    if (color === 'orange') return 3;
    if (color === 'yellow') return 4;
    if (color === 'green') return 5;
    if (color === 'blue') return 6;
    if (color === 'violet') return 7;
    if (color === 'grey') return 8;
    if (color === 'white') return 9;
    return -1;
  };

  const decodedResistorValue = (colors: string[]) => {
    let code = '';
    const LIMIT = 3; // Se han agregado 3 colores
    for (let index = 0; index < LIMIT; index++) {
      code += decodedValue(colors[index]);
    }
    code = String(Number(code));
    let size = decodedValue(colors[3]); // El tamaño ahora es el cuarto color
    if (code[1] === '0') {
      size++;
      code = code[0];
    }
    if (size < 3) {
      code = addZeros(size, code);
      code += ' ohms';
    }
    if (size >= 3 && size < 6) {
      code = addZeros(size - 3, code);
      code += ' kiloohms';
    }
    if (size >= 6 && size < 9) {
      code = addZeros(size - 6, code);
      code += ' megaohms';
    }
    if (size >= 9) code += ' gigaohms';
    return code;
  };

  const addZeros = (size: number, code: string) => {
    if (size >= 1 && size <= 2) {
      let numberOfZeros = 0;
      while (numberOfZeros < size) {
        code += '0';
        numberOfZeros++;
      }
    }
    return code;
  };

  const handleColorChange = (index: number, color: string) => {
    const newColors = [...selectedColors];
    newColors[index] = color;
    setSelectedColors(newColors);
  };

  return (
    <div>
      <h1>Resistor Color Calculator</h1>
      {selectedColors.map((color, index) => (
        <div key={index}>
          <label>Band {index + 1}:</label>
          <select value={color} onChange={(e) => handleColorChange(index, e.target.value)}>
            {COLORS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      ))}
      <div>
        <p>Resistor Value: {decodedResistorValue(selectedColors)}</p>
      </div>
    </div>
  );
};

export default ResistorColorCalculator;
