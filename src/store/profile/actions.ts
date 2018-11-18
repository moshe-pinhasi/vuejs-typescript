import { ActionTree } from 'vuex';
import httpService, {HttpResponse} from '@/services/httpService';
import { ProfileState, User } from './types';
import { RootState } from '../types';


export const actions: ActionTree<ProfileState, RootState> = {
    fetchData({ commit }, id: string): any {
        console.log("fetchData")
        httpService.get()
            .then((response: HttpResponse) => {
                const payload: User = response && response.data;
                commit('profileLoaded', payload);
            })
            .catch((error: String) => {
                console.log(error);
                commit('profileError');
            })
    }
};