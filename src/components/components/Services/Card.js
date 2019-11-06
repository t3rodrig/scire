import React from "react"
import styled from "styled-components"
import Button from "../../styledComponents/Button"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Title = styled.span`
  font-size: 30px;
  color: white;
  margin-bottom: 5%;
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-left: 3%;
  margin-top: 25%;
`
const CardContainer = styled.div`
  margin-bottom: 3%;
  display: flex;
  width: 45vw;
`

const Card = ({ image, title, btnInfo }) => (
  <CardContainer>
    <Img
      title="consultas_img"
      fluid={image.childImageSharp.fluid}
      style={{ width: "100%" }}
    />
    <TextContainer>
      <Title>{title}</Title>
      <Link to="/servicios_consulta" style={{ textDecorationLine: "none" }}>
        <Button>
          <p>{btnInfo}</p>
        </Button>
      </Link>
    </TextContainer>
  </CardContainer>
)

export default Card
