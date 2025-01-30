import React,{useState} from "react";
import color from "./colors";
import { FaAngleLeft } from "react-icons/fa";
import { Btn } from "./style-global";


import { IoEyeOutline } from "react-icons/io5"; //on
import { IoEyeOffOutline } from "react-icons/io5"; //off

const BtnPass= (props) => {

  const [click, setClick] = useState(true);
  const [typeInput, setTypeInput] = useState('password');

  const Clicked = () => {
    setClick(!click);
    setTypeInput((prevInputType) =>
      prevInputType === 'password' ? 'text' : 'password'
    );
  }; 
    return (
        <Btn onClick={()=>props.view} position='absolute' bg_color={color.white} left={props.left} right={props.right} top={props.top}  >
           {click ? (<IoEyeOutline size='20px'/>) : (<IoEyeOffOutline size='20px' />) }
       </Btn> 
    )      
    };

export default BtnReturn;