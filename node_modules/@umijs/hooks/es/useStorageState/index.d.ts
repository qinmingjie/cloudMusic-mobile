export interface IFuncUpdater<T> {
    (previousState?: T): T;
}
export declare type StorageStateDefaultValue<T> = T | IFuncUpdater<T>;
export declare type StorageStateResult<T> = [T | undefined, (value: StorageStateDefaultValue<T>) => void];
declare function useStorageState<T>(storage: Storage, key: string, defaultValue?: StorageStateDefaultValue<T>): StorageStateResult<T>;
export default useStorageState;
