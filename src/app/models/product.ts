import { productbid } from "./productbid";

export interface product{
    productId:string,
    name:string,
    shortDescription:string,
    detailedDescription : string,
    category : string
    startingPrice:number,
    bidEndDate : Date
    productbids:productbid[]
}