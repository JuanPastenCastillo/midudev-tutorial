import React from 'react'
import './Gif.css'
// import { Link, Outlet } from 'react-router-dom'

export default function Gif({ title, id, url }) {
  return (
    <div>
      <a
        href={url}
        rel="noreferrer"
        target="_blank"
        className="Gif">
        <h4> {title}</h4>
        <img alt={title} src={url} />
      </a>
    </div>
  )
}
