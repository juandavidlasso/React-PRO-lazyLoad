import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element

interface RouteProps {
    to: string
    path: string
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
    name: string
}


// LazyLoad
// Los comentarios es para cambiar el nombre de los chunk
const lazyLayout = lazy( () => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout') )

export const routes:RouteProps[] = [
    { to: '/lazylayout', path: '/lazylayout/*', Component: lazyLayout, name: 'LazyLayout' },
    { to: '/lazy2', path: 'lazy2', Component: NoLazy, name: 'No Lazy' }
]