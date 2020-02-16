import React from "react"
import { HeaderWrapper, Logo, Search } from "./HeaderParts"
import { Navigation } from "./Navigation/Navigation"

const options = [
  {
    name: "Home",
    links: [
      {
        text: "Homepage 1",
        path: "/sunset",
      },
      {
        text: "Homepage 1",
        path: "/sunset",
      },
      {
        text: "Homepage 1",
        path: "/sunset",
      },
    ],
  },
  {
    name: "Category",
    links: [
      {
        text: "Homepage 1",
        path: "/sunset",
      },
      {
        text: "Homepage 1",
        path: "/sunset",
      },
      {
        text: "Homepage 1",
        path: "/sunset",
      },
    ],
  },
  {
    name: "Posts",
    links: [
      {
        text: "Homepage 1",
        path: "/sunset",
      },
      {
        text: "Homepage 1",
        path: "/sunset",
      },
      {
        text: "Homepage 1",
        path: "/sunset",
      },
    ],
  },
  {
    name: "Pages",
    links: [
      {
        text: "Homepage 1",
        path: "/sunset",
      },
      {
        text: "Homepage 1",
        path: "/sunset",
      },
      {
        text: "Homepage 1",
        path: "/sunset",
      },
    ],
  },
  {
    name: "Lifestyle",
    links: [
      {
        text: "Homepage 1",
        path: "/sunset",
      },
      {
        text: "Homepage 1",
        path: "/sunset",
      },
      {
        text: "Homepage 1",
        path: "/sunset",
      },
    ],
  },
  {
    name: "World",
    links: [
      {
        text: "Homepage 1",
        path: "/sunset",
      },
      {
        text: "Homepage 1",
        path: "/sunset",
      },
      {
        text: "Homepage 1",
        path: "/sunset",
      },
    ],
  },
]
const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Navigation options={options} />
      <Search />
    </HeaderWrapper>
  )
}

export default Header
