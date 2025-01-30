import React from "react";

import color from "./colors";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Btn } from "./style-global";

const BtnExit = (props) => {
    return (
        <Btn onClick={props.cancel} position='absolute' bg_color={color.canceled} right={props.right ? props.right : '10px' } top={props.top} >
           <IoCloseCircleOutline size='20px' color='White'/>
       </Btn> 
    )      
    };

export default BtnExit;