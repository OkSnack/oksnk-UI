import React from "react";
import { useNavigate } from "react-router-dom";
import IconList from "../Icons";
import { BoxItem, BoxLine, Btn, TextBtn, Title } from "../style/style-global";
import { MdChevronLeft } from "react-icons/md";

const IconPage = () => {
  const navigate = useNavigate();

  return (
    <BoxLine direction='column' bg_color='#fefefefe' height='100vh' width='100vw' >
      <BoxItem position='relative' height='10%'>
         <Btn position='absolute' left='10px' margin='16px' height='32px' width='75px' onClick={() => navigate("/")} direction='row' > 
            <MdChevronLeft color='black' size='16px' />
            <TextBtn color='black'>  Home</TextBtn>
        </Btn>
        <Title margin='8px 0px'>Todos os Ícones</Title>

      </BoxItem>
      <BoxItem height='90%' over_y='auto'>
        <IconList />
      </BoxItem>
      
      
    </BoxLine>
  );
};

export default IconPage;
