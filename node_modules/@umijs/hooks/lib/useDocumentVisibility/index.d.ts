declare type VisibilityState = 'hidden' | 'visible' | 'prerender' | boolean;
declare function useDocumentVisibility(): VisibilityState;
export default useDocumentVisibility;
