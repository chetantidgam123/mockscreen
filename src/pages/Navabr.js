import React, { useState } from 'react'
import Navitems from '../components/Navitems'
import { Box } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import Category from '../components/Category'

const subData={
    "cycling":["BMX","MOUNTAIN","ROAD"],
    "armoury":["aman","aman","aman"],
    "athletics":["chetan","chetan","chetan"],
}

const Navabr = () => {
    const [navbar,setNavbar]  = useState(subData)
    const [category,setCategory]=useState("")
    const checkSubCategory=(x)=>{
        // console.log(x)
        setCategory(x)
    }
    console.log(category)
  return (
    
    <>
        <Box display={'flex'}>
                <Box >
                <Navitems checkSubCategory={checkSubCategory}/>
                </Box>
    </Box>
    {
        category==="cycling" ? (<><Category category={navbar.cycling}/></>) : category==="armoury" ?  (<><Category category={navbar.armoury}/></>) :  (<><Category category={navbar.athletics}/></>)
    }

    </>
  )
}

export default Navabr