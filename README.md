# leaflet-challenge

# Earthquake Visualization with Leaflet

This project uses Leaflet to create an interactive map that visualizes earthquake data obtained from the USGS (United States Geological Survey) Earthquake API. The map displays earthquake locations, magnitudes, and depths, allowing users/clients to explore recent earthquake activity.

## Getting Started

To run this project, follow these steps:

1. Clone the repository to your local machine:

   git clone https://github.com/supreetahuja/leaflet-challenge.git

Open the index.html file in a web browser.

The map will load, displaying earthquake markers with varying sizes and colors based on magnitude and depth.

Features
Interactive map with earthquake markers.
Marker size reflects earthquake magnitude.
Marker color indicates earthquake depth.
Popup information contains Magnitude and Depth for each earthquake marker.
Legend providing context for marker colors and depth ranges.
Use of Leaflet for map rendering.

Map Legend:
The legend on the bottom right corner of the map provides information about the marker colors and their corresponding depth ranges:

-10 to 10: Deep red markers
10 - 30: Bright yellow markers
30 - 70: Light green markers
70 - 100: Yellow markers
>100: Magenta markers
<-10: Dark gray markers

Data Source
The earthquake data is fetched in real-time from the USGS Earthquake API. The dataset used is the summary of all earthquakes from the past week.

Customization
You can customize the map appearance and behavior by modifying the JavaScript code in the logic.js file. Adjust marker sizes, colors, and depth ranges according to user preferences.

Dependencies Required:
Leaflet: Used for creating interactive maps.
d3-scale-chromatic: Used for colormap generation.

Author
Supreet Ahuja
GitHub Username: supreetahuja




