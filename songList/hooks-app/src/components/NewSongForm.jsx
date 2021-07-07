import React, { useState, useEffect } from 'react';

const NewSongForm = ({addSong}) => {
    const[title, setTitle] = useState("")

    const onFormChange = (e)=>{
        setTitle( e.target.value)

    }

    const onFormSubmit = (e)=>{
        e.preventDefault()
        addSong(title)
        setTitle("")
    }


    return ( 
        <div>
            <form onSubmit={onFormSubmit}>
                <label htmlFor="songs">Song Name: </label>
                <input
                onChange={onFormChange}

                type="text"
                placeholder="Type here"
                id="songs"
                value={title}
                required
                 />
                 <button type="submit">
                     submit
                 </button>
            </form>

        </div>
     );
}
 
export default NewSongForm;
