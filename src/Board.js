import React, { useState } from 'react'
import HexagonGrid from 'react-hexagon-grid'
import Snake from './VenomSnake.svg'

const Board = (props) => {
  const [flag, setFlag] = useState(-1) //highlight hex on hover
  const [hexes, setHexes] = useState(props.G.hexes) //our game board

  const createHexagons = (hexCount) => {
    let hexagons = []
    let color = "#F5F5F5"

    for (let h = 0; h < hexCount; h++) {
      if (h === flag) color = "#00D1B2"
      else color = "#F5F5F5"

      hexagons.push({
        id: h,
        color: color
      })
    }
    return hexagons
  }
  
  const hexagons = createHexagons(24)

  const placeVenomSnake = (event) => {
    event.preventDefault()

    if (event.target.href.baseVal === "") {
      event.target.href.baseVal = Snake //visually telling us this hex has been placed
      props.moves.placeHex(event.target.id, props.G.venomSnake) //actually placing the hex on the game board
    }
    else if (event.target.href.baseVal === Snake) {
      event.target.href.baseVal = ""
      props.moves.placeHex(event.target.id, {})
    }

  }

  const highlight = (event) => {
    event.preventDefault()
    setFlag(parseInt(event.target.id))
  }

  const removeHighlight = (event) => {
    event.preventDefault()
    setFlag(-1)
  }

  //HELPFUL FOR LOOKING AT HEXAGON IDs
  // const renderHexagonContent = (hexagon) => {
  //   return (
  //     <text
  //       x="50%"
  //       y="50%"
  //       fontSize={100}
  //       fontWeight="lighter"
  //       style={{ fill: 'black' }}
  //       textAnchor="middle"
  //     >
  //       {hexagon.id}
  //     </text>
  //   )
  // }

  const renderHexagonContent = (hexagon) => {
    const hex =
    <image
    href=""
    id={hexagon.id}
    height="60%"
    width="60%"
    transform="translate(90,100)"
    onClick={placeVenomSnake}
    onMouseEnter={highlight}
    onMouseLeave={removeHighlight}
    />

    return (
      <>{hex}</>
    )
  }

  const getHexProps = (hexagon) => {
    return {
      style: {
        fill: hexagon.color, //hex background color
        stroke: 'black' //hex border color
      }
    }
  }

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h1 className="title" style={{ marginBottom: 45 }}>Metal Gear Hex Battle</h1>
      <HexagonGrid
        gridWidth={700}
        gridHeight={500}
        hexagons={hexagons}
        renderHexagonContent={renderHexagonContent}
        hexProps={getHexProps}
      />
    </div>
  )
}

export default Board
