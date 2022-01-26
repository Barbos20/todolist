const initialState: initialStateType = {
  status: 'idle',
  error: null,
};

export const appReducer = (
  state: initialStateType = initialState,
  action: ActionsType
): initialStateType => {
  switch (action.type) {
    case 'APP/SET-STATUS':
      return { ...state, status: action.status };
    case 'APP/SET-ERROR':
      return { ...state, error: action.error };
    default:
      return { ...state };
  }
};

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';
export type initialStateType = {
  status: RequestStatusType;
  error: string | null;
};

export const setErrorAC = (error: string | null) =>
  ({ type: 'APP/SET-ERROR', error } as const);
export const setStatusAC = (status: RequestStatusType) =>
  ({ type: 'APP/SET-STATUS', status } as const);

export type SetErrorActionType = ReturnType<typeof setErrorAC>;
export type SetStatusActionType = ReturnType<typeof setStatusAC>;
type ActionsType = SetErrorActionType | SetStatusActionType;
