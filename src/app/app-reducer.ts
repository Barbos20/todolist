type initialStateType = {
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string|null
}

const initialState : initialStateType = {
   status: 'idle',
   error: 'some errorr'
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

type ActionsType = any