import React, { useState } from 'react'
import { ReactReader } from 'react-reader'

const EpubReader = () => {
    const [location, setLocation] = useState()
    const locationChanged = epubcifi => {
      setLocation(epubcifi)
    }
    return (
      <div style={{ height: '100vh' }}>
        <ReactReader
          location={location}
          locationChanged={locationChanged}
          url="https://react-reader.metabits.no/files/alice.epub"
        />
      </div>
    )
}

export default EpubReader;