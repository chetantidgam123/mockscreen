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
  useEffect(()=>{
    dispatch({ type: 'cycling' })
    dispatch({ type: 'BMX' })
  },[])

  useEffect(() => {
    if(category=='cycling'){
      dispatch({ type: 'BMX' })
    }
    else if(category=='Swimming'){
      dispatch({ type: 'Freestyle' })
    }
    else if(category=='Archary'){
      dispatch({ type: 'Rifal' })
    }
    else if(category=='Equestrian'){
      dispatch({ type: 'Dressage' })
    }
    else if(category=='Extreme'){
      dispatch({ type: 'Day Hiking' })
    }
    else if(category=='Golf'){
      dispatch({ type: 'Match Play' })
    }
    else if(category=='Gym'){
      dispatch({ type: 'Biceps Workout' })
    }
  }, [category])
  return (

    <>
      <Box display={'flex'} justifyContent={'space-around'} >
        <Navitems checkSubCategory={checkSubCategory} />
      </Box>
      <Box my={3} width={'50%'} mx={'auto'}>
        <Category checkImage={checkImage} />
      </Box>
      <Box>
        <Images />
      </Box>

    </>
  )
}

export default Navabr