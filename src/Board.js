import React from 'react'
import HexagonGrid from 'react-hexagon-grid'
import Snake from './VenomSnake.svg'

const Board = (props) => {
  const createHexagons = (hexCount) => {
    let hexagons = []
    for (let h = 0; h < hexCount; h++) {
      hexagons.push({
        id: h
      })
    }
    return hexagons
  }

  const solid = (event) => {
    event.preventDefault()
    event.target.href.baseVal = Snake
  }

  let hexColor = "#F4F4F4"
  const liquid = (event) => {
    event.preventDefault()
    hexColor = "red"
  }

  const hexagons = createHexagons(12)

  const renderHexagonContent = (hexagon) => {
    const hex =
    <image href="" height="60%" width="60%" transform="translate(90,100)" onClick={solid} onMouseEnter={liquid} />
    // hex.addEventListener("mouseover", function( event ) {
    //   // highlight the mouseover target
    //   event.target.style.color = "orange";
    //
    //   // // reset the color after a short delay
    //   // setTimeout(function() {
    //   //   event.target.style.color = "";
    //   // }, 500);
    // }, false);

    return (
      <>{hex}</>
    )
  }

  const getHexProps = (hexagon) => {
    return {
      style: {
        fill: hexColor, //hex background color
        stroke: 'black' //hex border color
      }
    }
  }

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <div className="columns is-multiline">
      <div className="column is-full">
      <h1 className="title">Metal Gear Hex Battle</h1>
      </div>
      </div>
      <HexagonGrid
        gridWidth={700}
        gridHeight={500}
        hexagons={hexagons}
        renderHexagonContent={renderHexagonContent}
        hexProps={getHexProps} />
    </div>
  )
}

export default Board
