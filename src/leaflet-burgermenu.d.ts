import { Control } from 'leaflet';

declare module 'leaflet-burgermenu' {
    export class BurgerMenuControl extends Control {
        constructor(options?: BurgerMenuControlOptions);
    }

    export interface MenuItemWithClick {
        title: string;
        onClick: () => void;
    }

    export interface MenuItemWithSubItems {
        title: string;
        menuItems: MenuItem[];
    }

    export type MenuItem = MenuItemWithClick | MenuItemWithSubItems;

    export interface BurgerMenuControlOptions {
        position?: 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
        menuIcon?: string;
        subMenuIndicator?: string;
        title?: string;
        menuItems?: MenuItem[];
    }
}