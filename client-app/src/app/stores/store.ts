import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";
import CommonStore from "./commonStore";

//store to store all stores :D
interface Store {
    activityStore: ActivityStore;
    commonStore : CommonStore;
}

export const store: Store = {
    activityStore: new ActivityStore(),
    commonStore: new CommonStore()
}

export const StoreContext = createContext(store);

// react hook to use the stiore
export function useStore() {
    return useContext(StoreContext);
}

