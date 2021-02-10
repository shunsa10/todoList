const addTask = document.querySelector('.add');
const btnId = document.querySelector('#btn');
const list = document.querySelector('.todos');

//　保存機能
(function () {
    //　初期化処理
    // ローカルストレージに格納している値を取得し、リストを生成する
    for (var key in localStorage) {
        var html = localStorage.getItem(key);
        if (html) {
            list.innerHTML += localStorage.getItem(key);
        }
    }
})();

const saveTaskToLocalStorage = (task, html) => {
    //nullは、localStorageに保存しないようにすえう
   
    if (html) {
        //ローカルストレージは０からになる
        localStorage.setItem(task, html);
        return;

    }
    return;
}
const deleteTaskFromLocalStorage = task => {
    localStorage.removeItem(task);
    return;

   
}

let form = document.forms[0];

let radio = form.todor;

let submit = form.submit;



const test = submit.addEventListener('click', () => {


    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {

            selcted = radio[i].value

        }
    }
    

}, false);

let selcted = 'A';
const createTodoList = task => {

    const html = `
    
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span><span class=li-color-${selcted} >${selcted}</span>,${task}</span>
        <i class="fas fa-glass-martini-alt delete"></i>
       
    </li>
    `;

    list.innerHTML += html;
    // 追加の項目
    saveTaskToLocalStorage(task, html);
}


// アドタスクがサブミットされた時、デフォルトのイベントを無効
addTask.addEventListener('submit', e => {

    e.preventDefault();

    const task = addTask.add.value.trim();
    if (task.length) {
        // todoListのHTMLを作成
        createTodoList(task);
        //タスクに入力した文字をクリア
        addTask.reset();
    }
});

btnId.addEventListener('click', e => {

    e.preventDefault();

    const task = addTask.add.value.trim();
    if (task.length) {
        // todoListのHTMLを作成
        createTodoList(task);
        //タスクに入力した文字をクリア
        addTask.reset();
        
    }
});



//　削除機能・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();

        const task = e.target.parentElement.textContent.trim()
        deleteTaskFromLocalStorage(task);
        
       
    }

});



//ボタンの処理。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。

let received = document.getElementById('rao');


document.getElementById('btn').onclick = function() {
   
    this.classList.toggle("elem");

    setTimeout(()=> {
    this.classList.toggle("elem");
    },1000);
};



btn.addEventListener('click', () => {
    
    received.classList.add('blinking');

    setTimeout(() => {
        received.classList.remove("blinking");
    }, 3000);

  
});

//ラジオボタンの値を取得
