import {useState} from "react";
import toast from "react-hot-toast";
import * as FaIcons from "react-icons/fa"; // Importa todos os ícones FontAwesome
import * as MdIcons from "react-icons/md"; // Importa todos os ícones Material
import * as AiIcons from "react-icons/ai"; // Importa todos os ícones Ant Design
import { BoxItem, BoxLine, Btn, TextBtn, Icon} from "./style/style-global";
import { Toaster } from "react-hot-toast";


const IconList = () => {
  
  const [click,setClick] = useState('')
  
  const [copied, setCopied] = useState(false);
  const [clicled,setClicled] = useState([])
  const textToCopy = "Texto que será copiado!";

  const handleCopy = async (icon) => {
    try {
      await navigator.clipboard.writeText(icon);
      setCopied(true);
      toast.success(`${icon}, foi copiado com sucesso`,{style:{fontSize:'16px'}})
      setTimeout(() => setCopied(false), 2000); // Reseta o status após 2 segundos
    } catch (err) {
      alert.error("Erro ao copiar:", err);
    }
  };

  //const icons = { ...FaIcons, ...MdIcons, ...AiIcons }; // Mescla todas as bibliotecas
  //const iconEntries = Object.entries(icons); // Converte em um array para mapear
  const iconsFontAwesome = Object.entries(FaIcons);
  const iconsMaterial = Object.entries(MdIcons);
  const iconsAntDesign = Object.entries(AiIcons);

  return (
    <BoxLine direction='column' bg_color='#1111'>
      <BoxItem direction='column' justify='start' >
        <BoxItem height='5%'>
            <Btn height='32px' bg_color={click === 'FontAwesome' ? '#d6d5d5' : 'white'} onClick={() => {setClicled(iconsFontAwesome), setClick('FontAwesome') }}  > <TextBtn color='black' size='16px'> Font Awesome </TextBtn> </Btn>
            <Btn height='32px'  margin='0px 16px' bg_color={click === 'Material' ? '#d6d5d5' : 'white'} onClick={() => {setClicled(iconsMaterial), setClick('Material') }} > <TextBtn color='black' size='16px'> Material Icons </TextBtn> </Btn>
            <Btn height='32px'  bg_color={click === 'Ant' ? '#d6d5d5' : 'white'} onClick={() => {setClicled(iconsAntDesign), setClick('Ant') }} > <TextBtn color='black' size='16px'> Ant Design </TextBtn> </Btn>
        </BoxItem>
        <BoxItem over_y='auto'  wrap='wrap'  >
            {clicled.map(([name,Icon]) => (
              <Btn key={name} margin='8px' height='100px' width='100px' direction='column' onClick={()=>handleCopy(name)} overflow='hidden' > 
                <Icon size={32} color='black' />
              <TextBtn color='black' size='10px' >{name}</TextBtn>ß
            </Btn>
          )
            )}
         </BoxItem>
      </BoxItem>
      <Toaster/>
    </BoxLine>
  );
};

export default IconList;

/*
{iconEntries.map(([name, Icon]) => (
        <BoxItem key={name} direction='column'>
           <Btn margin='8px' height='64px' width='64px' > 
           <Icon size={32} />
           <TextBtn style={{ fontSize: "12px", wordBreak: "break-word" }}>{name}</TextBtn>
         </Btn>
        </BoxItem>
      ))} 

*/