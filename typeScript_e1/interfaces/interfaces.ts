import { LoyaltyUser } from "../enums";
import { Country, Price } from "../types";

export interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;   
}

export  interface Location {
     firstLine: string;
     city: string;
     code: number | string;
     country: Country;    
 }

export interface Property {
        image: string;
        title: string;
        price: Price;
        location: Location;
        contact: [number, string];
        isAvailable: boolean;
   }