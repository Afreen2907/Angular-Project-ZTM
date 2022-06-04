import { Observable } from 'rxjs'

const observable = new Observable((subscriber) => {
    subscriber.next('Hello World')
    subscriber.error('Error!')
    subscriber.next('test')

    subscriber.complete()
})

observable.subscribe({
    next: (value) => {
        console.log(value)
    },
    complete: () => {
        console.log('complete called!')
    },
    error: (err) => {
        console.error(err)
    },
})