import { Box, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../CSS/Navitems.css'
const Navitems = ({ checkSubCategory }) => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.data)
  useEffect(() => {
    dispatch({ type: 'navItems' })
  }, [])
  return (
    <>
      {
        state?.map((e, indx) => (
          <div className='navItems' key={indx} onClick={() => checkSubCategory(e.Name)}>
            <i className={e.icon}></i>
            <Text fontSize={'2xs'}>
            {e.Name}
            </Text>
          </div>
        ))
      }
    </>
  )
}

export default Navitems