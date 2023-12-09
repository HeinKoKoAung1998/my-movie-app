import { Result } from "./result";

export interface MovieResponse {
    dates?: Date;
    page?: number;
    results?: Result[];
    total_pages?: number;
    total_results?: number;
}
