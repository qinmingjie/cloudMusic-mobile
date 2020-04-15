import { MutableRefObject } from 'react';
interface IRect {
    top: number;
    left: number;
    bottom: number;
    right: number;
    height: number;
    width: number;
}
export interface IState extends IRect {
    text: string;
}
declare type TDom = HTMLElement | Document;
declare type Arg = TDom | (() => TDom) | null;
/**
 * 获取用户选取的文本或当前光标插入的位置
 * */
declare function useTextSelection<T extends TDom = TDom>(): [IState, MutableRefObject<T>];
declare function useTextSelection<T extends TDom = TDom>(arg: Arg): [IState];
export default useTextSelection;
