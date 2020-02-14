import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import styled from "styled-components"

const StyledButton = styled(({ ...props }) => <Button {...props} />)`
  color: green;
  border-color: green;
`

const test = () => {
  return (
    <>
      <div>TEST PAGE NUMBER 2</div>
      <Link to="/">Back to main</Link>
      <StyledButton variant="outlined" color="secondary">
        Secondary
      </StyledButton>
    </>
  )
}

export default test
