import { Epic } from "redux-observable";
import { from, of } from 'rxjs';
import { switchMap, filter, map, tap, ignoreElements, catchError } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { Action, RootState } from '../types'
import * as actions from "../store/actions"

const loadEpic: Epic<Action, Action, RootState> = (action$, store) =>
	action$.pipe(
		filter(isActionOf(actions.load)),
		tap(() => console.log('load action in epic')),
		ignoreElements()
	)

export default [
	loadEpic
]