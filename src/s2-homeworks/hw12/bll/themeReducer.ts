const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeId): { themeId: number } => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeId => ({ type: 'SET_THEME_ID', id }) // fix any


type ChangeThemeId = {
    type: 'SET_THEME_ID'
    id: number
}