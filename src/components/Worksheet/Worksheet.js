import React from "react";
import './Worksheet.css';
import { UploadImage } from "../UploadImage/UploadImage";
import { EffectLevel } from "../EffectLevel/EffectLevel";
import { Menu } from '../Menu/Menu';

export const Worksheet = () => {

    const handleUploadImage = (event) => {
        const canvas = document.getElementById('imageCanvas');
        const ctx = canvas.getContext('2d');

        const reader = new FileReader();
        reader.onload = function(e){
            const img = new Image();
            img.onload = function(){
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img,0,0);
            }
            img.src = e.target.result;
        }
        reader.readAsDataURL(event.target.files[0]);
    };

    return (
        <div>
            <Menu />

            <div className="worksheet">
                <canvas id="imageCanvas" className="inputImage"></canvas>
                <div className="outputImage" />
            </div>

            <div className="controlPanel">
                <UploadImage onUpload={handleUploadImage} />
                <EffectLevel />
            </div>
        </div>



    )
};