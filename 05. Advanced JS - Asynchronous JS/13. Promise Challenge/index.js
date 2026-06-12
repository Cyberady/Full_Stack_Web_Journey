  /*
  Challenge:
  1. Return a new promise. The promise should:
    - Create a new image and assign the incoming url
      to its src attribute. (Use the Image constructor
      for this!)
    - Listen out for a load event. If a load event is
      detected, the promise should resolve, providing the 
      image element.
    - Listen out for an "error" event. If an error event is
      detected, the promise should reject, giving the 
      message "img has NOT loaded"
  */

function preLoadImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = url
    img.alt = 'a beautiful scene'
    img.addEventListener('load', () => resolve(img))
    img.addEventListener('error', () => reject('img has NOT loaded'))
  })
}

try {
  const result = await preLoadImg('https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg')
  console.log(result)
  document.getElementById('img-container').appendChild(result)
} catch (error) {
  console.error(error)
}