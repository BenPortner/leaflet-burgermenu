# 🍔 Leaflet Burgermenu Plugin

A lightweight [Leaflet](https://leafletjs.com/) plugin that adds a burger menu with nested submenus to the map interface.
Hovering over menu items reveals submenus, and clicking items can trigger custom actions.

**[Example here.](https://benportner.github.io/leaflet-burgermenu/)**

---

## 📦 Features

- Adds a burger menu control to the Leaflet map
- Supports nested submenus
- Hover to open submenus
- Define custom click handlers for menu items
- Easily style with [CSS](dist/leaflet-burgermenu.css)

### 💡 Notes

- Submenus open on **hover**
- Click actions only work on **leaf** menu items (with `onClick`)
- Deeply nested menus work, but may need CSS adjustments

---

## 🔍 Why another Leaflet control plugin?

Leaflet already has a couple of plugins to add menus to its maps. Here are the existing alternatives and what prevented me from using them for my application:
- [L.cascadeButtons](https://github.com/clavijojuan/L.cascadeButtons): provides nested buttons but it is not clear from the documentation how to replace the icons with text to turn this into an actual menu
- [L.EasyButton](https://github.com/CliffCloud/Leaflet.EasyButton): simple to use but not designed for nested buttons / sub-menus
- [Leaflet.BootstrapDropdowns](https://github.com/mfhsieh/leaflet-bootstrap-dropdowns/): no easy way to create sub-menus; not dependency-free
- [Leaflet.Control.Custom](https://github.com/yigityuce/Leaflet.Control.Custom): highly customizable but no easy way to integrate sub-menus
- [Leaflet.Control.Select](https://github.com/adammertel/Leaflet.Control.Select): provides easy sub-menus but only an `onChange` method is provided, i.e. clicking the already-selected menu item has no effect

---

## 🧪 Usage

1. Include `leaflet` stylesheet in your HTML:
   ```html
   <link
     rel="stylesheet"
     href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
   />
   ```
2. Include `leaflet-burgermenu` stylesheet:
   ```html
   <link
     rel="stylesheet"
     href="https://unpkg.com/leaflet-burgermenu@latest/dist/leaflet-burgermenu.css"
   />
   ```
3. Include `leaflet` Javascript as a script tag:
   ```html
   <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
   ```
4. Include `leaflet-burgermenu.js`:
   ```html
   <script src="https://unpkg.com/leaflet-burgermenu@latest/dist/leaflet-burgermenu.umd.min.js"></script>
   ```
5. Add the Burger Menu Control:
   ```js
   L.control.burgerMenu({
     title: "main",
     menuItems: [
       {
         title: "level 0 item 1",
         onClick: () => {
           alert("You clicked level 0 item 1.");
         },
       },
       {
         title: "level 0 submenu",
         menuItems: [
           {
             title: "level 1 item 1",
             onClick: () => {
               alert("You clicked level 1 item 1.");
             },
           },
         ],
       },
     ],
   }).addTo(map);
   ```

---

## 🧩 Options

| Option             | Type       | Default     | Description                                |
|--------------------|------------|-------------|--------------------------------------------|
| `position`         | `string`   | `'topleft'` | Leaflet control position                   |
| `menuIcon`         | `string`   | `'≡'`       | Icon for the burger button                 |
| `subMenuIndicator` | `string`   | `'⊳'`       | Submenu indicator                          |
| `title`            | `string`   | `'Menu'`    | Tooltip/title for the burger button        |
| `menuItems`        | `array`    | `[]`        | (Nested) array of menu items               |

---

## 📁 Menu Structure

Menu items are passed in as an array. Each item can have:

- `title`: **required** string
- `onClick`: function to call on click (optional)
- `menuItems`: array of **sub-items** (optional)

Supports infinite nesting (though typically 2–3 levels deep is ideal).

---

## 📜 License

MIT © Benjamin W. Portner
