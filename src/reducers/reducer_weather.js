import {FETCH_WEATHER} from '../actions/index'

export default function (state = [], action){
	switch(action.type){
		case FETCH_WEATHER:
			//add all entries of state and a new entry
			return [action.payload.data, ...state];
	}
	return state;
}
