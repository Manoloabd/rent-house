import { INIT_CITY, CHENAGE_CITY } from "../constants"

export function initCity(cityName){
    return{
        type:INIT_CITY,
        cityName
    }
}

export function changeCity(cityName){
    return{
        type:CHENAGE_CITY,
        cityName
    }
}