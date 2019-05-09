# Upcoming Movies

Webapp for cinephiles and movie hobbyists (ArcTouch Code Challenge)


## Architecture

* [NPM](https://www.npmjs.com/get-npm)
* [Angular CLI](https://cli.angular.io/)
* [Angular 7](https://angular.io/)
* [Angular Material](https://material.angular.io/)
* [Google Fonts](https://fonts.google.com/) (fonts and icons)
* [Unsplash](https://unsplash.com/photos/atsUqIm3wxo) (hero image)


## Assumptions

* The API will be available
* The API will allow [CORS][CORS] from this client


## Build instructions

1. Set up the `apiUrl` environment variable in `/environments/{environment}.ts`
1. Start the server using `ng serve`


## Third-party libraries

Besides Angular Material, this project also makes use of:

[ngx-infinite-scroll](https://www.npmjs.com/package/ngx-infinite-scroll):
allows the client to request more content when getting close to the end of the page

[ngx-page-scroll](https://www.npmjs.com/package/ngx-page-scroll):
allows the client to scroll the page automatically, for more fluid user experience


## Demo

You can try a [demo](https://upcoming-movies-client.herokuapp.com/) running on Heroku *(please notice that the first request might take quite long to return, since Heroku puts the app to sleep from time to time)*.


[CORS]: https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing
