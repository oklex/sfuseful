export interface IService {
    title: string,
    subtitle: string,
    shortDescription: string,
    departments: IDepartments[],
    yearRange: IRange,
    source: string,
    contact: string,
}

export enum IDepartments {
    Beedie = "Beedie School of Business",
    CompSci = "Computing Science",
    Engineering = "Enginering Science",
    HealthSci = "Health Sciences",
    All = "All students"
}

export interface IRange {
    start: number,
    end: number
}

export default IService;