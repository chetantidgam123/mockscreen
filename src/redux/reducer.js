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
        case "Equestrian": {
            return {
                ...state,
                middle: data1.equestrian
            }
        }
        case "Extreme": {
            return {
                ...state,
                middle: data1.extreme
            }
        }
        case "Golf": {
            return {
                ...state,
                middle: data1.golf
            }
        }
        case "Gym": {
            return {
                ...state,
                middle: data1.gym
            }
        }
        case "BMX": {
            return {
                ...state,
                last: data1.cyclingImages.bmx
            }
        }
        case "Mountain": {
            return {
                ...state,
                last: data1.cyclingImages.mountain
            }
        }
        case "Road": {
            return {
                ...state,
                last: data1.cyclingImages.road
            }
        }
        case "Track": {
            return {
                ...state,
                last: data1.cyclingImages.track
            }
        }
        case "Freestyle": {
            return {
                ...state,
                last: data1.swimmingImages.Freestyle
            }
        }
        default:
            return state;
    }
}