export interface CalcPartial {
    sort: number | undefined,
    elementCalc: CalcPartialEnum
}

export enum CalcPartialEnum {
    CalcNumbers = "CalcNumbers",
    CalcDisplay = "CalcDisplay",
    CalcEqual = "CalcEqual",
}