## Script
run `npm run devServer` to start the app.


## Misc
I ran a lighthouse audit on the application. BEM/SCSS is the approach used for styling and careful consideration is giving to web accessibility standards.

Markup : * Test Result
              * Performance: 53%
              * Accessibility 100%
              * Best Practices 93%
              * SEO 90%
## 
In regards to the performance issue, this stems from using a thirdparty fonts requiring download, the amount of json/images data being recieved and processed per request to the api. 
Since its a small application, no external state management library was used. All the application assets resides in the app folder and splitted into three main part:
Markup :  > Application Logic
          >> Images: This folder contains the loader svg a photo used during dev
          >> Script: This folder contains all the JS code written for the app
          >> Styles: This contains all the styling code written for the app

## 
The app was set up to deploy to heroku cloud servers


