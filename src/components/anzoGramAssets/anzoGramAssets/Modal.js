import React from "react";
const Modal = ({selectedImg,setSelectedImg}) => {

    const handelClick = (e) => {
        
        if(e.target.classList.contains("backdrop")){
            setSelectedImg(null)
        }
    }

    return <div className="backdrop"  onClick={handelClick} >
        <img src={selectedImg} alt="enlarged pic tetst"/>
    </div>
}

export default Modal