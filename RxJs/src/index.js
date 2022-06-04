import { from } from 'rxjs'
const observable = from([1, 2, 3, 4, 5]) //synchronous

const subscription = observable.subscribe({
    next(value) {
        console.log(value)
    },
    complete() {
        console.log('complete')
    },
})

// console.log('after')