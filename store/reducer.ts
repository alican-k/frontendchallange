import { TICK, INCREMENT, DECREMENT, RESET, ActionType } from './actions'

interface State {
	lastUpdate: number
	count: number
	light: boolean
}

export const initialState: State = {
	lastUpdate: 0,
	count: 0,
	light: false
}

const reducer = (state = initialState, action: ActionType): State => {
  switch (action.type) {
		case TICK:{
			const {timestamp: lastUpdate, isServer: light} = action.payload
			return {...state, lastUpdate, light}
		}
		case INCREMENT:{
			const count = state.count + 1
			return {...state, count}
		}
		case DECREMENT:{
			const count = state.count - 1		
			return {...state, count}
		}
		case RESET:{
			const { count } = initialState
			return {...state, count}
		}
    default:
      return state
  }
}

export default reducer