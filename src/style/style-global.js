import styled from 'styled-components';
import color from './colors';

export const ContainerPage = styled.div`
    position: ${props=>props.position ? props.position : 'relative'};  
    display: flex;
    margin: 0px;
    padding: 0px;
    height: ${props => props.height ? props.height : '100vh'};
    width: 100vw;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(${props => props.img});
    background-position:center;
    background-size: cover;
    background-color: ${props => props.bg_color ? props.bg_color : color.white2};
`
export const Container = styled.div.attrs({
    className: 'container'
})`
  margin-top: 10vh;
  min-height: 90vh; /* Ocupa no mínimo 80% da altura da viewport */
  display: flex;
  margin:${props => props.margin} ;
  background-color: ${props=>props.bg_color};
  justify-content: ${props=> props.justify ? props.justify : 'center'};
  align-items: ${props => props.align ? props.align : 'center'};
`
export const BoxLine = styled.div`
    max-height: ${props=> props.max_height};
    min-height: ${props=> props.min_height};
    min-width: ${props=> props.min_width};
    max-width: ${props=> props.min_width};
    overflow:${props => props.overflow} ;
    overflow-x: ${props=>props.over_x};
    overflow-y: ${props=>props.over_y};
    border: ${props => props.border};
    flex: ${props => props.flex};
    display: ${props=> props.display ? props.display : 'flex' };
    grid-template-rows:${props => props.row};
    grid-template-columns:${props => props.col};
    grid-template-areas:${props => props.area};
    margin:${props => props.margin} ;
    position: ${props => props.position};
    flex-direction: ${props => props.direction};   
    background-color: ${props=>props.bg_color};
    background-image: url(${props => props.bkgImg});
    background-position: ${props => props.bkgPosition};
    background-size: ${props => props.bkgSize};
    background-repeat: ${props => props.bkgRepeat};
    justify-content: ${props=> props.justify ? props.justify : 'center'};
    align-items: ${props => props.align ? props.align : 'center'};
    border-radius: ${props => props.radius};
    height: ${props => props.height ? props.height : '100%'};
    width: ${props => props.width ? props.width : '100%'};
    background-color: ${props => props.bg_color};
    position: ${props=>props.position};
    left: ${props => props.left};
    right: ${props => props.right};
    top: ${props => props.top};
    bottom: ${props => props.botton};
    flex-wrap: ${props=> props.wrap};
    padding: ${props=> props.padding};
    box-shadow: ${props => props.boxShadow};
    visibility:${props=> props.visibility};
    animation:${props => props.animation};
    transform: ${props=> props.transform};
    transition: ${props => props.transition ? props.transition : `all 600ms`};
    border:${props => props.border};

    @media screen and (max-width: 800px) {
    height: ${props => props.heightMobile};
    width: ${props => props.widthMobile};
    }

`
export const BoxItem = styled.div`
    max-height: ${props=> props.max_height};
    min-height: ${props=> props.min_height};
    min-width: ${props=> props.min_width};
    max-width: ${props=> props.min_width};
    display: ${props=> props.display ? props.display : 'flex' };
    grid-area: ${props=>props.area};
    overflow: ${props=> props.overflow};
    overflow-x: ${props=>props.over_x};
    overflow-y: ${props=>props.over_y};
    border-radius: ${props => props.radius};
    flex: ${props => props.flex};
    margin: ${props=> props.margin ? props.margin : '0px' };
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.justify ? props.justify : 'center'};
    align-items: ${props => props.align ? props.align : 'center' };
    height: ${props => props.height ? props.height : '100%'};
    width: ${props => props.width ? props.width : '100%'};
    background-color: ${props => props.bg_color};
    border-right: ${props=> props.borderRight};
    position: ${props=>props.position};
    left: ${props => props.left};
    right: ${props => props.right};
    top: ${props => props.top};
    bottom: ${props => props.botton};
    flex-wrap: ${props=> props.wrap};
    flex-shrink: ${props => props.shrink};
    box-shadow: ${props => props.boxShadow};
    opacity: ${props => props.opacity};
    backface-visibility:${props => props.bg_opacity};
    visibility:${props=> props.visibility};
    animation: ${props => props.animate };
    transform: ${props=> props.transform};
    border:${props => props.border};
    border-right:${props => props.borderRight};
    border-left:${props => props.borderLeft};
    border-top:${props => props.borderTop};
    border-bottom:${props => props.borderBottom};
    transition: ${props => props.transition ? props.transition : `all 600ms`};

    #value::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }
    #value{ 
        -moz-appearance: textfield;
        appearance: textfield;
    }
    #imgProduct {
        display: none;
    }
`

