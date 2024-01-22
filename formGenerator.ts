import {TForm, TVariant} from "./types/TForm";
import {TField} from "./types/TForm";

const formGenerator = (formData: TForm) => {

    let formElement = document.createElement('form')
    formElement.className = 'form'

    formElement.innerHTML = `<div class="form__head">
                                <h2>${formData.title}</h2>
                                ${formData.description ? `<p>${formData.description}</p>` : ''}
                            </div>
                            <div class="form__fields">
                                ${formData.fields.map((field: TField)=>{
                                    return `<label>${field.label}
                                                ${!field.attrs.variants ? 
                                                    `<input type="${field.attrs.type}"
                                                            name="${field.attrs.name}"/>` :
                                                    (field.attrs.type === 'select' ?
                                                        `<select>
                                                            ${field.attrs.variants.map((option: TVariant)=>{
                                                                return `<option value="${option.value}">${option.label}</option>`   
                                                            })}         
                                                        </select>` :
                                                        `<div class="form__radio_set">
                                                            ${field.attrs.variants.map((variant: TVariant)=>{
                                                                return `<label>${variant.label}
                                                                            <input type="radio" 
                                                                                name="radio"
                                                                                value="${variant.value}"/>
                                                                        </label>`
                                                            })}
                                                        </div>`
                                                    )}
                                            </label>`
                                })}
                            </div>
                            <div class="form__buttons">
                                
                            </div>`




    return formElement
}

export default formGenerator