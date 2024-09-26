/* eslint-disable padding-line-between-statements */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
interface IDate {
    calender: {
        identifier: string
    };
    day:number;
    era:number;
    month:number;
    year:number;

} 

const dateToISO = (date:IDate) =>{
    if(!date){
        return new Date()
    }
    return new Date(`${date?.month}-${date?.day}-${date?.year}`).toISOString()
}

export default dateToISO