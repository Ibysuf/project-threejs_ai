import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './Ushirt_logo.png',
    fullDecal: './Ushirt_logo.png'
});

export default state;