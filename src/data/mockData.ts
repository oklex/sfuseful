import {IService, IDepartments, IRange} from '../models/services'

export const mockData : IService[] = [
    {
        title: "SFU Beedie Writing Mentors",
        subtitle: "Academic Advising ",
        shortDescription: "Beedie undergraduate students have the opportunity to recieve free, one-on-one mentorship from a trained writing expert. Students can book a 60-minute session online once a week. Alternately, they are able to see mentors for 30-minute drop-in sessions, which are available on a first come, first serves basis but can be excerised multiple times in a week. Students will have to come prepared, with most of their assignment completed and specific questions or requests based on the assignment or on their writing skills. ",
        departments: [
            IDepartments.Beedie,
        ],
        yearRange: {
            start: 0,
            end: 0
        },
        source: "https://beedie.sfu.ca/resources/undergraduates/writing-mentors",
        contact: "Register at Beedie Community: https://beediecommunity.sfu.ca/home.html"
    },
    {
        title: "example 2",
        subtitle: "subtitle",
        shortDescription: "lorem ipsum decor ...",
        departments: [
            IDepartments.All,
        ],
        yearRange: {
            start: 0,
            end: 4
        },
        source: "www.sfu.ca",
        contact: "big-petter@sfu.ca"
    },
    {
        title: "example 3",
        subtitle: "subtitle",
        shortDescription: "lorem ipsum decor ...",
        departments: [
            IDepartments.All,
        ],
        yearRange: {
            start: 0,
            end: 4
        },
        source: "www.sfu.ca",
        contact: "big-petter@sfu.ca"
    },
    {
        title: "example 4",
        subtitle: "subtitle",
        shortDescription: "lorem ipsum decor ...",
        departments: [
            IDepartments.All,
        ],
        yearRange: {
            start: 0,
            end: 4
        },
        source: "www.sfu.ca",
        contact: "big-petter@sfu.ca"
    }
]
export default mockData;