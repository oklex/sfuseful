import IService from "../models/services"
import data from '../data/data-march-24.json'

export const Services = {
    async fetchServices(): Promise<IService[]> {
        try {
            var returnVal: IService[] = data
            // console.log("fetched: ", returnVal)
            return returnVal
        } catch (e) {
            console.log('request failed')
            return []
        }
    }
}