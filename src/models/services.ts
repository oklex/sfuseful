export interface IService {
    title: string,

    // categories start
    degreePlanning?: boolean,
    academicAdvising?: boolean,
    careerServices?: boolean,
    workAndVolunteering?: boolean,
    healthAndCounselling?: boolean,
    academicToolsAndHelp?: boolean,
    library?: boolean,
    research?: boolean,
    peerToPeer?: boolean,
    financialAid?: boolean,
    ITServices?: boolean,
    applications?: boolean,
    studentNetworks?: boolean,
    // categories end
    
    departments: string,
    accessMethod?: string,
    availability?: string,
    recommended?: boolean,
    description?: string,
    shortDescription?: string,
    yearMinimum?: number | string,
    yearMaximim?: number | string,
    source?: string,
    contact?: string,
    testimonials?: string
}

export enum IDepartments {
    Beedie = "BUS",
    CompSci = "CS",
    Engineering = "ENSC",
    HealthSci = "HS",
    All = "ALL"
}

export enum ICategories {
    degreePlanning = "degreePlanning", 
    academicAdvising = "academicAdvising",
    careerServices = "careerServices",
    workAndVolunteering = "workAndVolunteering",
    healthAndCounselling = "healthAndCounselling",
    academicToolsAndHelp = "academicToolsAndHelp",
    library	= "library",
    research = "research",
    peerToPeer = "peerToPeer",
    financialAid = "financialAid",
    ITServices = "ITServices",
    applications = "applications",
    studentNetworks = "studentNetworks"
}

export const allCategories: ICategories[] =  [
    ICategories.degreePlanning,
    ICategories.academicAdvising,
    ICategories.careerServices,
    ICategories.workAndVolunteering,
    ICategories.healthAndCounselling,
    ICategories.academicToolsAndHelp,
    ICategories.library,
    ICategories.research,
    ICategories.peerToPeer,
    ICategories.financialAid,
    ICategories.ITServices,
    ICategories.applications,
    ICategories.studentNetworks
]

export default IService;