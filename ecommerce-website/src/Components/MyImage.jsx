import React, { useState } from "react";

const MyImage = ({imgs}) =>{
    const[newImage, setNewImage] = useState(imgs[0].url)
      
    
    return(
        <>
        <div className="img-container"  >
        <div className="img-coulumn">
        {imgs.map((curElem, id)=>{
        return (
           <>
           <br/>
            <img src={curElem.url}   onClick={  (()=> setNewImage(imgs[id].url))        }/>
           </>
        ) 
        })}
        </div>
         

        <div className="screen-img">
            <img src={newImage}/>
        </div>
        </div>
        </>
    )
}
export default MyImage;