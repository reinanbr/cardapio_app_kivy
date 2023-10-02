import { nextHoraryFood } from "./nextHoraryFood.js";
import { painelImage } from "./painelImage.js";

let infoHorary = nextHoraryFood();
export const painelHorary = () => {
   
   // console.log(infoHorary.secondsCount)
    if(!infoHorary.food){
     //   console.log(infoHorary.secondsCount)
        $('#infoHorary').html(`<small><b>O lanche será liberado às ${infoHorary.horaryFood.hour}:${infoHorary.horaryFood.minutes}!</b><br/><br/>Faltam ${infoHorary.timeRes.hour} horas, ${infoHorary.timeRes.minutes} minutos e ${infoHorary.timeRes.seconds} segundos.</small>`);
    }
    else{
        $('#infoHorary').html(`<small><b>Atenção! O lanche foi liberado! foi liberado! </b><br/><br/>Faltam ${infoHorary.timeRes.minutes} minutos e ${infoHorary.timeRes.seconds} segundos para o intervalo acabar!</small>`);
        painelImage('food0')
    }
}



