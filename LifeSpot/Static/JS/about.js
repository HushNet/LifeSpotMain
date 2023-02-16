/*
* Запросим пользовательский ввод
* и сохраним отзыв в объект
* 
* */
function getReview() {
    // Создадим объект
    let comment = {}
    
    // Сохраним свойство имени
    comment["userName"] = prompt("Как вас зовут ?")
    if(comment["userName"] == null){
        return
    }
    
    // Сохраним текст отзыва
    comment["comment"] = prompt("Напишите свой отзыв")
    if(comment["comment"] == null){
        return
    }
    
    // Сохраним текущее время
    comment["date"] = new Date().toLocaleString()
    
    let isRated = confirm("Вы хотите, чтобы ваш отзыв имел рейтинг?");
    
    if (isRated){
        let review = Object.create(comment);
        review["rate"] = 0;

        writeReview(review)
    }else{
        writeReview(comment);
    }
    
    // Добавим на страницу
    
}

/*
* Запишем отзыв на страницу 
* 
* */
const writeReview = review => {
    
    if (review.hasOwnProperty("rate")){
        document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
            `<p> <i> <b>${review['userName']}</b>  ${review['date']}</i> ------> Рейтинг: <b>${review['rate']}</b></p>` +
            `<p>${review['comment']}</p>`  +
            '</div>';
    }
    else{
        document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
            `<p> <i> <b>${review['userName']}</b>  ${review['date']}</i></p>` +
            `<p>${review['comment']}</p>`  +
            '</div>';
    }
}


// Слайдер

let offset = 0;
let offsetStep = 1000;
let offsetLimitPlus = 2000;
let offsetLimitMinus = 0;

const sliderLine = document.getElementsByClassName("slider-line")[0];
const sliderContainer = document.querySelector(".slider");

function moveSliderFront(){
        offset += offsetStep;
        if (offset > offsetLimitPlus)
            offset = offsetLimitMinus;
        sliderLine.style.left = -offset + 'px';
}
function moveSliderBack() {
        offset -= offsetStep;
        if (offset < offsetLimitMinus)
            offset = offsetLimitPlus;
        sliderLine.style.left = -offset + 'px';
    }

// Drag and Drop Slider

let isPressed = false;
let cursorX;

sliderContainer.addEventListener("mousedown", (e) => {
    isPressed = true;
    cursorX = e.offsetX - sliderLine.offsetLeft;
    sliderContainer.style.cursor = "grabbing";
});

sliderContainer.addEventListener("mousemove", (e) => {
    if (!isPressed) return;
    e.preventDefault();
    let calculatedOffset = e.offsetX - cursorX;
    if (calculatedOffset > 0){
        calculatedOffset = 0;
    }
    if (calculatedOffset < -2000){
        calculatedOffset = -2000;
    }
    sliderLine.style.left = `${calculatedOffset}px`;
});

sliderContainer.addEventListener("mouseup", (e) => {
    isPressed = false;
    sliderContainer.style.cursor = "auto";
});

sliderContainer.addEventListener('mouseleave', (event) => {
    isPressed = false;
    sliderContainer.style.cursor = "auto";
});