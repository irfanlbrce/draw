import { Tool, Color } from '../models';

const textDefaults: fabric.ITextOptions = {
    fontSize: 11,
    fontFamily: 'Segoe MDL2 Assets'
};

export const Icon: Tool = {
    id: 'tool__icon',
    name: 'Draw Icon',
    icon: 'CirclePlus'
};

export const drawIcon = (options: fabric.ITextOptions): fabric.IText => {
    return new fabric.Text('U+EB9F', {
        ...textDefaults,
        ...options
    });
};