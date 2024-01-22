import {buttonsEnum, TField, TForm, TVariant} from "./types/TForm";

const formGenerator = (formData: TForm) => {

    let formElement = document.createElement('form')
    formElement.className = 'form'

    formElement.innerHTML = `<div class="form__head">
                                <h2>${formData.title}</h2>
                                ${formData.description ? `<p>${formData.description}</p>` : ''}
                            </div>
                            <div class="form__fields">
                                ${formData.fields.map((field: TField)=>{
                                    return `<div class="form__field"><p>${field.label}</p>
                                                ${!field.attrs.variants ? 
                                                    `<input type="${field.attrs.type}"
                                                            name="${field.attrs.name}"/>` :
                                                    (field.attrs.type === 'select' ?
                                                        `<select>
                                                            ${field.attrs.variants.map((option: TVariant)=>{
                                                                return `<option value="${option.value}"
                                                                        >${option.label}</option>`   
                                                            }).join('')}         
                                                        </select>` :
                                                        `<div class="form__radio_set">
                                                            ${field.attrs.variants.map((variant: TVariant)=>{
                                                                return `<label>
                                                                            <input type="radio" 
                                                                                name="radio"
                                                                                value="${variant.value}"/>
                                                                            ${variant.label}    
                                                                        </label>`
                                                            }).join('')}
                                                        </div>`
                                                    )}
                                            </div>`
                                }).join('')}
                            </div>
                            <div class="form__buttons">
                                ${formData.buttons.includes(buttonsEnum.submit) ? 
                                    `<input type="submit" value="Отправить"/>` : ''}
                                ${formData.buttons.includes(buttonsEnum.clear) ?
                                    `<input type="reset" value="Очистить"/>` : ''}
                            </div>`




    return formElement
}

export default formGenerator