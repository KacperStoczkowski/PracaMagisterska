import {
    brightness as brightnessType,
    contrast as contrastType,
    exposure as exposureType,
    gamma as gammaType,
    negative as negativeType,
    sepia as sepiaType,
    sizeInterpolation as sizeInterpolationType,
    sizeNeighborhood as sizeNeighborhoodType
} from "../../constants/effects";

import { brightness } from "./brightness/brightness";
import { contrast } from "./contrast/contrast";
import { exposure } from "./exposure/exposure";
import { gamma } from "./gamma/gamma";
import { negative } from "./negative/negative";
import { sepia } from "./sepia/sepia";
import { sizeInterpolation } from "./sizeInterpolation/sizeInterpolation";
import { sizeNeighborhood } from "./sizeNeighborhood/sizeNeighborhood";

export const getImageEffect = (type) => {
    switch (type) {
        case brightnessType:
            return brightness;
        case contrastType:
            return contrast;
        case exposureType:
            return exposure;
        case gammaType:
            return gamma;
        case negativeType:
            return negative;
        case sepiaType:
            return sepia;
        case sizeInterpolationType:
            return sizeInterpolation;
        case sizeNeighborhoodType:
            return sizeNeighborhood;
        default:
            return null;
    }
};