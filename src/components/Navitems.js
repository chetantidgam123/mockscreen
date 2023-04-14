import React, { useState } from 'react'

const Navitems = ({checkSubCategory}) => {
    const [data,setData]=useState(["cycling","armoury","athelics"])
  return (
    <>
    {
        data?.map((e,indx)=>(

            <div key={indx} onClick={()=>checkSubCategory(e)}>{e}</div>
        ))
    }
    </>
  )
}

export default Navitems