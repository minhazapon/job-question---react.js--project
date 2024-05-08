import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Css from './QA/Css';
import HTml from './QA/HTml';
import JS from './QA/JS';
import ReactJs from './QA/ReactJs';
import MongoDb from './QA/MongoDb';
import CardFiles from './bangla version/CardFiles';
import Bhtml from './bangla version/Bhtml';
import BCss from './bangla version/BCss';
import BJavascript from './bangla version/BJavascript';
import BReact from './bangla version/BReact';
import BMongodb from './bangla version/BMongodb';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <HTml></HTml>,
      },
      {
        path: "/css",
        element: <Css></Css>,
      },
      {
        path: "/js",
        element: <JS></JS>,
      },
      {
        path: "/react",
        element: <ReactJs></ReactJs> ,
      },
      {
        path: "/DB",
        element:  <MongoDb></MongoDb> ,
      },
      {
        path: "/card",
        element:  <CardFiles></CardFiles> ,
      },
      {
        path: "/bh",
        element: <Bhtml></Bhtml> ,
      },
      {
        path: "/bc",
        element:  <BCss></BCss>,
      },
      {
        path: "/bj",
        element:  <BJavascript></BJavascript>,
      },
      {
        path: "/br",
        element:  <BReact></BReact>,
      },
      {
        path: "/bm",
        element:   <BMongodb></BMongodb>,
      },
      
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
