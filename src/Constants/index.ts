import truckFast from '../assets/icons/truck-fast.svg';
import shieldTick from '../assets/icons/shield-tick.svg';
import support from '../assets/icons/support.svg';
import bigwatch1 from "../assets/images/bigwatch1.png";
import bigwatch2 from "../assets/images/bigwatch2.png";
import bigwatch3 from "../assets/images/bigwatch3.png";
import watch1 from "../assets/images/watch1.png";
import watch2 from "../assets/images/watch2.png";
import watch3 from "../assets/images/watch3.png";
import watch4 from "../assets/images/watch4.png";
import customer1 from "../assets/images/customer1.jpeg";
import customer2 from "../assets/images/customer2.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";



export const navLinks = [
    { href: "home", label: "Home" },
    { href: "about-us", label: "About Us" },
    { href: "products", label: "Products" },
    { href: "contact-us", label: "Contact Us" },
];

export const dropDownMenu = [
    { href: 'popular-products', label: 'Popular Products' },
    { href: 'super-quality', label: ' Super Quality' },
    { href: 'special-box', label: 'Our Special Box' },
]

export const watch = [
    {
        bigWatch: bigwatch1,
    },
    {
        bigWatch: bigwatch2,
    },
    {
        bigWatch: bigwatch3,
    },
];



export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];


export const products = [
    {
        imgURL: watch1,
        name: "Rolex GMT-1267",
        price: "$200.20",
    },
    {
        imgURL: watch2,
        name: "Rolex GMT-1675",
        price: "$210.20",
    },
    {
        imgURL: watch3,
        name: "Rolex GMT-1675",
        price: "$220.20",
    },
    {
        imgURL: watch4,
        name: "Rolex GMT-1267",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];
export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air-King", link: "/" },
            { name: "Datejust", link: "/" },
            { name: "Lady-Datejust", link: "/" },
            { name: "ADay-Date", link: "/" },
            { name: "Explorer", link: "/" },
            { name: "GMT-Master II", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];