import React from "react"
import { HeaderWrapper, Logo, Search } from "./HeaderParts"
import { Navigation } from './Navigation/Navigation'

const options = [
  {
    name: 'Home',
    links: [
      {
        text: 'Homepage 1',
        path: '/homepage_1'
      },
      {
        text: 'Homepage 1',
        path: '/homepage_1'
      },
      {
        text: 'Homepage 1',
        path: '/homepage_1'
      }
    ]
  },
  {
    name: 'Home',
    links: [
      {
        text: 'Homepage 1',
        path: '/homepage_1'
      },
      {
        text: 'Homepage 1',
        path: '/homepage_1'
      },
      {
        text: 'Homepage 1',
        path: '/homepage_1'
      }
    ]
  },
  {
    name: 'Home',
    links: [
      {
        text: 'Homepage 1',
        path: '/homepage_1'
      },
      {
        text: 'Homepage 1',
        path: '/homepage_1'
      },
      {
        text: 'Homepage 1',
        path: '/homepage_1'
      }
    ]
  },
  {
    name: 'Home',
    links: [
      {
        text: 'Homepage 1',
        path: '/homepage_1'
      },
      {
        text: 'Homepage 1',
        path: '/homepage_1'
      },
      {
        text: 'Homepage 1',
        path: '/homepage_1'
      }
    ]
  },
  {
    name: 'Home',
    links: [
      {
        text: 'Homepage 1',
        path: '/homepage_1'
      },
      {
        text: 'Homepage 1',
        path: '/homepage_1'
      },
      {
        text: 'Homepage 1',
        path: '/homepage_1'
      }
    ]
  },
  {
    name: 'Home',
    links: [
      {
        text: 'Homepage 1',
        path: '/homepage_1'
      },
      {
        text: 'Homepage 1',
        path: '/homepage_1'
      },
      {
        text: 'Homepage 1',
        path: '/homepage_1'
      }
    ]
  }
]
const Header = () => {
  return (
    <header>
      <HeaderWrapper>
        <Logo />
        <Navigation options={options} />
        <Search />
      </HeaderWrapper>
    </header>
  )
}

export default Header
