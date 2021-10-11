import React, {useEffect} from "react"
import { fetchData } from "../lib/artworks"

const Gallery = () => {

  useEffect(() => {
    fetchData().then(paintings => console.log(paintings[0].primaryImage))
  }, [])

  return(
    <div> Gallery here</div>
  )


}

export default Gallery;