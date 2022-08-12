import React, {useEffect, useRef, useState} from "react";
import './Worksheet.css';
import { UploadImage } from "../UploadImage/UploadImage";
import { EffectLevel } from "../EffectLevel/EffectLevel";
import { Menu } from '../Menu/Menu';
import {effects, sizeInterpolation, sizeNeighborhood} from "../../constants/effects";
import {loadImage} from "../../services/loadImage";
import {getImageEffect} from "../../services/effects/getImageEffect";
import {DoubleValueEffect} from "../DoubleValueEffect/DoubleValueEffect";
import {isObject} from "../../services/isObject";

export const Worksheet = () => {
    const inputImageCanvasRef = useRef();
    const outputImageCanvasRef = useRef();
    const [selectedEffect, setSelectedEffect] = useState(null);
    const [effectLevel, setEffectLevel] = useState(null);
    const [doubleValueEffectLevel, setDoubleValueEffectLevel] = useState({ scaleX: 0, scaleY: 0});
    const isDoubleValueEffectActive = [sizeNeighborhood, sizeInterpolation].includes(selectedEffect);

    const handleEffectSelect = (event) => {
        setSelectedEffect(event.target.value);
    };

    const handleUploadImage = (event) => {
        const canvas = inputImageCanvasRef.current;
        loadImage(canvas, event.target.files[0]);

        setSelectedEffect('');
        setEffectLevel(0);
        setDoubleValueEffectLevel({ scaleX: 0, scaleY: 0 });
    };

    const handlePerformAction = () => {
        const canvas = inputImageCanvasRef.current;
        const imageEffect = getImageEffect(selectedEffect);
        const resultEffectLevel = isDoubleValueEffectActive ? doubleValueEffectLevel : parseFloat(effectLevel);

        const {
            resultImageData,
            ...options
        } = imageEffect(canvas, resultEffectLevel);

        putOutputImage(resultImageData, options);
    };

    const putOutputImage = async (imageData, options) => {
        const canvas = outputImageCanvasRef.current;
        const context = canvas.getContext('2d');

        const res = await createImageBitmap(imageData);

        const width = options.width;
        const height = options.height;
        canvas.width = width;
        canvas.height = height;

        context.clearRect(0,0, width, height);
        context.drawImage(res, 0,  0, width, height);
    };

    const handleEffectLevelChange = (value) => {
        const isSingleEffectLevelValue = !!value.target;

        if (isSingleEffectLevelValue) {
            setEffectLevel(value.target.value);
        } else {
            setDoubleValueEffectLevel(value);
        }

    }

    useEffect(() => {
        setEffectLevel(0);
        setDoubleValueEffectLevel({ scaleX: 0, scaleY: 0});
    }, [selectedEffect])

    return (
        <div>
            <Menu value={selectedEffect} items={effects} onSelect={handleEffectSelect}/>

            <div className="worksheet">
                <canvas id="inputImageCanvas" className="inputImage" ref={inputImageCanvasRef} />
                <button className="actionButton" onClick={handlePerformAction}>Wykonaj</button>
                <canvas id="outputImageCanvas" className="outputImage" ref={outputImageCanvasRef}/>
            </div>

            <div className="controlPanel">
                <UploadImage onUpload={handleUploadImage} />
                {!isDoubleValueEffectActive && <EffectLevel value={effectLevel} onChange={handleEffectLevelChange}/>}
                {isDoubleValueEffectActive && <DoubleValueEffect onChange={handleEffectLevelChange} value={doubleValueEffectLevel}/>}
            </div>
        </div>



    )
};