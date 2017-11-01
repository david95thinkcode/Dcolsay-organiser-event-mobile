import { Account } from "./account.model";

export class Event {
    id: number;
    title: string;
    description: string;
    location: string;
    start_date: string; // Date
    end_date: string; // Date
    on_sale_date: string; // Date
    organiser_id: Account;

    bg_type: string;
    bg_color: string;
    bg_image_path: string;

    sales_volume: number;
    organiser_fees_volume: number;
    organiser_fee_fixed: number;
    organiser_fee_percentage: number;
    
    social_share_text: string;
    social_show_facebook: boolean;
    social_show_linkedin: boolean;
    social_show_twitter: boolean;
    social_show_email: boolean;
    social_show_googleplus: boolean;
    is_live: boolean;    
}