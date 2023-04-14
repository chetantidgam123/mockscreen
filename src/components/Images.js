import { Box, Image } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const Images = () => {
    const state = useSelector((state) => state.last)
    useEffect(() => {
        console.log(state);
    }, [state])

    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
            {
                state?.map((ele, i) => (
                    <Box key={i} >
                        {
                            <Image src={ele.image} />
                        }

                    </Box>
                ))
            }
        </div>
    )
}

export default Images