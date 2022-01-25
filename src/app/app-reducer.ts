const initialState : initialStateType = {
   status: 'idle',
   error: 'some error'
}

export const appReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
   switch (action.type) {
       case 'APP/SET-STATUS':
           return {...state, status: action.status}
           case 'APP/SET-ERROR':
               return{...state, error:action.error}
       default:
           return {...state}
   }
}

export type RequetStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type initialStateType = {
        status: RequetStatusType,
        error: string|null
    }

export const setErrorAC = (error: string|null)=>({type:'APP/SET-ERROR', error}as const)
export const setStatusAC = (status: RequetStatusType)=>({type:'APP/SET-STATUS', status} as const)

type ActionsType =
| ReturnType<typeof setStatusAC>
| ReturnType<typeof setErrorAC> 