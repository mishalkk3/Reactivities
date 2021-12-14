import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";

//store to store all stores :D
interface Store {
    activityStore: ActivityStore
}

export const store: Store = {
    activityStore: new ActivityStore()
}

export const StoreContext = createContext(store);

// react hook to use the stiore
export function useStore() {
    return useContext(StoreContext);
}

