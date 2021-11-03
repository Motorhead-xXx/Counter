const initialState = {
    displayValue: 0,
    maxValue: "",
    minValue: "",
    error: false,
    setLocal: false,
    disabled: false,
}

type InitialStateType = {
    displayValue: number,
    maxValue: string | number,
    minValue: string | number,
    error: boolean,
    setLocal: boolean,
    disabled: boolean,
}

export const counterReducer = (state: InitialStateType = initialState, action: CounterType): InitialStateType => {
    switch (action.type) {
        case "CHANGE-STATE-DISPLAY": {
            return {...state, displayValue: +action.stateDisplayValue}
        }
        case "INC-COUNT": {
            return {...state, displayValue: state.displayValue + 1}
        }
        case "RESET-COUNT": {
            return {...state, displayValue: +state.minValue}
        }
        case "VALUE-MAX": {
            return {...state, maxValue: action.eventValue}
        }
        case "VALUE-MIN": {
            return {...state, minValue: action.eventValue}
        }
        case "CHANGE-ERROR": {
            return {...state, error: action.err}
        }
        case "CHANGE-SET-LOCAL": {
            return {...state, setLocal: action.changeLocal}
        }
        case "CHANGE-BUTTON-DISABLED": {
            return {...state, disabled: action.changeDisabled}
        }
        case "INC-MAX": {
            return {...state, maxValue: +state.maxValue + 1}
        }
        case "DECREASE-MIN": {
            return {...state, maxValue: +state.maxValue - 1}
        }
        case "MIN-INC": {
            return {...state, minValue: +state.minValue + 1}
        }
        case "MIN-DECREASE": {
            return {...state, minValue: +state.minValue - 1}
        }
    }
    return state
}

type CounterType = IncCounterType | ResetDisplayType | ValueMaxIncType |
    displayValueType | settingValueMaxType | settingValueMinType |
    changeErrorType | ChangeSetLocalType | ChangeButtonDisabledType | ValueMaxDecreaseType |
    minValueIncType | minValueDecreaseType

export type IncCounterType = ReturnType<typeof incCounterAC>
export const incCounterAC = () => {
    return {
        type: "INC-COUNT",
    } as const
}

export type ResetDisplayType = ReturnType<typeof resetDisplayAC>
export const resetDisplayAC = (minValue: number) => {
    return {
        type: "RESET-COUNT",
        minValue,
    } as const
}

export type displayValueType = ReturnType<typeof changeDisplayValueAC>
export const changeDisplayValueAC = (stateDisplayValue: string | number) => {
    return {
        type: "CHANGE-STATE-DISPLAY",
        stateDisplayValue,
    } as const
}

export type settingValueMaxType = ReturnType<typeof settingValueMaxAC>
export const settingValueMaxAC = (eventValue: string | number) => {
    return {
        type: "VALUE-MAX",
        eventValue,
    } as const
}

export type settingValueMinType = ReturnType<typeof settingValueMinAC>
export const settingValueMinAC = (eventValue: string | number) => {
    return {
        type: "VALUE-MIN",
        eventValue,
    } as const
}

export type changeErrorType = ReturnType<typeof changeErrorAC>
export const changeErrorAC = (err: boolean) => {
    return {
        type: "CHANGE-ERROR",
        err,
    } as const
}

export type ChangeSetLocalType = ReturnType<typeof changeSetLocalAC>
export const changeSetLocalAC = (changeLocal: boolean) => {
    return {
        type: "CHANGE-SET-LOCAL",
        changeLocal,
    } as const
}
export type ChangeButtonDisabledType = ReturnType<typeof changeButtonDisabledAC>
export const changeButtonDisabledAC = (changeDisabled: boolean) => {
    return {
        type: "CHANGE-BUTTON-DISABLED",
        changeDisabled,
    } as const
}

export type ValueMaxIncType = ReturnType<typeof valueMaxIncAC>
export const valueMaxIncAC = () => {
    return {
        type: "INC-MAX",
    } as const
}

export type ValueMaxDecreaseType = ReturnType<typeof valueMaxDecreaseAC>
export const valueMaxDecreaseAC = () => {
    return {
        type: "DECREASE-MIN",
    } as const
}

export type minValueIncType = ReturnType<typeof minValueIncAC>
export const minValueIncAC = () => {
    return {
        type: "MIN-INC",
    } as const
}
export type minValueDecreaseType = ReturnType<typeof minValueDecreaseAC>
export const minValueDecreaseAC = () => {
    return {
        type: "MIN-DECREASE",
    } as const
}