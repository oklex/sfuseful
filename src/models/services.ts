export interface IService {
    title: string,
    subtitle: string,
    shortDescription: string,
    departments?: IDepartments[],
    yearRangeStart?: number,
    yearRangeEnd?: number,
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

export default IService;