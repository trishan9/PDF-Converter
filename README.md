# PDF Converter
 It is a backend system where you can upload HTML files, and get a converted PDF to your email address.

## Packages Used:
- **multer**
- **nodemailer**
- **nodemailer-sendgrid-transport**
- **puppeteer**

## Folder Structure
 - `public` - it is the directory where we add static files.
 - `src/config` - all the environment variables are conifgured here.
 - `src/lib` - javascript utility functions by using external libraries.
 - `src/middlewares` - all the express middlewares contains here.
 - `src/modules` - all the modules (routes and controllers) contains here.
 - `src/utils` - pure javascript utility functions.

## Run Locally

Clone the project

```bash
git clone git@github.com:trishan9/PDF-Converter.git
```

Go to the project directory

```bash
  cd PDF-Converter
```

Install dependencies

```bash
  yarn
```

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`SENDGRID_API_KEY`


Start the server

```bash
  yarn start
```