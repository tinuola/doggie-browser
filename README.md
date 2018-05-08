# Doggie Browser
A sample web app for browsing dog breeds, using [Dog.CEO's](https://dog.ceo/) Dog API.

## Live Demo
* [Doggie Browser](https://tinuola.github.io/doggie-browser/)

## Local Installation
* Clone or download the project repo
* Terminal ==> npm install _(in project directory)_
* Terminal ==> live-server _(in project directory)_

### Tooling
* JavaScript
* jQuery _(dependency for Chosen plugin)_
* [Chosen.js](https://harvesthq.github.io/chosen/) _(for search/selection functionality)_
* [Lozad.js](https://github.com/ApoorvSaxena/lozad.js) _(for lazy loading)_
* Live-Server _(for local development)_
* [GumGum Design System](http://ds.gumgum.com/stable/) _(for light styling: menu, image grid)_

### Features
* Dropdown menu 
  * Scroll to browse breed list
  * Type breed name using autocomplete
* Displays images and search result count
* Changing selected breed displays a new set of results
* Scroll to top function
* Mobile and tablet responsive 

### Issues
* Search results for some breeds are large (>300)
  * With results greater than 300, preloader plugins seem to cause page jumpiness
  * Tried: _jQuery Lazy_, _Lazy Load_, _Lozad_
  * Current workaround: Only display the first 300 images 
  * Adding to Icebox: Implement a more efficient results handling system: <br> 
    _Display n number of images on initial load, then on-scroll/on-click load more images_

### Icebox
* Filter results by sub-breed
* Load 'more images' on scroll
* Display more images in a row
* Click to copy image url
  * Image 'cart'?
* Port project to React