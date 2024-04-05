Weather App Documentation

Overview
The Weather App is a web application that allows users to get weather information for a specific city. It fetches weather data from an API based on the user's input and displays it on the user interface.

Frontend (React.js):

The frontend application built with React.js.
It allows users to search for weather information by entering the name of a city.
Upon searching, it fetches weather data from the backend API and displays it on the user interface.
The UI includes elements such as input fields, search buttons, weather icons, temperature, humidity, and condition text.

Backend (Django):

The backend is developed using Django, a Python web framework.
It provides a RESTful API endpoint /getweather/<city> to fetch weather data for a specific city.
The API retrieves weather information from a database, which is populated with data from a CSV file containing weather data for various regions.

Functionality:

When a user enters a city name and clicks the search button, the frontend sends a request to the backend API.
The backend processes the request, fetches weather data for the specified city from the database, and returns it in JSON format.
The frontend receives the weather data and updates the UI with the retrieved information, displaying temperature, humidity, and weather conditions for the selected city.

Features
Users can enter a city name to get weather information.
Weather information includes temperature, condition, humidity, and feels-like temperature.
The application uses React.js for the frontend and Django for the backend.
Data is fetched from a weather API and stored in a MySQL database.
The frontend communicates with the backend using RESTful APIs.

Technologies Used

Frontend:

React.js,
HTML,
CSS,
JavaScript

Backend:

Django,
MySQL,
Django REST Framework

Project Structure:

frontend/: Contains the React.js frontend code.

src/: Contains the source code files.
components/: Contains reusable React components.
Assets/: Contains images used in the application.
WeatherApp.jsx: Main component for the Weather App.
WeatherApp.css: Stylesheet for the Weather App component.

backend/: Contains the Django backend code.

main_file/: Django project folder.
Weather/: Django app folder.
models.py: Contains Django models for storing weather data.
serializer.py: Contains serializers for converting Django models to JSON.
views.py: Contains Django views for handling API requests.
urls.py: Contains URL patterns for routing API requests.
IndianWeatherRepository.csv: CSV file containing weather data.

