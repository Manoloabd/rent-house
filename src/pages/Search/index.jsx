import React from "react"
import { useParams } from "react-router-dom"
import SearchList from "./SearchList"
import SearchHeader from "./SearchHeader"

const Search = () =>{
    const params = useParams();
    return(
        <div>
            <SearchHeader />
            <SearchList search={ params.keywords }/>
        </div>
    )
}

export default Search