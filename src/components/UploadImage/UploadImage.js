import React from "react";
import './UploadImage.css';

export const UploadImage = ({ onUpload }) => {

    return (
        <div>
            <input className="addImage" type="file" onChange={onUpload}></input>
        </div>
    )
};