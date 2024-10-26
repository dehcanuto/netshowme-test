export interface SlideItem {
    category: string;
    title: string;
    description: string;
    path: string;
}

export interface SlideBannerPropType {
    slides: SlideItem[];
}