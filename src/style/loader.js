import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: ${props => props.height ? props.height : '50px'};
    width: ${props => props.width ? props.width : '50px'};
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid  ${props=>props.bg_color ? props.bg_color : '#ffffff'};
    border-right: 3px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    
    @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } 

`
  
const Loader = (props) => {
    return(
        <Container width={props.width} height={props.height} bg_color={props.bg_color}/>
    )
}

export default Loader;