 import { createTask } from "./addTask.js";
 import { uniqueDates , orderDates} from "../services/date.js";
 import dateElement from "./dateElement.js";
 
 export const displayTasks = () => {
    const list=document.querySelector("[data-list");
   console.log(list) ;

  const tasksList = JSON.parse(localStorage.getItem("tasks")) || [];
const datess= uniqueDates(tasksList);
console.log(datess);
orderDates(datess)

datess.forEach(date => {
   console.log(date);

const dateMoment=moment(date,'DD/MM/YYYY');



   list.appendChild(dateElement(date));
   tasksList.forEach((task) => {
    const taskdate= moment(task.dateFormat,"DD/MM/YYYY");
    const diff=dateMoment.diff(taskdate);
  
if(diff=== 0){
       list.appendChild(createTask(task)); 
  
}

   });

   });
}