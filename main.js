const todoList = document.querySelector('.todo'),
      todoForm = document.querySelector('.form'),
      todoInputText = document.querySelector('.form__text'),
      Btn = document.getElementById('.btn'),
      warningBox = document.querySelector('.warning-box'),
      warningBtn = document.querySelector('.warning-btn'),
      span = document.querySelectorAll('span');

// Функция добавления и удаления заметок
function formHandler(event) {
      event.preventDefault();

    //   Получить значение из формы
    const TaskText = todoInputText.value;
    
    /* Создать li тег  */
  
    const newTask = document.createElement ('li');
   
    // Условие: если поле текста пустое , то добавить нельзя --------------------
    if(todoInputText.value == ''){
        warningBox.classList.add('active');
        warningBtn.addEventListener('click', function (){
        warningBox.classList.remove('active')
        });
        warningBox.addEventListener('click', function(){
          warningBox.classList.remove('active')
        })
        newTask = false;
    };

    /* Создаем кнопку удалить--------------------------------------  */

    const deleteBtn = document.createElement ('button');
    deleteBtn.setAttribute('role', 'button');
    // Стилизуем кнопку удалить
    deleteBtn.innerText = 'Delete';
    deleteBtn.style['margin-left'] = '15px';
    deleteBtn.style['background'] = 'none';
    deleteBtn.style['fontWeight'] = '500';
    deleteBtn.style['color'] = '#f9b3d1';
    deleteBtn.classList.add('active');

    /* Добавляем кнопку вместе с разметкой */

    newTask.innerText = TaskText; 
    newTask.append(deleteBtn);

    
 // События удаления по клику

    deleteBtn.addEventListener ('click', function (){
        this.closest('li').remove();
    });
    
/* Добавляем элемент списка в разметку */
    todoList.append(newTask);
    
// Содержимое поле ввода , после появления
    todoInputText.value = '';

    // Фокус
    todoInputText.focus();

   
}

todoForm.addEventListener('submit', formHandler);
      


// 

function rotate(){
    for (let item of span ){
        item.classList.toggle('active');
    }
}

clearBtn.addEventListener('click', rotate);

