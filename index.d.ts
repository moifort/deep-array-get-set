declare module 'array-deep-get-set' {
    let lib: {
        get: <T>(object: any | any[], path: string, defaultValue?: T) => T
        set: <T>(objectToSet: T, path: string, value: any) => T
    }
    export = lib
}
