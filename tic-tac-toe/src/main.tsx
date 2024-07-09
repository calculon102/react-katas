import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TicTacToe from './TicTacToe.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TicTacToe />
  </React.StrictMode>,
)
