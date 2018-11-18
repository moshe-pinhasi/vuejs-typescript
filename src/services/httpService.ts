import { User } from '../store/profile/types'


export interface HttpResponse {
    data: User
}

export default {
    get: (): Promise<HttpResponse> => {
        return Promise.resolve({
            data: {
                firstName: "Moshe",
                lastName: "Pinhasi",
                email: "jhjkew@gmkmld.com"
            }
        })
    },
}