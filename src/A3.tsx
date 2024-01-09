import React, { useContext } from 'react'
import { ThemeContext } from './App'

export const A3 = () => {
    const auth = useContext(ThemeContext)
    return (
        <div>
            {auth}
        </div>
    )
}
