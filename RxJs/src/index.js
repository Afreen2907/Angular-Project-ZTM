// import { interval } from 'rxjs'

// const observable = interval(1000)

import { timer } from 'rxjs'
const observable = timer(100)

const subscription = observable.subscribe(console.log)

// console.log('after')