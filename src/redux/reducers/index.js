import { combineReducers } from "redux"
import city from "./city"
import search from './search'

const rootReducer = combineReducers({
    city,
    search
})

export default rootReducer