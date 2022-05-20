import React from "react"

import { Nav } from "../components/Nav"
import { Repos } from "../components/Repos"
import { Header } from "../components/Header"
import { Courses } from "../components/Courses"
import { Footer } from "../components/Footer"

export default function Home() {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Repos></Repos>
      <Courses></Courses>
      <Footer></Footer>
    </>
  )
}
