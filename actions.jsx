

export async function deliveryMessage(message){
   await new Promise(resolve =>setTimeout (resolve,2000))   
   return `Delivered: ${message}`

    
}