import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('white');

  const colors = ['Tan','Grey','olive','Lavender','Wheat'];

  const handleColorChange = (color) => {
    setBgColor(color);
  };
  return (
    <div style={{ backgroundColor: bgColor, minHeight: '100vh', padding: '20px' }}>
      <h1>Background Color Changer</h1>
      <p>Select a background color:</p>
      <div>
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => handleColorChange(color)}
            style={{
              backgroundColor: color,
              padding: '10px',
              margin: '5px',
              border: 'none',
              cursor: 'pointer',
              color: '#000000',
            }}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
