export const brightness = 'brightness';
export const contrast = 'contrast';
export const exposure = 'exposure';
export const gamma = 'gamma';
export const negative = 'negative';
export const sepia = 'sepia';
export const sizeInterpolation = 'sizeInterpolation';
export const sizeNeighborhood = 'sizeNeighborhood';

export const effects = [
    {
        title: 'Zmiana jasności',
        type: brightness
    },
    {
        title: 'Zmiana kontrastu',
        type: contrast
    },
    {
        title: 'Zmiana ekspozycji',
        type: exposure
    },
    {
        title: 'Korekcja gamma',
        type: gamma
    },
    {
        title: 'Negatyw',
        type: negative
    },
    {
        title: 'Sepia',
        type: sepia
    },
    {
        title: 'Pow/Pomn sąsiedztwo',
        type: sizeInterpolation
    },
    {
        title: 'Pow/Pomn interpolacja',
        type: sizeNeighborhood
    },
];