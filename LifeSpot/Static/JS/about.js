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
