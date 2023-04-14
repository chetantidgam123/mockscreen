import { CYCLING_BMX, CYCLING_MOUNTAIN, CYCLING_ROAD } from "./actiontype";

const intialState={
    BMX:[],
    MOUNTAIN:[],
    ROAD:[]
}

export const reducer=(state=intialState,{type})=>{
  switch (type) {
    case CYCLING_BMX:{
        return {
            ...state,
            BMX: ["url1","url2","url3"]
        }
    }
    case CYCLING_MOUNTAIN:{
        return {
            ...state,
            MOUNTAIN: ["url1","url2","url3"]
        }
    }
    case CYCLING_ROAD:{
        return {
            ...state,
            ROAD: ["url1","url2","url3"]
        }
    }
    default:
        return state;
  }
}