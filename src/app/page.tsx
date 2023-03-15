import type { NextPage } from "next"
import Link from "next/link"
import "../styles.css"

const Page: NextPage = () => {
  return (
    <div>
      <p>Hello, Next.js!</p> <Link href="/dashboard">dashboard</Link>
    </div>
  )
}

export default Page
