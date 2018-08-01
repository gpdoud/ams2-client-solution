# Asset Management System v2 (Ams2)

The Asset Management System version 2 is a project that originated in the techies-for-good meetup group. The Deerfield Township Administration group said they needed help managing their assets which was done on paper.

The second .Net Boot Camp decided they wanted a real-world application to work on so they took on the task of building the asset management system.

## Building the Ams2

Ams2 is contained in two GitHub repositories. They are:

    [Angular/TypeScript front-end](https://github.com/gpdoud/ams2-client-solution)
    [CSharp/EF/MVC/WebAPI back-end](https://github.com/gpdoud/ams2-server-solution)

After cloning both of these project, start with the back-end server.

### Running the back-end

The project requires Visual Studio (community edition is ok) and SQL Server (Express edition is ok) be installed. The web.config contains the connection string. Verify that the server parameter points to your server instance (localhost\sqlexpress). If you have a different SQL Server edition installed, adjust the server parameter. 

    * Open the .sln file
    * Open the Package Manager Console window. Click the button to install the required packages.
    * Type `update-database` and press enter
    * Click the IIS Express (Chrome) button to start the back-end. (you should see a browser page with a URL of localhost:44444)

### Running the front-end

This project requires [NodeJs](https://nodejs.org/en/). Install the LTS version if you don't currently have node installed.

    * Navigate to the project root
    * Type `npm install` to download all the npm packages needed
    * Type `ng serve -o` to start the front-end

## Support

Support for Ams2 is provided in the front-end GitHub repository. Bugs or enhancement requests should be intered as an Issue.

## Miscellaneous

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

