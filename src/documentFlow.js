import apiCall from "./fetchAPI";
import { ui } from "./UI";
import { location } from "./locationData";
import { form } from "./form";
import { changeTempFarenCelc } from "./tempFC";


export const flow = async () =>{
    
    const data = await apiCall()
    const newLocation = location(data)
    ui(newLocation)
    form()  
    changeTempFarenCelc

}