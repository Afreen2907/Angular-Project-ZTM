import { interval, fromEvent } from 'rxjs'
import {
    map,
    pluck,
    filter,
    reduce,
    take,
    scan,
    tap,
    switchMap,
} from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

const button = document.querySelector('#btn')

const observable = fromEvent(button, 'click').pipe(
    switchMap(() => {
        return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1').pipe(
            take(5),
            tap({
                complete() {
                    console.log('cmpp')
                },
            }),
        )
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