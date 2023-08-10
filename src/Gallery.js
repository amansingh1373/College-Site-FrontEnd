import { useEffect, useState } from "react";

const Gallery = () => {

    const [id,setId] = useState(0);

    const MyCollection = [
        {
            id:0,
            path:"./images/college_campus.jpg",
            display:"block"
        },
        {
            id:1,
            path:"./images/workingperson.jpg",
            display:"none"
        },
        {
            id:2,
            path:"./images/football-ground.jpg",
            display:"none"
        },
        {
            id:3,
            path:"./images/sportsteam2.jpg",
            display:"none"
        }
    ];

    const goBack = () =>{
        if(id != 0){
            var temp = id;
            temp--;
            setId(temp);
            console.log("back");
            console.log(id);
        }
    };

    const goForward = () => {
        if(id != MyCollection.length - 1){
            var temp = id;
            temp++;
            setId(temp);
            console.log("forward");
            console.log(id);
        }
    };

    useEffect(() =>{
        console.log("hello");
    },[id]);

    return ( 
        <div className="gallery-container">
            <div className="image-slider-container">
                <div className="img-container">
                    <img className="img"  src={ require(`${MyCollection[id].path}`)}/>
                </div>
                <div className="button-container f-position">
                    <button className="front" onClick={goBack}><i className="fa-solid fa-circle-arrow-left"></i></button>
                </div>
                <div className="button-container r-position">
                    <button className="back" onClick={goForward}><i className="fa-solid fa-circle-arrow-right"></i></button>
                </div>
            </div>
        </div>
     );
}
 
export default Gallery;