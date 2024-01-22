export enum buttonsEnum {"submit","clear"}

export type TVariant = {
    value: string,
    label: string
}

export type TField = {
    label: string,
    attrs: {
        name: string,
        type: string,
        variants?: TVariant[]
    }
}

export type TForm = {
    title: string
    description?: string
    fields: TField[],
    buttons: buttonsEnum[]
}