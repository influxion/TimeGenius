import React from "react"
import Hydrate from "../hydrate"

const Footer = () => {
  return (
    <div className="flex justify-between border-t border-gray-300/50 p-4 text-xs">
      <span>
        Copyright © {new Date().getFullYear()}. INFLUXED. All rights reserved.
      </span>
      <Hydrate />
      <div className="flex gap-3">
        <a href="https://github.com/influxion" rel="noreferrer" target="_blank">
          Github <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jordon-nichols/"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/influxedio" rel="noreferrer" target="_blank">
          Twitter <i className="fa-brands fa-square-twitter"></i>
        </a>
      </div>
    </div>
  )
}

export default Footer
