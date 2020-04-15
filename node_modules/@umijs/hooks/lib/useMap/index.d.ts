interface StableActions<U, V> {
    set: (key: U, value: V) => void;
    setAll: (newMap: Iterable<readonly [U, V]>) => void;
    remove: (key: U) => void;
    reset: () => void;
}
interface Actions<U, V> extends StableActions<U, V> {
    get: (key: U) => V;
}
declare function useMap<K, T>(initialValue?: Iterable<readonly [K, T]>): [Map<K, T>, Actions<K, T>];
export default useMap;
