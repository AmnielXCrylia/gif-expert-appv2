import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const addCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }


    return (
        <>

            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={event => addCategory(event)}
            />
            <button onClick={addCategory} >Agregar</button>
            
            {
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
            }

        </>
    )
}
