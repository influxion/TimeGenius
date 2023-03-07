import { invoke } from "@tauri-apps/api/tauri"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useState } from "react"

import { useGlobalShortcut } from "@/hooks/tauri/shortcuts"

const Home: NextPage = () => {
  const [buttonDesc, setButtonDesc] = useState<string>(
    "Waiting to be clicked. This calls 'on_button_clicked' from Rust.",
  )
  const onButtonClick = () => {
    invoke<string>("on_button_clicked")
      .then((value) => {
        setButtonDesc(value)
      })
      .catch(() => setButtonDesc("Failed to invoke Rust command 'on_button_clicked'"))
  }

  useGlobalShortcut("CommandOrControl+P", () => {
    console.log("Ctrl+P was pressed!")
  })

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <main className="flex flex-1 flex-col items-center justify-center py-8">
        <h1 className="text-3xl font-bold text-blue-600">Tauri NextJS Application</h1>
        <button onClick={onButtonClick} className="rounded-md border p-2 shadow-md">
          Start testing
        </button>
        <p>{buttonDesc}</p>
      </main>
    </div>
  )
}

export default Home
