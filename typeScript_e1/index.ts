import { showReviewTotal, populateUser } from './utils'
import { Permissions, LoyaltyUser } from './enums'
import { Price, Country } from './types'
import { Review, Property } from './interfaces/interfaces'
import MainProperty from './classes'

const propertyContainer = document.querySelector('.properties')
const footer = document.querySelector('.footer')

let isOpen: boolean
console.log('my ts')

// Reviews
/*const reviews : any[] = [
     {
         name: 'Sheia',
         stars: 5,
         loyaltyUser: LoyaltyUser.GOLD_USER,
         date: '01-04-2021'
     },
     {
         name: 'Andrzej',
         stars: 3,
         loyaltyUser: LoyaltyUser.BRONZE_USER,
         date: '28-03-2021'
     },
     {
         name: 'Omar',
         stars: 4,
         loyaltyUser: LoyaltyUser.SILVER_USER,
         date: '27-03-2021',
         description: 'Great hosts, location was a bit further than said.'
     },
 ]*/


 // Reviews
const reviews: Review[] = [
     {
         name: 'Sheia',
         stars: 5,
         loyaltyUser: LoyaltyUser.GOLD_USER,
         date: '01-04-2021'
     },
     {
         name: 'Andrzej',
         stars: 3,
         loyaltyUser: LoyaltyUser.BRONZE_USER,
         date: '28-03-2021'
     },
     {
         name: 'Omar',
         stars: 4,
         loyaltyUser: LoyaltyUser.SILVER_USER,
         date: '27-03-2021'
     }
 ]
 

// User
const you: {
     firstName: string;
     lastName: string;
     permissions: Permissions,
     isReturning: boolean;
     age: number;
     stayedAt: string[]
} = {
     firstName: 'Bobby',
     lastName: 'Brown',
     permissions: Permissions.ADMIN,
     isReturning: true,
     age: 35,
     stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

// Array of Properties
const properties : Property[] = [
     {
         image: 'images/colombia-property.jpg',
         title: 'Colombian Shack',
         price: 45,
         location: {
             firstLine: 'shack 37',
             city: 'Bogota',
             code: 45632,
             country: 'Colombia'
         },
         contact: [+112343823978921, 'marywinkle@gmail.com'],
         isAvailable: true  
     },
     {
         image: 'images/poland-property.jpg',
         title: 'Polish Cottage',
         price: 30,
         location: {
             firstLine: 'no 23',
             city: 'Gdansk',
             code: 343903,
             country: 'Poland'
         },
         contact: [+1298239028490830, 'garydavis@hotmail.com'],
         isAvailable: false 
     },
     {
         image: 'images/london-property.jpg',
         title: 'London Flat',
         price: 25,
         location: {
             firstLine: 'flat 15',
             city: 'London',
             code: 'SW4 5XW',
             country: 'United Kingdom',
         },
         contact: [+34829374892553, 'andyluger@aol.com'],
         isAvailable: true
     }
 ]

// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)

//Add the properties
for (let i = 0; i < properties.length; i++) {
     const card = document.createElement('div')
     card.classList.add('card')
     card.innerHTML = properties[i].title
     const image = document.createElement('img')
     image.setAttribute('src', properties[i].image)
     card.appendChild(image)
     propertyContainer.appendChild(card)
}

let currentLocation: [string, string, number] = ['London', '11:35', 17]
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°'

let yourMainProperty = new MainProperty(
     'images/italian-property.jpg', 
     'Italian House',
     [{
         name: 'Olive',
         stars: 5,
         loyaltyUser: LoyaltyUser.GOLD_USER,
         date: '12-04-2021'
     }] )
 