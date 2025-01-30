import React from "react";
import color from "./colors";
import { FaAngleLeft } from "react-icons/fa";
import { Btn } from "./style-global";
import { navigate } from "gatsby";

const BtnReturn = (props) => {

    const Return = () => { 
      navigate(props.src)
    }

    return (
        <Btn onClick={()=>Return()} position='absolute' bg_color={color.white} left='10px' >
           <FaAngleLeft size='20px' color='black'/>
       </Btn> 
    )      
    };

export default BtnReturn;