let select = function(){
    let selectHeader = document.querySelectorAll('.select-game__header');
    let selectItem = document.querySelectorAll('.select-game__item');

    selectHeader.forEach(item=>{
        item.addEventListener('click', selectToggle)
    });

    
    selectItem.forEach(item=>{
        item.addEventListener('click', selectChoose)
    });

    function selectToggle(){
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose(){
        let text = this.innerHTML,
        select=this.closest('.select-game'),

        currentText = select.querySelector('.select-game__current');
        currentText.innerHTML = text;
        select.classList.remove('is-active')

    }
}

select();



let select_settings = function(){
    let selectHeader = document.querySelectorAll('.select-settings__header');
    let selectItem = document.querySelectorAll('.select-settings__item');

    selectHeader.forEach(item=>{
        item.addEventListener('click', selectToggle)
    });

    

    function selectToggle(){
        this.parentElement.classList.toggle('is-active');
    }
}

select_settings();