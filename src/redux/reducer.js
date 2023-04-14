import { CYCLING_BMX, CYCLING_MOUNTAIN, CYCLING_ROAD } from "./actiontype";
import data1 from "./StoreData.json"
const intialState = {
    // BMX:[],
    // MOUNTAIN:[],
    // ROAD:[]
    data: []
}
export const reducer = (state = intialState, action) => {
    switch (action.type) {
        case " CYCLING_BMX": {
            return {
                data: data1.category
                // ...state,
                // BMX: ["url1","url2","url3"]
            }
        }
        case "CYCLING_MOUNTAIN": {
            return {
                ...state,
                MOUNTAIN: ["url1", "url2", "url3"]
            }
        }
        case "CYCLING_ROAD": {
            return {
                ...state,
                ROAD: ["url1", "url2", "url3"]
            }
        }
        default:
            return state;
    }
}