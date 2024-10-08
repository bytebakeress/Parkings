import { v4 as uuidv4 } from "uuid";
export class Park {
    id:string;
    spot_id : number;
    startedAT: Date;
    endedAT: Date | null;
    price: number;
    paid: boolean;
     
    constructor(spot_id: number, price: number, paid:boolean){
        this.id = uuidv4();
        this.spot_id = spot_id;
        this.startedAT = new Date;
        this.endedAT = null;
        this.price = price;
        this.paid = false;

    }

}