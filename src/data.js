import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
    {id: 1, href: "#home", text:'home'},
    {id: 2, href: "#about", text:'about'},
    {id: 3, href: "#services", text:'services'},
    {id: 4, href: "#tours", text:'tours'}
];

export const socialLinks = [

        {id: 1, href: "https://www.fb.com", iClass:'fab fa-facebook'},
        {id: 2, href: "https://www.twitter.com", iClass:'fab fa-twitter'},
        {id: 3, href: "https://www.instagram.com", iClass:'fab fa-instagram'}
]

export const tourData = [
    {id: 1, imgsrc:tour1, date: 'august 26th, 2020', h4: 'Tibet Adventure', location: 'China', duration: '6 Days', amount: 'from $2100'},
    {id: 2, imgsrc:tour2, date:'october 1th, 2020', h4: 'Best of Java', location: 'Indonesia', duration: '11 Days', amount: 'from $1400'},
    {id: 3, imgsrc:tour3, date:'september 15th, 2020', h4: 'explore hong kong', location: 'Hong Kong', duration: '8 Days', amount: 'from $5000'},
    {id: 4, imgsrc:tour4, date:'december 5th, 2019', h4: 'Kenya Highlights', location: 'Africa', duration: '20 Days', amount: 'from $3300'}
]