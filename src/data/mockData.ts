import {IService, IDepartments, IRange} from '../models/services'

export const mockData : IService[] = [
    {
        title: "example 1",
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