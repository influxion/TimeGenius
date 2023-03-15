import Link from "next/link"
import React from "react"

const Navigation = () => {
  return (
    <nav className="flex justify-between border-b border-gray-300/50 p-4">
      <div className="flex gap-4">
        <Link href="/">HOME</Link>
        <Link href="/tasks">TASKS</Link>
      </div>
      <div>
        <i className="fa-solid fa-lightbulb-on"></i>
      </div>
    </nav>
  )
}

export default Navigation
