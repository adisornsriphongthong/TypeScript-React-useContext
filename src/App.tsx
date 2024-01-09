import React, { createContext, useContext, useState } from 'react';
import { A2 } from './A2';
import { A3 } from './A3';

type ThemeType = string;
const ThemeContext = React.createContext<ThemeType | undefined>(undefined);

function MyComponent() {
  const [username, setUsername] = useState<string>('')
  const [data, setData] = useState<string>('');

  return (
    <>
      <ThemeContext.Provider value={data}>
        <A2 />
        <A3 />
      </ThemeContext.Provider>

      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setUsername(e.target.value);
        }}
        type="email"
      />

      <button onClick={() => {
        setData(username)
      }}>
        Sign In
      </button>

      <button onClick={() => {
        setData('')
      }}>
        Sign Up
      </button>
    </>
  );
}

export { ThemeContext }
export default MyComponent;
