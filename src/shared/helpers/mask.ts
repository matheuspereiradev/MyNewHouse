
export class Mask{

    public static setMask(value:string,mask:string){
        let i = 0;
        const arr = value;

        return mask.replace(/\*/g,()=>{
            let a = arr[i]
            i++;

            return a||""
            
        })

        //eg.: Mask.setMask("12345678","(**) ***-***")  //return (12) 345-678
    }
}