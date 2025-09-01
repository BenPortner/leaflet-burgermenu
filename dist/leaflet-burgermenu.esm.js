import { Control, DomUtil, DomEvent } from 'leaflet';

// leaflet-burgermenu.js
// A Leaflet plugin that adds a burger menu with submenus
// Author: Benjamin W. Portner
// License: MIT


class BurgerMenuControl extends Control {

    constructor(options) {
        const defaultOptions = {
            position: 'topleft',
            menuIcon: '&#9776;', // Burger icon
            subMenuIndicator: '⊳',
            title: 'Menu',
            menuItems: [] // [{ title: 'Main', subItems: [{ title: 'Sub1', onClick: fn }, ...] }]
        };
        options = { ...defaultOptions, ...options };
        super(options);
    }

    _generateSubMenus(item, itemEl, level) {
        if (item.menuItems && item.menuItems.length) {
            if (level > 0) {
                itemEl.textContent += ` ${this.options.subMenuIndicator}`;
            }
            const classList = `burger-menu level-${level} hidden`;
            const subMenu = DomUtil.create('div', classList, itemEl);
            DomEvent.on(itemEl, 'mouseover', function (e) {
                subMenu.classList.remove('hidden');
            });
            DomEvent.on(itemEl, 'mouseout', function (e) {
                subMenu.classList.add('hidden');
            });
            item.menuItems.forEach(subItem => {
                const classList = `burger-menu-item level-${level}`;
                const subItemEl = DomUtil.create('div', classList, subMenu);
                subItemEl.textContent = subItem.title;
                this._generateSubMenus(subItem, subItemEl, level + 1);
            });
        } else if (typeof item.onClick === 'function') {
            DomEvent.on(itemEl, 'click', function (e) {
                e.stopPropagation();
                item.onClick(e);
            });
        }
    }

    onAdd(map) {
        const container = DomUtil.create('div', 'leaflet-control-burgermenu');
        DomEvent.disableClickPropagation(container);

        const button = DomUtil.create('div', 'burger-button', container);
        button.innerHTML = this.options.menuIcon;
        button.title = this.options.title;

        this._generateSubMenus(this.options, container, 0);

        return container;
    }
}

export { BurgerMenuControl };
//# sourceMappingURL=leaflet-burgermenu.esm.js.map
