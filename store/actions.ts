export const TICK = 'TICK'
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const RESET = 'RESET'

export type ActionNames = 'TICK' | 'INCREMENT' | 'DECREMENT' | 'RESET'

interface TickAction {
	type: typeof TICK
	payload: {
		isServer: boolean
		timestamp: number
	}
}
interface IncrementAction { type:  typeof INCREMENT }
interface DecrementAction { type:  typeof DECREMENT }
interface ResetAction { type:  typeof RESET }

export const tick = (p: {isServer: boolean}): TickAction => ({
	type: TICK, 
	payload: {
		isServer: p.isServer, 
		timestamp: Date.now()
	}
})

export const incrementCount = (): IncrementAction => ({ type: INCREMENT })

export const decrementCount = (): DecrementAction => ({ type: DECREMENT })

export const resetCount = (): ResetAction => ({ type: RESET })

export type ActionType = TickAction | IncrementAction | DecrementAction | ResetAction
