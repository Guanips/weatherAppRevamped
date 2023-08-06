import "../mainTempDisplay/MainTempDisplay.css"
import "../../assets/globalCss/global.css"
import axios from "axios"
import { useEffect, useState } from "react"

const MainTempDisplay = (props) => {

    return (
        <>
            <p className="mainTemp"><b>{props.data}</b></p>
        </>
    )
}

export default MainTempDisplay