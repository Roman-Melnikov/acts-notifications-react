import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { actList_52_Reducer } from "./ActList_52";
import { parametrsFlightsReducer } from "./ParametrsFlights/reducer";
import { actList_51_defectiveReducer } from "./ActList_51_defective";
import { monitoringDispatchListReducer } from "./MonitoringDispatchList";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  actList_52: actList_52_Reducer,
  actList_51_defective: actList_51_defectiveReducer,
  parametrsFlights: parametrsFlightsReducer, 
  monitoringDispatch: monitoringDispatchListReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
