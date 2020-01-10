import React from "react"
import Band from "./Band"

const Bands = props => {
  const renderBands = () => {
    return props.bands.map(band => {
      return <Band {...band} key={band.id} deleteBand={props.deleteBand} />
    })
  }

  return <div>{renderBands()}</div>
}

export default Bands
