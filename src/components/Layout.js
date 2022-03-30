import React, { useRef, useState } from "react";
import Header from "./Header";
import MyIframe from "./MyIframe";

export default function Layout({children}) {

    const [auth, setAuth] = useState("false"); 
    const iFrameRef = useRef(null);
    const origin = "http://localhost:3030"


    function ChildComponent({children}) {
        return (
            <>
                {React.cloneElement(children, {update: setAuth, auth: auth, loginFunction: passUserInfo})}
            </>
        )
    }

    const handleAuthChange = () => {
        setAuth(!auth)
    }

    const passUserInfo = (values) => {
        if(!iFrameRef.current)
            return;
        // console.log("got here");
        // alert(JSON.stringify(values, null, 2))
        iFrameRef.current.contentWindow.postMessage(values, origin)
    }

    const removeUserInfo = () => {
        if(!iFrameRef.current)
            return;
        iFrameRef.current.contentWindow.postMessage({}, origin)
    }


    return (
        <div>
        <Header status={auth} update={handleAuthChange} logoutFunction={removeUserInfo}/>
        <div className="main-body centered">
            {ChildComponent({children})}
        </div>
        <MyIframe auth={auth} ifref={iFrameRef}/>
        </div>
    )
}