export const TextInput = styled.h3`
     margin: ${props=>props.margin ? props.margin : '0px'};
     font-size: ${props=> props.size ? props.size : 'clamp(1em, 1em + 1vw, 1.75em)'};
     white-space:${props=> props.space ? props.space : 'nowrap'} ;
     color:${props=> props.color ? props.color : color.black };
     font-weight: ${props=> props.weight ? props.weight : '400'} ;
     text-shadow: ${props=>props.shadow};
`

export const Input = styled.input`
    outline: none;
    text-align: center;
    border: 2px solid ${props => props.border ? props.border :'transparent'};
    display: ${props=> props.display ? props.display : 'flex' };
    padding: ${props=>props.padding ? props.padding : '2%'};
    border-radius: 10px;
    width: ${props=> props.width ? props.width : '30%'} ;
    height:${props=> props.height ? props.height : '30%'} ;
    font-size: ${props=>props.size ? props.size : '16px'};
    background-color: ${color.white};
    caret-color: ${color.blgray};
    box-shadow: ${color.boxShadow};
    position: ${props=>props.position};
    left: ${props => props.left};
    right: ${props => props.right};
    top: ${props => props.top};
    bottom: ${props => props.botton};
    margin: ${props => props.margin};
    text-align: ${props => props.txt_align};
    border:  ${props => props.border};
    appearance: none;
    
    &::placeholder{
        font-size: ${props=>props.size ? props.size : '16px'};
        text-align: ${props=>props.align_holder ? props.align_holder : 'center'};
        color: ${color.placeholder};
    }

`
export const Btn = styled.button`
    justify-content: ${props=> props.justify ? props.justify : 'center'};
    align-items: ${props => props.align ? props.align : 'center'};
    display: ${props=> props.display ? props.display : 'flex' };
    border: none;
    flex: ${props=> props.flex};
    color:${props => props.color };
    margin:${props => props.margin} ;
    border-radius: ${props => props.radius ? props.radius : color.radius};
    box-shadow: ${props => props.box_shadow ? props.box_shadow : color.boxShadow };
    height: ${props => props.height};
    min-width:${props => props.minWidth};
    width: ${props => props.width};
    padding: ${props => props.padding};
    background-color: ${ props => props.bg_color ? props.bg_color : color.white};
    position: ${props=>props.position};
    left: ${props => props.left};
    right: ${props => props.right};
    top: ${props => props.top};
    bottom: ${props => props.botton};
    white-space: ${props => props.whiteSpace};
    word-wrap: ${props => props.wordWrap};
    opacity: ${props => props.opacity};
    flex-shrink: ${props => props.shrink};
    padding: ${props=> props.padding};
    text-overflow: ${props=> props.textOverflow} ;
    animation: ${props => props.animate};
    transition: ${props => props.transition ? props.transition : `all 600ms`};
    max-height: ${props=> props.max_height};
    min-height: ${props=> props.min_height};
    min-width: ${props=> props.min_width};
    max-width: ${props=> props.min_width};
    flex-direction: ${props => props.direction};
    overflow: ${props=> props.overflow};
    overflow-x: ${props=>props.over_x};
    overflow-y: ${props=>props.over_y};
    
    &&:hover{
        transition: all 650ms ;
        cursor: ${props => props.cursor ? props.cursor : "pointer"};
        background-color:${props => props.hoverBg};
        color:${props=>props.hoverColor};
        opacity: ${props=> props.hoverOpacity};
    }
`

export const TextBtn = styled.h6`
    display: ${props=> props.display };
    width: ${props => props.width};
    height: ${props => props.height};
    margin:${props => props.margin};
    padding: ${props => props.padding};
    color: ${props => props.color};
    opacity: ${props=> props.opacity};
    text-align: ${props => props.align};
    font-weight: ${props=> props.weight ? props.weight : '400'};
    font-size: ${props=> props.size ? props.size : '12px'};
    text-overflow: ${props => props.text_overflow  ? props.text_overflow  : 'ellipsis'};
    overflow: ${props => props.overflow  ? props.overflow  : 'hidden'};
    transition: all 1s;
    margin: 0px;

    &&:hover{
        transition: all 550ms;
        opacity: ${props => props.hover};
        color:${props=>props.hoverColor};
        scale: ${props => props.hoverScale };
    }
`
export const BtnPass = styled.button`
  height: 30px;
  width: 35px;
  border-radius: 5px;
  position: absolute;
  right: 36px;
  border: none;
  box-shadow: ${color.boxShadow};
`;

