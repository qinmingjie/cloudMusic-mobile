interface StableActions<K> {
    add: (key: K) => void;
    remove: (key: K) => void;
    reset: () => void;
}
interface Actions<K> extends StableActions<K> {
    has: (key: K) => boolean;
}
declare function useSet<K>(initialValue?: Iterable<K>): [Set<K>, Actions<K>];
export default useSet;
