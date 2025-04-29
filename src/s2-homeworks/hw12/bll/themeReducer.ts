const initState: StateType = {
    themeId: 1,
}

export type StateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: changeThemeActionType): StateType => { // fix any

    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export type changeThemeActionType = {
    type: string
    id: number
}

export const changeThemeId = (id: number): changeThemeActionType => ({ type: 'SET_THEME_ID', id }) // fix any
