export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    thumbnail: string;
}

export interface CardProps {
    imgAlt: string;
    imgSrc: string;
    title: string;
    rating: number;
    price: number;
    buttonText: string;
    buttonLink: string;
}
