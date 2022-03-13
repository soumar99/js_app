const input_calorie = document.getElementsByName("input_calorie")[0];
const output_calorie = document.getElementsByName("output_calorie")[0];
const input_weight = document.getElementsByName("weight")[0];
const data_list = document.getElementsByClassName("yourdata_list")[0];
const register = document.getElementsByClassName("register")[0];

//make register button
const registerDate = (input, output, weight) => {
    const listData = document.createElement("li");
    const showItem = data_list.appendChild(listData);
    var today = new Date();
    var month = today.getMonth();
    var date = today.getDate();
    let yourdates = month+"/"+date+" Input calorie:"+input.value+"cal Output calorie:"+output.value+"cal Weight:"+weight.value+"k";
    showItem.innerHTML = yourdates;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    listData.appendChild(deleteButton);

    deleteButton.addEventListener("click", evt => {
        deleteTasks(deleteButton);
    });
}

const deleteTasks = (deleteButton) => {
        const chosenTask = deleteButton.closest('li');
        data_list.removeChild(chosenTask);
    };
    

register.addEventListener("click", evt => {
    registerDate(input_calorie, output_calorie, input_weight);
    input_calorie.value = "";
    output_calorie.value = "";
    input_weight.value = "";
});
// const addTasks = (task) => {
// 　　// 入力したタスクを追加・表示
//     const listItem = document.createElement('li');
//     const showItem = taskList.appendChild(listItem);
//     showItem.innerHTML = task;

// 　　//タスクに削除ボタンを付与
//     const deleteButton = document.createElement('button');
//     deleteButton.innerHTML = 'Delete';
//     listItem.appendChild(deleteButton);

// 　　//削除ボタンをクリックし、イベントを発動（タスクが削除）
//     deleteButton.addEventListener('click', evt => {
//         evt.preventDefault();
//         deleteTasks(deleteButton);
//     });
// };


// taskSubmit.addEventListener('click', evt => {
//     evt.preventDefault();
//     const task = taskValue.value;
//     addTasks(task);
//     taskValue.value = '';
// });