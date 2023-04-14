import data1 from "./StoreData.json"
const intialState = {
    data: [],
    middle: [],
    last: []
}
export const reducer = (state = intialState, action) => {
    switch (action.type) {
        case "navItems": {
            return {
                ...state,
                data: data1.category
            }
        }
        case "cycling": {
            return {
                ...state,
                middle: data1.cyclingMenu
            }
        }
        case "Swimming": {
            return {
                ...state,
                middle: data1.swimmingMenu
            }
        }
        case "Archary": {
            return {
                ...state,
                middle: data1.archaryMenu
            }
        }
        case "box": {
            return {
                ...state,
                last: data1.cyclingImages.box
            }
        }
        case "Mountain": {
            return {
                ...state,
                last: data1.cyclingImages.mountain
            }
        }
        case "salty": {
            return {
                ...state,
                last: data1.swimmingImages.salty
            }
        }
        default:
            return state;
    }
}