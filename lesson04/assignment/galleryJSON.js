// Create HTML code from galleryJSON

const galleryJSON = '[{"id": "1011","author": "Roberto Nickson","width": "5472","height": "3648","url": "https://unsplash.com/photos/7BjmDICVloE","download_url": "https://picsum.photos/id/1011/5472/3648.jpg"}{"id": "1015","author": "Alexey Topolyanskiy","width": 6000,"height": 4000,"url": "https://unsplash.com/photos/-oWyJoSqBRM.jpg",
  "download_url": "https://picsum.photos/id/1015/6000/4000.jpg"},{"id": "1016","author": "Philippe Wuyts","width": 3844,"height": 2563,"url": "https://unsplash.com/photos/_h7aBovKia4.jpg","download_url": "https://picsum.photos/id/1016/3844/2563.jpg"},{"id": "1018","author": "Andrew Ridley","width": 3914,"height": 2935,"url": "https://unsplash.com/photos/Kt5hRENuotI.jpg","download_url": "https://picsum.photos/id/1018/3914/2935.jpg"},{"id": "1019","author": "Patrick Fore","width": 5472,"height": 3648,"url": "https://unsplash.com/photos/V6s1cmE39XM.jpg","download_url": "https://picsum.photos/id/1019/5472/3648.jpg"},{"id": "1022","author": "Vashishtha Jogi","width": 6000,"height": 3376,"url": "https://unsplash.com/photos/bClr95glx6k.jpg","download_url": "https://picsum.photos/id/1022/6000/3376.jpg"}]'

const gallery = JSON.parse(galleryJSON)

const container = document.querySelector('#gallery')

// Loop through all elements of the photo gallery
let galleryList = gallery.forEach(function(el) {

  // Build HTML
  let list = document.createElement('a')
  list.innerHTML = `
    <
  `
})
