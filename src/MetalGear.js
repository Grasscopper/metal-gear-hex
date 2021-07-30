import React from 'react'
import HexagonGrid from 'react-hexagon-grid'
import Snake from './VenomSnake.svg'

const MetalGear = (props) => {
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

//   window.addEventListener('mouseup', (event) => {
//     debugger
//     event.target.href.baseVal = Snake
//   // Let's pick a random color between #000000 and #FFFFFF
//   // const color = Math.round(Math.random() * 0xFFFFFF)
//
//   // Let's format the color to fit CSS requirements
//   // const fill = '#' + color.toString(16).padStart(6,'0')
//
//   // Let's apply our color in the
//   // element we actually clicked on
//   // e.target.style.fill = fill
// })

  const hexagons = createHexagons(12)

  const renderHexagonContent = (hexagon) => {
    return (
      <image href="" height="60%" width="60%" transform="translate(90,100)" onClick={solid} />
    )
  }

  // const renderHexagonContent = (hexagon) => {
  //   return (
  //     <text
  //     x="50%"
  //     y="50%"
  //     fontSize={100}
  //     fontWeight="lighter"
  //     style={{ fill: 'white' }}
  //     textAnchor="middle">
  //     {hexagon.id}
  //     </text>
  //   )
  // }

  const getHexProps = (hexagon) => {
    return {
      style: {
        fill: '#F7F7F7', //hex background color
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

export default MetalGear
