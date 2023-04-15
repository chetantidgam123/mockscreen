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
        case "Backstroke": {
            return {
                ...state,
                last: data1.swimmingImages.Backstroke
            }
        }
        case "Butterfly": {
            return {
                ...state,
                last: data1.swimmingImages.Butterfly
            }
        }
        case "Medley": {
            return {
                ...state,
                last: data1.swimmingImages.Medley
            }
        }
        case "Rifal": {
            return {
                ...state,
                last: data1.archaryImages.Rifal
            }
        }
        case "Pistol": {
            return {
                ...state,
                last: data1.archaryImages.Pistol
            }
        }
        case "Show-jumping": {
            return {
                ...state,
                last: data1.equastrainImages.Show_jumping
            }
        }
        case "Eventing": {
            return {
                ...state,
                last: data1.equastrainImages.Eventing
            }
        }
        case "Dressage": {
            return {
                ...state,
                last: data1.equastrainImages.Dressage
            }
        }
        case "Day Hiking": {
            return {
                ...state,
                last: data1.extremeImages.Day_Hiking
            }
        }
        case "Summit Hiking": {
            return {
                ...state,
                last: data1.extremeImages.Summit_Hiking
            }
        }
        case "Long-Distance Hiking": {
            return {
                ...state,
                last: data1.extremeImages.Long_Distance_Hiking
            }
        }
        case "Biceps Workout": {
            return {
                ...state,
                last: data1.gymImages.Biceps_Workout
            }
        }
        case "Chest Workout": {
            return {
                ...state,
                last: data1.gymImages.Chest_Workout
            }
        }
        case "Legs Workout": {
            return {
                ...state,
                last: data1.gymImages.Legs_Workout
            }
        }
        case "Match Play": {
            return {
                ...state,
                last: data1.golfImages.Match_Play
            }
        }
        case "Stroke Play": {
            return {
                ...state,
                last: data1.golfImages.Stroke_Play
            }
        }
        case "Shotgun": {
            return {
                ...state,
                last: data1.archaryImages.Shotgun
            }
        }
        default:
            return state;
    }
}