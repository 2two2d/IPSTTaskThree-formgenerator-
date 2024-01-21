export enum buttonsEnum {"submit","clear"}

export type TOption = {
    value: string,
    label: string
}

export type TField = {
    label: string,
    attrs: {
        name: string,
        type: string,
        variants?: TOption[]
    }
}

export type TForm = {
    title: string
    description?: string
    fields: TField[],
    buttons: buttonsEnum[]
}