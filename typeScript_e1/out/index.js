"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var enums_1 = require("./enums");
var propertyContainer = document.querySelector('.properties');
var footer = document.querySelector('.footer');
var isOpen;
console.log('my ts');
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
var reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: enums_1.LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: enums_1.LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: enums_1.LoyaltyUser.SILVER_USER,
        date: '27-03-2021'
    }
];
// User
var you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: enums_1.Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};
//Properties
var properties = [
    {
        image: 'images/house1.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [600112233, 'marywinkle@gmail.com'],
        isAvailable: true
    },
    {
        image: 'images/house2.jpg',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [600112244, 'garydavis@hotmail.com'],
        isAvailable: false
    },
    {
        image: 'images/house3.jpg',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact: [600223355, 'andyluger@aol.com'],
        isAvailable: true
    }
];
// Functions
(0, utils_1.showReviewTotal)(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
(0, utils_1.populateUser)(you.isReturning, you.firstName);
//Add the properties
for (var i = 0; i < properties.length; i++) {
    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = properties[i].title;
    var image = document.createElement('img');
    image.setAttribute('src', properties[i].image);
    card.appendChild(image);
    propertyContainer.appendChild(card);
}
var currentLocation = ['London', '11:35', 17];
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°';
var MainProperty = /** @class */ (function () {
    function MainProperty(src, title, reviews) {
        this.reviews = reviews;
        this.src = src;
        this.title = title;
    }
    return MainProperty;
}());
/*
let yourMainProperty = new MainProperty(
     'images/house1.jpg',
     'Residencial house',
     [{

     }])
     */ 
//# sourceMappingURL=index.js.map