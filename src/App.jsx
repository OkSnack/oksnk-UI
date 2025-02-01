
import {BoxLine,SubTitle,Title,BreakLine, BoxItem} from './style/style-global'
import color from './style/colors'

function App() {
  return (
    <>
      <BoxLine bg_color={color.gray2} height='100vh' width='100vw' direction='column'>
        <SubTitle size='25px' color={color.white} weight='bold'> Teste de projeto</SubTitle>
         <BoxItem height='60px'>
        <Title size='55px' color={color.success} weight='bold'> Ok Snack UI</Title>

         </BoxItem>
      </BoxLine>
    </>
  )
}

export default App
