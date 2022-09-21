export class Job {
  id: number
  name: string
  salary: number
  counter: number
  constructor(id: number, name: string, salary: number, counter: number) {
    this.id = id
    this.name = name
    this.salary = salary
    this.counter = counter
  }
}
