import React,{useState} from "react";
import { ThreeDot } from 'react-loading-indicators';

import color from "./colors";
import { BoxItem } from "./style-global";

const LoadingBtn = (props) => {
    
    const Enable = props.enable;

    return(
        <BoxItem 
            display={Enable === true ? 'flex' : 'none'} 
            width={props.width} 
            heigth={props.heigth} 
            position='absolute' 
            bg_color={props.bg_color} 
            top={props.top} 
            left={props.left}
            margin={props.margin}
            transform={props.transform}
            >
            <ThreeDot color={props.colorLoading} size={props.size} text="" textColor="" />
        </BoxItem>
    )
};

export default LoadingBtn;