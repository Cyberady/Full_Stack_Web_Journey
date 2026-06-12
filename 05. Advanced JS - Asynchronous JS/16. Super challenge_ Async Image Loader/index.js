function getImagePromise(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const img = new Image()
      img.src = url
      img.alt = 'scenic image'

      img.addEventListener('load', () => resolve(img))

      img.addEventListener('error', () =>
        reject(new Error(`Failed to load image: ${url}`))
      )
    }, 500)
  })
}

const images = [
  'https://scrimba.com/links/advancedjs-resources-images-scenic1',
  'https://scrimba.com/links/advancedjs-resources-images-scenic2',
  'https://scrimba.com/links/advancedjs-resources-images-scenic3',
]

async function preloadImages(imageUrlsArr) {
  const imgContainer = document.getElementById('img-container')
  const uploadContainer = document.getElementById('upload-container')

  uploadContainer.style.display = 'block'
  imgContainer.innerHTML = ''

  try {
    // 1. Create array of promises
    const promises = imageUrlsArr.map(url =>
      getImagePromise(url)
    )

    // 2. Wait for all promises
    const results = await Promise.all(promises)

    // 3. Success
    console.log('All images loaded successfully!')

    uploadContainer.style.display = 'none'

    results.forEach(img => {
      imgContainer.appendChild(img)
    })
  } catch (error) {
    console.error(error)
    uploadContainer.style.display = 'none'
  }
}

document
  .getElementById('submit-imgs')
  .addEventListener('click', () => preloadImages(images))

/*
Challenge:
 1. Create an array of prmoises using getImagePromise.
 2. Save the results of calling all of those promises 
    in one go to a const 'results'.
 3. If the promise resolve:
    - Log "All images loaded successfully!" to the console.
    - Hide 'upload-container''
    - Iterate over the results and render then to img-container.
 4. If the promise rejects:
    - Catch and log the error to the console.

*/
