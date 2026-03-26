export interface Game {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
    video?: string;
    category?: string[];
    isTopNewRelease?: boolean;
    isFeatured?: boolean;
    isTrending?: boolean;
    isUnder10?: boolean;
    isComingSoon?: boolean;
    platforms?: string[];
    developer?: string;
    publisher?: string;
    releaseDate?: string;
    screenshots?: string[];
    subQuote?: string;
    discount?: string;
    originalPrice?: string;
    requirements?: {
        minimum: string[];
        recommended: string[];
    };
}
