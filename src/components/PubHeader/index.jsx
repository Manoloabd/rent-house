import React from 'react'
import "./style.less"
// import {withRouter} from 'react-router-dom'

export default function PubHeader(props) {

function backHandle() {
  /**
   * 返回上一页的两个犯方法
   */
    // props.history.go();
    window.history.back();
}

  return (
    <div id="common-header">
            <span className="back-icon" onClick={backHandle}>
                <i className="icon-chevron-left"></i>
            </span>
            <h1>{props.title}</h1>
        </div>
  )
}

// export default withRouter(PubHeader)