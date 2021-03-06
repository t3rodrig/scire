import React from "react"
import styled from "styled-components"
import Button from "../styledComponents/HeaderButton"
import { Link } from "gatsby"

const CardStudio = styled.div`
  height: 200px;
  width: 325px;
  margin: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px 0 rgba(176, 176, 176, 0.3);
  img {
    margin-right: 10px;
  }
`
const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 85%;
  span {
    color: #6d6d6d;
    font-family: "Gotham Condensed";
    font-size: 22px;
    font-weight: 300;
    line-height: 25px;
  }
`

const StudiesCard = ({ title, slug, image }) => {
  return (
    <>
      <CardStudio>
        <CardInfo>
          <img src={image} alt="studios" />
          <span>{title}</span>
        </CardInfo>
        <div>
          <Link
            to={`servicios_estudios/${slug}`}
            style={{ textDecorationLine: "none" }}
          >
            <Button>
              <span>VER DETALLES</span>
            </Button>
          </Link>
        </div>
      </CardStudio>
    </>
  )
}

export default StudiesCard
