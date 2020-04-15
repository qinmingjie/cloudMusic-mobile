export interface Options {
    min?: number;
    max?: number;
}
export interface Actions {
    inc: (delta?: number) => void;
    dec: (delta?: number) => void;
    set: (value: number | ((c: number) => number)) => void;
    reset: () => void;
}
declare function useCounter(initialValue?: number, options?: Options): [number, Actions];
export default useCounter;
