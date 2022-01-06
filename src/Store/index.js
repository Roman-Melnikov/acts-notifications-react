import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { numberAct_52_constantReducer } from "./NumberAct_52_constant/reducer";
import { actList_52_Reducer } from "./ActList_52";
import { parametrsFlightsReducer } from "./ParametrsFlights/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  numberAct_52_constant: numberAct_52_constantReducer,
  actList_52: actList_52_Reducer,
  parametrsFlights: parametrsFlightsReducer, 
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
