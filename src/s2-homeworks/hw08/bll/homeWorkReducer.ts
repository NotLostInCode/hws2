import {UserType} from '../HW8'


type ActionType = { type: 'sort'; payload: 'up' | 'down' } | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    console.log(action)
    switch (action.type) {
        case 'sort': { // by name
            let copyState = [...state].sort((a, b) => a.name > b.name ? 1 : -1)
            copyState = action.payload === 'up' ? copyState : copyState.reverse()

            return copyState
        }
        case 'check': {
            return state.filter((adults) => adults.age >= 18)
        }
        default:
            return state
    }
}
