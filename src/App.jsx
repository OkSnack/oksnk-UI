
import {BoxLine,SubTitle,Title,BreakLine, BoxItem, Btn, TextBtn} from './style/style-global'
import color from './style/colors'
import './pages/Desc'
function App() {
  return (
    <>
      <BoxLine bg_color={color.gray2} height='100vh' width='100vw' direction='column'>
          <SubTitle size='25px' color={color.white} weight='bold'> Teste de projeto</SubTitle>
         <BoxItem height='60px'>
          <Title size='55px' color={color.success} weight='bold'> Ok Snack UI</Title>
         </BoxItem>
         <BoxItem height='50px' margin='10px 0px'>
          <Btn width='20% - 16px' hoverBg={color.success} onClick={() => {}}> 
            <TextBtn color={color.black} hoverColor={color.white} >  Ver mais </TextBtn>
          </Btn>
         </BoxItem>
       
        
      </BoxLine>
    </>
  )
}

export default App
