import React from 'react'
import { alignPropType } from 'react-bootstrap/esm/types'
import {AiFillStar,AiOutlineStar} from "react-icons/ai"

 const Rating = ({rating, onClick, style}) =>  {
  return (
   <>
          {
              [...Array(5)].map((_, i) => (
                <span key={i} onClick={() => onClick(i)} style={style}>
                  { rating > i ? (
                      <AiFillStar fontSize="15px"/>
                  ) :
                      (
                          <AiOutlineStar fontSize="15px"/>
                      )}
                      </span>
    ))}
      </>
  )
}

export default Rating