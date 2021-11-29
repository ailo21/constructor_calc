export interface CalcPartial {
    sort: number,
    elementCalc: CalcPartialEnum
}
export enum CalcPartialEnum {
    CalcNumbers = "CalcNumbers",
    CalcDisplay = "CalcDisplay",
    CalcEqual = "CalcEqual",
    CalcOperationList = "CalcOperationList",
}