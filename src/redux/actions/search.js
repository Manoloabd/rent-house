import {UPDATE_SEARCH} from '../constants';

export function updateSearch(search) {
    return {
        type:UPDATE_SEARCH,
        search
    }
};
