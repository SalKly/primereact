import * as React from 'react';
import { useComponentPT } from './useComponentPT';
import { useComponentStyle } from './useComponentStyle';

export const useComponent = ({ props, attrs, state, style }: any = {}, ref?: any) => {
    const ptx = useComponentPT({ props, attrs, state }, ref);
    const stx = useComponentStyle({ props, attrs, state, style }, ref);
    const instance = {
        ref,
        name: props.__TYPE,
        props,
        attrs,
        state,
        style,
        parent: {}, // @todo
        ...ptx,
        ...stx
    };

    React.useImperativeHandle(ref, () => instance);

    return instance;
};
