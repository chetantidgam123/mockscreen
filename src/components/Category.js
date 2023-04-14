import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CYCLING_BMX, CYCLING_MOUNTAIN, CYCLING_ROAD } from '../redux/actiontype'

const Category = ({ category }) => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    useEffect(() => {
        console.log(state);
    }, [state])

    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
            {
                category?.map((ele) => (
                    <>
                        {/* {
                            <div>{ele}</div>
                        } */}
                        {
                            ele == "BMX" && <div onClick={() => dispatch({ type: "CYCLING_BMX" })}>{ele}</div>
                        }

                        {/* {
                            ele == "MOUNTAIN" && <div onClick={() => dispatch({ CYCLING_MOUNTAIN })}>{ele}</div>
                        }

                        {
                            ele == "ROAD" && <div onClick={() => dispatch({ CYCLING_ROAD })}>{ele}</div>
                        } */}

                    </>
                ))
            }
        </div>
    )
}

export default Category