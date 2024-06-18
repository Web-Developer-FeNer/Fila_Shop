import { configureStore, combineReducers } from "@reduxjs/toolkit";
import goodsReducer from "./goodsSlice"
import { 
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
 } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

 
const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
    goods: goodsReducer,
    good: goodsReducer,
},)

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore ({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


export const persistor = persistStore(store)
export default store