import React from "react"
import styled from "styled-components"
import { colors } from "../../utils/vars"
import { Link } from "gatsby"

const FooterLogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const Logo = styled(({ className }) => (
  <Link className={className} to="/">
    <img src="/logo-lite.png" alt="" />
  </Link>
))`
  max-width: 100%;
  height: auto;
`

const SemiText = styled.span`
  font-family: "Hind Vadodara";
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #707070;
  letter-spacing: -0.03em;
`
export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: ${colors.footerColor};
  height: 600px;
  margin: 0 auto;
  z-index: 9999;
  width: 100%;
`

export const FooterLogo = () => (
  <FooterLogoWrapper>
    <Logo />
    <SemiText>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quas
      dolores impedit sunt amet quam deserunt explicabo veniam?
    </SemiText>
  </FooterLogoWrapper>
)
