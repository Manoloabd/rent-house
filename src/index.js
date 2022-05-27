import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/css/common.less"
import "./assets/css/font.css"
import "./assets/css/iconfont.css"
import AppRouter from "./router"
import "./assets/csstest/iconfont.css"
import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.render(
   <Provider store={store}>
    <AppRouter />
   </Provider> 
  ,
  document.getElementById('root')
);
