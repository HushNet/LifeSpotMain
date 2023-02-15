const saveInput = function (){
    let input = document.getElementsByClassName("input-field")[0].value;
    
    alert("Текущий ввод: " + `${input} ` + "\n Последний ввод: " + `${this.lastInput}`);
    
    this.lastInput = input;
}