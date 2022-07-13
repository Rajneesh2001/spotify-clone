import React,{createContext,useReducer,useContext} from "react";

export const context=createContext();

export const DataLayer=({initialState,reducer,children})=>(
    <context.Provider value={useReducer(reducer,initialState)}>
        {children}
    </context.Provider>
);

export const useDataLayer=
()=>useContext(context)