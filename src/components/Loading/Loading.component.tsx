/// <reference types="vite-plugin-svgr/client" />

import { ReactComponent as LoadingIcon } from '../../assets/images/loading.svg';
import { LoadingComponent } from './Loading.styles';

export function Loading() {
    return (
        <LoadingComponent>
            <LoadingIcon />
        </LoadingComponent>
    )
}