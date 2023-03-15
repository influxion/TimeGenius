"use client"
import { initStorage } from "@/hooks/tauri/storage"
import { useEffect, useState } from "react"

const Hydrate = () => {
  const [hydrated, setHydrated] = useState<boolean>(false)
  useEffect(() => {
    ;(async () => {
      const didHydrate = await initStorage()
      setHydrated(didHydrate)
    })()
  }, [])
  return hydrated ? (
    <i className="fa-duotone fa-wifi"></i>
  ) : (
    <i className="fa-duotone fa-wifi-exclamation"></i>
  )
}
export default Hydrate

const WifiIcon = () => {
  const icons = [
    "",
    "fa-solid fa-wifi-weak",
    "fa-solid fa-wifi-fair",
    "fa-solid fa-wifi",
  ]

  const [currentIconIndex, setCurrentIconIndex] = useState(0)

  const cycleIcons = () => {
    setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length)
  }

  useEffect(() => {
    setTimeout(cycleIcons, 300)
  }, [currentIconIndex])

  return <i className={icons[currentIconIndex]} />
}
