const body = document.querySelector('body')
function FormComponent(props) {
let {cls,label,text,inputAttributes} = props
 let form =   document.createElement('div')
 form.setAttribute('class',cls)
 let labelElem = document.createElement('label')
 labelElem.setAttribute('for',label)
 labelElem.innerText = text
 form.appendChild(labelElem)

 let input = document.createElement('input')
 for(let attribute in inputAttributes) {

   console.log(attribute,inputAttributes[attribute])
   input.setAttribute(attribute,inputAttributes[attribute])
 }
form.appendChild(input)
return form
}

let form = FormComponent({cls: 'dada',label: 'das',text: 'Input', inputAttributes: {class: 'input',id:'names',type:'text',name:'name'}})
body.prepend(form)