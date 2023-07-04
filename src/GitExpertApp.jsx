import { useState } from "react";
import  { AddCategory, GifGrid }  from "./components/index";


const GitExpertApp = () => {

  const [categories, setCategories] = useState([ 'Samurai X']);
  
  const onAddCategory = (newCategory) => {
    if( categories.includes( newCategory )) return;
    setCategories([ newCategory, ...categories]);
  }

  return (
    <>
        <h1>GitExpertApp</h1>
        <AddCategory 
            //   setCategories={ setCategories }
            onNewCategory={ (value) => onAddCategory(value) }
        />
        { 
            categories.map(category => (
                <GifGrid key={ category}
                category={ category } />
            ))
        }    
    </>
  );
};

export default GitExpertApp;
