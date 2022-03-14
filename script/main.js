const input_calorie = document.getElementsByName("input_calorie")[0];
const output_calorie = document.getElementsByName("output_calorie")[0];
const input_weight = document.getElementsByName("weight")[0];
const data_list = document.getElementsByClassName("yourdata_list")[0];
const register = document.getElementsByClassName("register")[0];

if(isNaN(input_calorie) || isNaN(output_calorie) || isNaN(input_weight) ){
    alert("Don't put character, put number");
} 

//make register button
const registerDate = (input, output, weight) => {
    const listData = document.createElement("li");
    const showItem = data_list.appendChild(listData);
    var today = new Date();
    var month = today.getMonth()+1;
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
    if(isNum(output_calorie) || isNum(input_calorie) || isNum(input_weight)){
        alert("Please write number");
        input_calorie.value = "";
        output_calorie.value = "";
        input_weight.value = "";
    } else {
        registerDate(input_calorie, output_calorie, input_weight);
        input_calorie.value = "";
        output_calorie.value = "";
        input_weight.value = "";
    }    
});

function isNum(val){
    return !isNaN(val);
}
