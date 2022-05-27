import React, {useState} from 'react'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from './pagination'
import './style.less'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Swiper(props) {

  const [index,setIndex] = useState(0);
  function handleChangeIndex(index) {
      setIndex(index);
  }
  return (
    <div className='swiper'>
        <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex}>
          {
            props.banners.map((ele, index) => {
                        return (
                            <div key={index} className="swiper-view">
                                <img src={ ele } alt=""/>
                            </div>
                        )
                    })
          }
        </AutoPlaySwipeableViews>
        <Pagination currentIndex={index} len={props.banners.length}/>
    </div>
  )
}
