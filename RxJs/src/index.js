import { of } from 'rxjs'
const observable = of(1, 2, 'click') //synchronous

const subscription = observable.subscribe({
    next(value) {
        console.log(value)
    },
    complete() {
        console.log('complete')
    },
})

// console.log('after')