export interface Product {
    id: number;
    updated_at: number;
    created_at: number;
    name: string;
    brand: string;
    url: string;
    price: number;
    price_unit: string;
    count: number;
    description: string;
    attributes: {
        color: string;
        size: string;
    };
}
