import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CYCLING_BMX, CYCLING_MOUNTAIN, CYCLING_ROAD } from '../redux/actiontype'
import { Box } from '@chakra-ui/react'

const Category = ({ checkImage }) => {
    const state = useSelector((state) => state.middle)
    useEffect(() => {
    }, [state])

    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
            {
                state?.map((ele, i) => (
                    <Box key={i} >
                        {
                            <Box onClick={() => { checkImage(ele) }}>{ele}</Box>
                        }

                    </Box>
                ))
            }
        </div>
    )
}

export default Category