import React from "react"
import classnames from "classnames"
import "./style.less"

const Pagination = (props) =>{
    let arr = new Array(props.len).fill(1)
    let currentIndex = props.currentIndex
    return(
        <div className="swiper-pagination">
            <ul>
                {
                    arr.map((ele,index) =>{
                        return <li className={ classnames({'selected':currentIndex === index})} key={index}></li>
                    })
                }
            </ul>
        </div>
    )
}

export default Pagination