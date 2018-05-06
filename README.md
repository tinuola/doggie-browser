# Doggie Browser
A sample web app for browsing dog breeds, using the [Dog.CEO API](https://dog.ceo/).

## Live Demo
* [Doggie Browser](https://tinuola.github.io/doggie-browser/)

## Local Installation
* Clone or download the project repo
* Terminal ==> npm install _(in project directory)_
* Terminal ==> live-server _(in project directory)_

### Tools Used
* JavaScript
* jQuery _(a dependency for Chosen)_
* [Chosen.js](https://harvesthq.github.io/chosen/) _(for search/selection functionality)_
* Live-Server _(for local development)_
* [GumGum Design System](http://ds.gumgum.com/stable/) _(Menu styling, Image grid)_

### Features
* Dropdown menu 
  * Scroll to browse breed list
  * Type breed name using autocomplete
* Displays images and search result count
* Changing selected breed displays a new set of results
* Scroll to top function
* Mobile and tablet responsive 

### Pending / Wishlist / Icebox
* Filter results by sub-breed
* Load images on scroll
  * Issue: Search results are often huge. Would like to implement a more efficient results handling system: 
    * _Display n number of images on initial load, then on scroll load more images_
* Display more images in a row
* Click to copy image url
  * Image 'basket'
* Port project to React