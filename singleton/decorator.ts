class Field{
    errors : Array<string>;
    input: HTMLInputElement;

    constructor(input:HTMLInputElement){
        this.input=input;
        this.errors=[];

        let errorMessage = document.createElement('p') as HTMLParagraphElement;
        errorMessage.className='text-danger';
        let parent = this.input.parentNode as ParentNode;

        parent.insertBefore(errorMessage,this.input.nextSibling);

        this.input.addEventListener('input',()=>{
            this.errors = [];
            this.validate();
            errorMessage.innerText=this.errors[0] || '';
        });
    }
    validate(){}
}

function requiredFieldDecorator(field:Field): Field{
    let validate = field.validate;
    field.validate = function(): void{
        validate();
        let value = field.input.value;
        if(!value){
            field.errors.push('requerido');
        }
    }
    return field;
}

function emailFieldDecorator(field:Field): Field{
    let validate = field.validate;
    

    field.validate = function(){
        validate();
        let value = field.input.value;
        
        if(value.indexOf('@') === -1){
            field.errors.push('debe ser un email');
        }
    }
    return field;
}

let field = new Field(document.querySelector('#email') as HTMLInputElement);
field = requiredFieldDecorator(field);
field = emailFieldDecorator(field);
console.log(field);
