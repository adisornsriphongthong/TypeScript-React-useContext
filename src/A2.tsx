import React, { useContext } from 'react';
import { ThemeContext } from './App';

export const A2 = () => {
    const auth = useContext(ThemeContext)

  return (
    <>
      <p>{auth}</p>
    </>
  );
};
