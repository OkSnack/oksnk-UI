import React, { useState } from 'react';
import { Input } from './style-global';
import './checkbox.css'; // Importando o arquivo de estilos CSS

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className='main'>
      <label className={isChecked ? 'checkbox-label checked' : 'checkbox-label'}>
        <Input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </label>
    </div>
  );
}

export default Checkbox;