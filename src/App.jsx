
import {BoxLine,SubTitle,Title, BoxItem, Btn, TextBtn} from './style/style-global'
import { useNavigate } from "react-router-dom"
import color from './style/colors'
import './index.css'

function App() {
  const navigate = useNavigate();

  return (
    <>
      <BoxLine bg_color={color.main} height='100vh' width='100vw' direction='column'>
          <SubTitle size='25px' color={color.primary} weight='bold'> Teste de projeto</SubTitle>
         <BoxItem height='60px'>
          <Title size='55px' color={color.white} weight='bold'> Ok Snack UI</Title>
         </BoxItem>
         <BoxItem height='50px' margin='10px 0px'>
          <Btn min_width='140px' max_widht='15%x' height='32px' hoverBg={color.primary} onClick={() => navigate("/icons") }> 
            <TextBtn color={color.black} hoverColor={color.white} >  Ver mais </TextBtn>
          </Btn>
         </BoxItem>
      </BoxLine>
    </>
  )
}

export default App
