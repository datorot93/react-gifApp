import React, { Fragment, useState } from 'react'
// import ReactDOM from 'react-dom'

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

    // const categories = ['One Punch', 'HxH', 'One Piece']
    const [categories, setCategories] = useState([]);

    // const handleAdd = () => {
    //     setCategories(cats => [...categories, 'Black Clover']);
    // }


    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            
            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={category} 
                            category={category} 
                        />
                    ))
                }
            </ol>
        </Fragment>
    )
}

export {
    GifExpertApp as default
}


