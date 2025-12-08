export type Left<L> = {
    type: 'left'
    error: L
}

export type Right<R> = {
    type: 'right'
    value: R
}

export type Either<L, R> = Left<L> | Right<R>

export const left = <L>(error: L): Left<L> => {
    return {
        type: 'left',
        error: error,
    }
}

export const right = <R>(value: R): Right<R> => {
    return {
        type: 'right',
        value: value,
    }
}
