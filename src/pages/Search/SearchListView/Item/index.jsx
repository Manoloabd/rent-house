import React from 'react'
import "./style.less"

const Item = (props) => {
    const data = props.data
    return (
        <div className="list-item">
            <img src={data.img} alt="" />
            <div className="mask">
                <div className="left">
                    <p>{data.title}</p>
                    <p>{data.houseType}</p>
                </div>
                <div className="right">
                    <div className="btn">
                        {data.rentType}
                    </div>
                    <p dangerouslySetInnerHTML={{ __html:data.price + "元/月" }}></p>
                </div>
            </div>
        </div>
    )
}

export default Item  