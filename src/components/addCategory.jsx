import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [ valueInput, setValueInput ] = useState('');
    

    const onInputChange = ({ target }) => {
        setValueInput( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( valueInput.trim().length <= 1) return;
        onNewCategory( valueInput.trim());
        setValueInput('')
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar Gifs" 
                value = { valueInput }
                onChange={ onInputChange } 
            />
          </form>
    )
      
       
}

