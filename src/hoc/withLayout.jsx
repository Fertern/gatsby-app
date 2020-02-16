import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import { Container } from "@material-ui/core"
import styled from "styled-components"

export const StyledContainer = styled(({ ...props }) => (
  <Container {...props} />
))`
  margin-top: 35px;
`
export default WrappedComponent => ({ ...props }) => (
  <>
    <StyledContainer maxWidth="lg">
      <Header />
      <WrappedComponent {...props} />
    </StyledContainer>
    <Footer />
  </>
)
