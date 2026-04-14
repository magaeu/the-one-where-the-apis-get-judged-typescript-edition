export interface Category {
    id: number;
    name: string;
}

export interface Tag {
    id: number;
    name: string;
}

export interface Pet {
    id: number;
    category?: Category;
    name: string;
    photoUrls: string[];
    tag?: string;
    status?: 'available' | 'pending' | 'sold';
}