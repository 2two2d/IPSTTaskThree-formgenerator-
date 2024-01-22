import {TForm} from "./types/TForm";

const formGenerator = (form: TForm) => {

    let formDOM = document.createElement('h1')
    formDOM.innerText = form.title

    return formDOM
}

export default formGenerator