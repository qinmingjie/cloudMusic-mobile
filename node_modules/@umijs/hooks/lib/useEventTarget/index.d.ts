interface ValueProps<T, U> {
    value: T | undefined;
    onChange: (e: EventTarget<U>) => any;
}
interface EventTarget<U> {
    target: {
        value: U;
    };
}
declare const _default: <T, U = T>(initialValue?: T | undefined, transformer?: ((value: U) => T) | undefined) => [ValueProps<T, U>, () => void];
export default _default;
