import React from "react"
import { FooterWrapper, FooterLogo } from "./FooterParts"
import { SocialLinks } from "./SocialLinks/SocialLinks"
import { StyledContainer } from "./../../hoc/withLayout"
import { Copyright } from "./Copyrigth"

const options = [
  {
    name: "life",
    links: [
      {
        text: "People",
        path: "/sunset",
      },
      {
        text: "Entertain This!",
        path: "/sunset",
      },
      {
        text: "Movies",
        path: "/sunset",
      },
      {
        text: "TV",
        path: "/sunset",
      },
      {
        text: "Books",
        path: "/sunset",
      },
      {
        text: "Games",
        path: "/sunset",
      },
    ],
  },
  {
    name: "money",
    links: [
      {
        text: "People",
        path: "/sunset",
      },
      {
        text: "Entertain This!",
        path: "/sunset",
      },
      {
        text: "Movies",
        path: "/sunset",
      },
      {
        text: "TV",
        path: "/sunset",
      },
      {
        text: "Books",
        path: "/sunset",
      },
      {
        text: "Games",
        path: "/sunset",
      },
    ],
  },
  {
    name: "tech",
    links: [
      {
        text: "People",
        path: "/sunset",
      },
      {
        text: "Entertain This!",
        path: "/sunset",
      },
      {
        text: "Movies",
        path: "/sunset",
      },
      {
        text: "TV",
        path: "/sunset",
      },
      {
        text: "Books",
        path: "/sunset",
      },
      {
        text: "Games",
        path: "/sunset",
      },
    ],
  },
  {
    name: "travel",
    links: [
      {
        text: "People",
        path: "/sunset",
      },
      {
        text: "Entertain This!",
        path: "/sunset",
      },
      {
        text: "Movies",
        path: "/sunset",
      },
      {
        text: "TV",
        path: "/sunset",
      },
      {
        text: "Books",
        path: "/sunset",
      },
      {
        text: "Games",
        path: "/sunset",
      },
    ],
  },
  {
    name: "sport",
    links: [
      {
        text: "People",
        path: "/sunset",
      },
      {
        text: "Entertain This!",
        path: "/sunset",
      },
      {
        text: "Movies",
        path: "/sunset",
      },
      {
        text: "TV",
        path: "/sunset",
      },
      {
        text: "Books",
        path: "/sunset",
      },
      {
        text: "Games",
        path: "/sunset",
      },
    ],
  },
  {
    name: "follow us",
    links: [
      {
        text: "People",
        path: "/sunset",
      },
      {
        text: "Entertain This!",
        path: "/sunset",
      },
      {
        text: "Movies",
        path: "/sunset",
      },
      {
        text: "TV",
        path: "/sunset",
      },
      {
        text: "Books",
        path: "/sunset",
      },
      {
        text: "Games",
        path: "/sunset",
      },
    ],
  },
]

const Footer = () => (
  <FooterWrapper>
    <StyledContainer>
      <FooterLogo />
      <SocialLinks options={options} />
      <Copyright />
    </StyledContainer>
  </FooterWrapper>
)

export default Footer
