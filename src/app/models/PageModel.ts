import { Enemy } from "./Enemy";

export interface PageModel {
    content: Enemy[];
    pageTotal: number;
    pageSize: number;
    pageNumber: number;
    enemyTotal: number;
    enemyOffset: number;
    hasNext: boolean;
    hasPrevious: boolean;
}