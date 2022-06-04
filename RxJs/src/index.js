import { from } from 'rxjs'
const observable = from(fetch('https://jsonplaceholder.typicode.com/todos/1')) //synchronous

const subscription = observable.subscribe({
    next(value) {
        console.log(value)
    },
    complete() {
        console.log('complete')
    },
})

// console.log('after')