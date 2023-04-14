import React, { useState } from 'react'
import Navitems from '../components/Navitems'
import { Box } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Category from '../components/Category'
import Images from '../components/Images'

const Navabr = () => {
  const [category, setCategory] = useState("")
  const [image, setimage] = useState("")
  const dispatch = useDispatch()
  const state = useSelector((state) => state.middle)
  const checkSubCategory = (x) => {
    setCategory(x)
    dispatch({ type: x })
  }
  const checkImage = (x) => {
    setimage(x)
    dispatch({ type: x })
  }

  useEffect(() => {
    dispatch({ type: 'cycling' })
    dispatch({ type: 'box' })
  }, [])
  return (

    <>
      <Box display={'flex'} justifyContent={'space-around'} >
        <Navitems checkSubCategory={checkSubCategory} />
      </Box>
      <Box my={3}>
        <Category checkImage={checkImage} />
      </Box>
      <Box>
        <Images />
      </Box>

    </>
  )
}

export default Navabr