
export function override<T extends Function>(name: string, callback: T) {
  return function(this: { props: object }, ...args: any[]) {
    callback(...args)
    if (typeof (this.props as any)[name] === 'function') {
      (this.props as any)[name](...args)
    }
  }
}