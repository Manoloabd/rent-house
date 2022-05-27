import React, { useEffect, useState, useRef } from "react"
import "./style.less"

const LoadMore = (props) => {

    const more = useRef();
    const [loadTop, setLoadTop] = useState(10000)

    /**
     * 浅比较
     */
    useEffect(() => {
        // getBoundingClientRect
        // 视口高度
        let timer = null;
        let winHeight = document.documentElement.clientHeight;
        window.addEventListener("scroll", () => {
            if (more.current) {
                setLoadTop(more.current.getBoundingClientRect().top)
                if (timer) {
                    clearTimeout(timer);
                } else {
                    timer = setTimeout(() => {
                        if (winHeight > loadTop) {
                           props.onLoadMore()
                        }
                    }, 100)
                }
            }
        })
    }, [loadTop])

    return (
        <div className="load" ref={more}>
            加载更多
        </div>
    )
}

export default LoadMore