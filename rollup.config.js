import terser from '@rollup/plugin-terser';

export default {
    input: 'src/leaflet-burgermenu.js',
    external: ['leaflet'],
    output: [
        {
            file: 'dist/leaflet-burgermenu.esm.js',
            format: 'esm',
            name: 'leaflet-burgermenu',
            sourcemap: true,
        },
        {
            file: 'dist/leaflet-burgermenu.esm.min.js',
            format: 'esm',
            name: 'leaflet-burgermenu',
            sourcemap: true,
            plugins: [
                terser()
            ],
        }
    ]
};
