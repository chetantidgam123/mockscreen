import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
          <div key={indx} onClick={() => checkSubCategory(e.Name)}>{e.Name
          } <i className={e.icon}></i></div>
        ))
      }
    </>
  )
}

export default Navitems