import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import SearchIcon from "@material-ui/icons/Search"


export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Logo = styled(() => (
  <Link to="/">
    <img src="/logo.png" alt="" />
  </Link>
))`
  max-width: 100%;
  height: auto;
`
export const Search = styled(() => <SearchIcon />)``
