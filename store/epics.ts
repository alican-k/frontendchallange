import { Epic } from "redux-observable";
import { from, of } from 'rxjs';
import { switchMap, filter, map, tap, ignoreElements, catchError } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { map as r_map, dissoc, compose, path, prop } from 'ramda'
import { Action, RootState, ProgramType, SortTerm } from '../types'
import * as actions from "../store/actions"

const getUrl = programType => `http://localhost:3000/api?type=${programType}`

const loadEpic: Epic<Action, Action, RootState> = (action$, state$) =>
	action$.pipe(
		filter(isActionOf(actions.load)),
		switchMap(() => {
			const {programType} = state$.value
			return from(fetch(getUrl(programType))).pipe(
				switchMap(response => response.json()),
				map(responseToState),
				map(actions.loaded),
				catchError(error => of(actions.error())),
			)
		}),
	)

export default [
	loadEpic
]

const responseToState = compose(
	r_map(entry => {
		const image = entry.images['Poster Art']
		return dissoc('images', {...entry, image})
	}),
	prop('data'),
)