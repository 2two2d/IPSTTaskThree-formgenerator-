import {TForm} from "./types/TForm";
import formGenerator from "./formGenerator";

const PATHS_TO_FILES: string[] = ['./data/form-test-1.json',
    './data/form-test-2.json',
    './data/form-test-3.json']

const appendForm = async (path: string): Promise<void> => {
    await fetch(path).then((res: Response) => res.json()).then((res: TForm): void => {
        document.getElementById('app').append(formGenerator(res))
    })
}

PATHS_TO_FILES.forEach((path: string): void=>{
    appendForm(path)
})




