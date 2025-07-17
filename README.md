Integration Of web frontend PHP-Ajax Spatial Cities Demo
This project demonstrates how to connect a web frontend (using OpenLayers and Bootstrap) with a PostgreSQL/PostGIS database using PHP and AJAX. Users can view, add, and interact with city features on a map.

Features
Interactive map with OpenLayers
Display cities stored in a PostgreSQL/PostGIS database
Add new cities by clicking on the map
AJAX-based communication between frontend and backend
Bootstrap modals for user interaction
Included Files
index.html — Main frontend page with map and modals
index.js — JavaScript logic for map, AJAX, and UI
db.php — Database connection settings
cities.php — PHP endpoint to fetch city data as GeoJSON
save_city.php — PHP endpoint to save new city data
Requirements
PHP (tested with 7.x+)
PostgreSQL with PostGIS extension
Web server (e.g., XAMPP)
Internet connection for CDN libraries
Setup
Clone the repository:

git clone https://github.com/yourusername/php-ajax-spatial-cities-demo.git
cd php-ajax-spatial-cities-demo
Database:

Create a PostgreSQL database named spatialdata.
Enable the PostGIS extension:
CREATE EXTENSION postgis;
Create the allcities table:
CREATE TABLE allcities (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  geom geometry(Point, 4326)
);
Configure database credentials:

Edit db.php if your PostgreSQL username, password, or host differs.
Run the project:

Place the files in your web server’s root directory (e.g., c:\xampp\htdocs\php).
Start your web server and PostgreSQL.
Open http://localhost/php/index.html in your browser.
Usage
Click Add new feature to add a city.
Click on the map, enter a city name, and save.
Existing cities are shown as features on the map.
Click a city to view its name.
License
MIT

Credits
OpenLayers
Bootstrap
jQuery
