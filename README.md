# Tech Blog

## Description 

This project is a Blog site meant for users to talk about tech related news. It has account verification and all posts/comments are stored in a database so they can be viewed at any time.

## Table of Contents 

* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Documentation](#documentation)

## Usage 

After cloning the repository you will need to create a new file named:

`.env`

In this file you will need to enter the following lines:

```js script
DB_NAME='name of your new database'
DB_USER='your username for mysql'
DB_PW='your password for mysql'
```

After that you will need to run the following:
  
`npm i`

Next you need to login to mysql to create the database:

`mysql -u root -p`

Enter your mysql password

`source db/schema.sql`

`quit`   

After that you are ready to start the server with:

`npm start`


## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Documentation

Live Deployed Application: [View Application](ADRIAN ADD LINK TO HEROKU HERE "Live Deploy")      

![Screenshot](ADD LINK TO SCREENSHOT OF APPLICATION HERE "Proof of Application")      
