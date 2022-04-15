import React from 'react';
import { useContext } from 'react';

type InitialState = {
  BMap?: typeof BMap;
  map?: BMap.Map;
  container?: HTMLDivElement | null;
};

export const initialState: Partial<InitialState> = {
  map: undefined,
  BMap: undefined,
  container: undefined,
};

export const reducer = (state: InitialState, action: InitialState) => {
  return {
    ...state,
    ...action,
  };
};

export interface ContextState {
  state: Partial<InitialState>;
  dispatch: React.Dispatch<InitialState>;
}

export const Context = React.createContext<ContextState>({
  state: initialState,
  dispatch: () => null,
});

export function useMapContext() {
  const { state, dispatch } = useContext(Context);
  return { ...state, state, dispatch };
}
