import "../style/default.css"

import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import NotFound from "./page/NotFound";
import Editor from "./page/Editor";
import Browser from "./page/Browser";

const container: Element | null = document.getElementById('root');

if (container != null) {
    const root = createRoot(container);

    root.render(
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home key={"home"}/>}/>
                <Route path={"/editor"} element={<Editor key={"editor"}/>}/>
                <Route path={"/browser"} element={<Browser key={"browser"}/>}/>
                {/*从上到下匹配，上方全未匹配命中则说明该跳转到 404 页面*/}
                <Route path={"*"} element={<NotFound key={"notFound"}/>}/>
            </Routes>
        </BrowserRouter>
    );
}