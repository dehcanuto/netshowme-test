export interface VideoProps {
    category: number | string;
    created_at: string;
    description: string;
    hls_path: string;
    id: string;
    likes: number;
    site_id: number;
    thumbnail: string;
    title: string;
    views: number;
    my_list: boolean;
    live: boolean;
    keep_watching: boolean;
}