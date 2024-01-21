import {TForm} from "./types/TForm";

const PATHS_TO_FILES: string[] = ['./data/form-test-1.json',
    './data/form-test-2.json',
    './data/form-test-3.json']

let forms: TForm[] = []

const getFileByURL = async (path: string) => {
    return await fetch(path).then((res) => res.json()).then((res) => {
        return res
    })
}

const setForms = () => {
    PATHS_TO_FILES.forEach(async (path) => {
        forms.push(await getFileByURL(path))
    })
}

setForms()


