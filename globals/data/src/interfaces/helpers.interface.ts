export type ArrayElement<A> = A extends ReadonlyArray<infer T> ? T : never
export type NonNullable<T> = Exclude<T, null | undefined>

export type NonNullableObject<T> = NonNullable<{ [P in keyof T]-?: NonNullableObject<T[P]> }>

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>
