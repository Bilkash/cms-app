import React, { startTransition } from "react";
import "./Wrapper.css";
import { useLocation, useNavigate } from "react-router-dom";
import tabs from "../tabs.json";

export default function Wrapper ({children}) {
    const {pathname} = useLocation();
    const navigate = useNavigate();

    function handleClick (path) {
        startTransition(() => navigate(path));
    };

    return (
        <div className="wrapper">
            <div className="tabs">
                {tabs.map((item) => {
                    return (
                        <div
                            key={item.path}
                            className={`tab ${pathname.slice(1) === item.id ? 'selected' : ''}`} 
                            onClick={() => handleClick(`/cms-app/${item.id}`)}
                        >
                            {item.title}
                        </div>                
                    )
                })}
            </div>


            <div>{children}</div>
        </div>
    )
}