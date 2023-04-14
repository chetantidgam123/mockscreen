import { Box, Image } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const Images = () => {
    const state = useSelector((state) => state.last)
    useEffect(() => {
    }, [state])

    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
            {
                state?.map((ele, i) => (
                    <Box mx={1} key={i} >
                        {
                            <Image src={ele.image} width={'300px'} height={'450px'} />
                        }

                    </Box>
                ))
            }
        </div>
    )
}

export default Images
