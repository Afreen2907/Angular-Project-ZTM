import { interval, fromEvent } from 'rxjs'
import {
    map,
    pluck,
    filter,
    reduce,
    take,
    scan,
    tap,
    mergeMap,
} from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

const button = document.querySelector('#btn')

const observable = fromEvent(button, 'click').pipe(
    mergeMap(() => {
        return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1')
    }),
)

const subscription = observable.subscribe({
    next(value) {
        console.log(value)
    },
    complete() {
        console.log('complete')
    },
})

// console.log('after')