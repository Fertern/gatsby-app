import React from "react"
import styled from "styled-components"
import { Button } from "@material-ui/core"
import { NavigationItemMenu } from "./NavigationItemMenu"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

export const NavigationItem = styled(({ className, name, links }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <span className={className}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
      >
        {name}
      </Button>

      <NavigationItemMenu
        links={links}
        handleClose={handleClose}
        anchorEl={anchorEl}
      />
    </span>
  )
})`
  margin-right: 10px;
`
