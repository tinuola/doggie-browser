//----- jQuery Javascript---- //
// get the select box element and store it as '$selecBox'
var $selectbox = $('#selectbox')
// get the image container and store it as '$imageContainer'
var $imagecontainer = $('.images')
// get the current image selection
var selection = $selectbox.data('selected')

// listen for when the selection changes...
// when it does change, run our `changeImageSelection` function
$selectbox.on('change', changeImageSelection)

function changeImageSelection() {
  // change the `selection` variable to the selected option
  selection = $selectbox.val()
  // add a '.loading' class to the $imageContainer
  $imagecontainer.addClass('loading')
  // clear the $imageContainer's selected option
  $imagecontainer[0].dataset.selected = null

  // set a timout of 1.5 seconds
  setTimeout(function () {
    // remove the '.loading' class from $imageContainer
    $imagecontainer.removeClass('loading')
    // add the currently selected option to $imageContainer
    $imagecontainer[0].dataset.selected = selection
  }, 1500)
}

// ----- Plain Javascipt ---- //
// const selectbox = document.getElementById("selectbox");
// const imagecontainer = document.querySelector(".images");
// let selection = selectbox.dataset.selected;

// selectbox.addEventListener("change", e => {
//   selection = selectbox.value;
//   imagecontainer.classList.add("loading");
//   imagecontainer.dataset.selected = "";

//   setTimeout(() => {
//     imagecontainer.classList.remove("loading");
//     imagecontainer.dataset.selected = selection;
//   }, 1500);
// });
