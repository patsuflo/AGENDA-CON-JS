export const uniqueDates = (tasks) =>{
    const unique=[];
    tasks.forEach((task) => {
       if(!unique.includes(task.dateFormat))  unique.push(task.dateFormat);
    });
       return unique;
    };
export const orderDates= (datess)=>{
 return  datess.sort((a,b) => {
const firstDate=moment(a,'DD/MM/YYYY');
const secondDate=moment(b,'DD/MM/YYYY');
return firstDate-secondDate;
   })
};