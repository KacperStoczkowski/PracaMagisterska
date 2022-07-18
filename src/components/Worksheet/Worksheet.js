import React, {useEffect, useRef, useState} from "react";
import './Worksheet.css';
import { UploadImage } from "../UploadImage/UploadImage";
import { EffectLevel } from "../EffectLevel/EffectLevel";
import { Menu } from '../Menu/Menu';
import { effects} from "../../constants/effects";
import {loadImage} from "../../services/loadImage";
import {getImageEffect} from "../../services/effects/getImageEffect";

export const Worksheet = () => {
    const inputImageCanvasRef = useRef();
    const outputImageCanvasRef = useRef();
    const [selectedEffect, setSelectedEffect] = useState(null);
    const [effectLevel, setEffectLevel] = useState(null);

    const handleEffectSelect = (event) => {
        setSelectedEffect(event.target.value);
    };

    const handleUploadImage = (event) => {
        const canvas = inputImageCanvasRef.current;
        loadImage(canvas, event.target.files[0]);

        setSelectedEffect('');
        setEffectLevel(0);
    };

    const handlePerformAction = () => {
        const canvas = inputImageCanvasRef.current;
        const imageEffect = getImageEffect(selectedEffect);

        const resultImage = imageEffect(canvas, parseInt(effectLevel, 10));

        putOutputImage(resultImage);
    };

    const putOutputImage = async (imageData) => {
        const canvas = outputImageCanvasRef.current;
        const context = canvas.getContext('2d');

        const res = await createImageBitmap(imageData);
        context.clearRect(0,0, canvas.width, canvas.height);
        context.drawImage(res, 0,  0, canvas.width, canvas.height);
    };

    const handleEffectLevelChange = (event) => {
        setEffectLevel(event.target.value);
    }

    useEffect(() => {
        setEffectLevel(0);
    }, [selectedEffect])

    return (
        <div>
            <Menu value={selectedEffect} items={effects} onSelect={handleEffectSelect}/>

            <div className="worksheet">
                <canvas id="inputImageCanvas" className="inputImage" ref={inputImageCanvasRef} />
                <button className="actionButton" onClick={handlePerformAction}>-></button>
                <canvas id="outputImageCanvas" className="outputImage" ref={outputImageCanvasRef}/>
            </div>

            <div className="controlPanel">
                <UploadImage onUpload={handleUploadImage} />
                <EffectLevel value={effectLevel} onChange={handleEffectLevelChange} />
            </div>
        </div>



    )
};