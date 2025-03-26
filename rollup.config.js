import terser from '@rollup/plugin-terser';

export default {
    input: 'src/leaflet-burgermenu.js',
    output: [
        {
            file: 'dist/leaflet-burgermenu.umd.js',
            format: 'umd',
            name: 'leaflet-burgermenu',
            sourcemap: true,
            globals: {
                leaflet: 'L'
            }
        },
        {
            file: 'dist/leaflet-burgermenu.umd.min.js',
            format: 'umd',
            name: 'leaflet-burgermenu',
            sourcemap: true,
            globals: {
                leaflet: 'L'
            },
            plugins: [
                terser()
            ],
        }
    ]
};
