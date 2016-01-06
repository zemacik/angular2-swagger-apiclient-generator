# angular2-swagger-apiclient-generator
Angular 2 API client generator from swagger json

# Description
This project will generate http client API service class in typescript from your swagger 2.0 file.

# Disclaimer
This project is not yet stable, nor working properly
I'm still working on it.

# How to get it working

## Installation
1. `npm install angular2-swagger-apiclient-generator`
1. or get it from github

## Usage

From commandline run:
```
a2apigen -s [yopur/path/to/swagger.json]
```

or
```
a2apigen -u [url/of/your/swagger.json]
```

## Example usage:

This command will generate API client described in swagger.json file to ./out folder
```
a2apigen -s .\tests\apis\swagger.json -o ./out
```
