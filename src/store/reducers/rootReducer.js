import appReducer from "./appReducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// setup san localstorage trong trinh duyet
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import musicReducer from "./musicReducer";
const commonConfig = {
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const musicConfig = {
  ...commonConfig,
  key: "music",
  // whilelist là những thèn mình muốn lưu trong loacal
  whilelist: ["curSongId"],
};
const rootReducer = combineReducers({
  app: appReducer,
  music: persistReducer(musicConfig, musicReducer),
});

export default rootReducer;
