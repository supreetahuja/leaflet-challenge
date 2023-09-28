// Will use Fetch function for this earthquake data
fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson')
    .then((response) => response.json())
    .then((data) => {
        let map = L.map('map', {
            center: [0, 0],
            zoom: 1.5,
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

        data.features.forEach((earthquake) => {
            let coords = earthquake.geometry.coordinates; // [longitude, latitude]
            let mag = earthquake.properties.mag; // magnitude as mag
            let depth = coords[2]; // Third coordinate is taken as Depth

            let markerOptions = {
                radius: mag * 2, // We can Adjust the Marker size by Mutiplier value
                fillColor: getColor(depth),
                color: '#000',
                fillOpacity: 0.8,
            };

            L.circleMarker(coords, markerOptions)
                .bindPopup(`<strong>Magnitude:</strong> ${mag}<br><strong>Depth:</strong> ${depth} km`)
                .addTo(map);
        });

        let legend = L.control({ position: 'bottomright' });
        legend.onAdd = function () {
            let div = L.DomUtil.create('div', 'info legend');
            let labels = ['<strong>Legend</strong>'];
            let colors = ['#0f0', '#ff0000', '#0000ff', '#ffff00', '#ff00ff', '#000'];
            let views = ['-10 to 10', '10 - 30', '30 - 70', '70 - 100', '>100', '<-10'];

            for (let i = 0; i < views.length; i++) {
                labels.push(
                    `<i class="circle" style="background:${colors[i]}"></i> ${views[i]}`
                );
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };
        legend.addTo(map);

        function getColor(depth) {
            if (depth >= -10 && depth <= 10) return '#0f0';
            if (depth > 10 && depth <= 30) return '#ff0000';
            if (depth > 30 && depth <= 70) return '#0000ff';
            if (depth > 70 && depth <= 100) return '#ffff00';
            if (depth > 100) return '#ff00ff';
            return '#000';
        }
    })
    //.catch((error) => {
        //console.error('Error fetching earthquake data:', error);
   // });