export const Title = styled.h1`
    text-align: ${props=> props.align || props.text_align};
    margin: ${props=>props.margin ? props.margin : '0px'};
    font-size: ${props=> props.size ? props.size : '20px'};
     white-space:${props=> props.space ? props.space : 'nowrap'} ;
     color:${props=> props.color ? props.color : color.black };
     font-weight:${props=> props.weight ? props.weight : '600'} ;
     text-shadow: ${props=>props.shadow ? props.shadow : 'none'};
     &&:hover{
        transition: all 600ms;
        color:${props => props.hover }
     }
`
export const SubTitle = styled.h3`
    text-align: ${props=> props.align || props.text_align};
    margin: ${props=>props.margin ? props.margin : '0px'};
    font-size: ${props=> props.size ? props.size : '16px'};
    color: ${props=> props.color ? props.color : color.black};
    font-weight: ${props=> props.weight ? props.weight : '400'} ;
    display: flex;
    justify-content: ${props=> props.justify ? props.justify : 'center'};
    &&:hover{
        transition: all 1s;
        color: ${props => props.hoverColor};
        opacity: 0.75;
    }
`
export const LinkText = styled.a`
    display: ${props=>props.display};
    ${props => props.displaySett && `display: ${props.displaySett};`}
    text-decoration: none;
    font-weight: ${props=> props.weight ? props.weight : '400'} ;
    color: ${props => props.color_type || props.color ? props.color : color.primary};
    font-size:${props => props.font_size ? props.font_size : '16px'};
    margin:${props => props.margin};
    text-align: ${props => props.align};
    padding: ${props => props.padding};
    cursor: pointer;
    &&:active{
        text-decoration: none;
    }
    @media screen and (max-width:700px) {
        font-size: 1.55rem;
    }
    &&:hover{
        transition: all 1s;
        color: ${color.primary};
        opacity: 0.75;
    }
`
export const TxtArea = styled.textarea`
    outline: none;
    margin: 0px;
    border: 2px solid ${props => props.border ? props.border :'transparent'};
    padding: ${props=>props.padding ? props.padding : '2%'};
    border-radius: 5px;
    width: ${props=> props.width ? props.width : '30%'} ;
    height: ${props => props.height ? props.height : '85%'};
    font-size: ${props=>props.size ? props.size : '1.75rem'};
    font-weight: ${props=> props.weight ? props.weight : '400'} ;
    background-color: ${ props=> props.bg_color ? props.bg_color : color.white};
    caret-color: ${color.blgray};
    box-shadow: ${color.boxShadow};
    resize: none;
    &::placeholder{
        color: ${color.placeholder};
        text-align: center;
    }
`


export const Text = styled.h6`
 display: ${props=> props.display };
    width: ${props => props.width};
    height: ${props => props.height};
    margin:${props => props.margin};
    padding: ${props => props.padding};
    color: ${props => props.color};
    opacity: ${props=> props.opacity};
    text-align: ${props => props.align};
    font-weight: ${props=> props.weight ? props.weight : '400'};
    font-size: ${props=> props.size ? props.size : '12px'};
    transition: all 1s;
    margin: 0px;
    &&:hover{
        transition: all 550ms;
        opacity: ${props => props.hover};
        color:${props=>props.hoverColor};
        scale: ${props => props.hoverScale };
    }
`

// Estilo do container que comporta os cards
export const ContentCard = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que os itens "quebrem" para a próxima linha */
  gap: 16px; /* Espaçamento entre os itens */
  padding: ${props => props.padding ? props.padding : '8px'};
  max-height: 100%; /* Altura total do pai */
  overflow-y: auto; /* Habilita o scroll vertical */
  box-sizing: border-box;
  justify-content: ${props=> props.justify ? props.justify : 'center'};
  align-items: ${props => props.align ? props.align : 'center'};
  align-content: flex-start; /* Garante alinhamento adequado mesmo com rolagem */
  height: 100%;
`;

// Estilo do card com comportamento responsivo
export const Card = styled.div`
  flex: 1 1 calc(33% - 10px); /* Cada item ocupa 25% da largura */
  min-width: ${props => props.minW ? props.minW : '350px'}; 
  max-width: ${props => props.maxW ? props.maxxW : '350px'}; 
  height: 250px; 
  background-color: ${props => props.bg_color};
  color: white;
  padding: ${props => props.padding ? props.padding : '16px'};
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  display: ${props=>props.display};
  margin:${props => props.margin};

  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 10px); /* Em telas menores, cada item ocupa 50% */
  }

  @media (max-width: 480px) {
    flex: 1 1 100%; /* Em telas muito pequenas, os itens ocupam 100% */
  }
`;

export const Img = styled.img`
    height:${props=>props.height} ;
    width:${props=>props.width} ;
    opacity: ${props=>props.opacity};
    transition: all 1s;
    &:hover{
        opacity:${props=>props.opacityHover};
        transition: all 1s;
    }
`

export const Icon = styled.i`

`