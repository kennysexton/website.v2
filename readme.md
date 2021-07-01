# [kennysexton.com](https://kennysexton.com)

I started this project in 2017 as a way to teach myself web development. The content of this site has changed many times,  even once starting from scratch [(v1)](https://kennysexton.com/website.v1/index.html).  I visit this site every so often to update content as well as make improvements to the way content is delivered.


## Responsive

![Desktop Version](https://imgur.com/hOadEP2.jpg)

![Mobile Verson](https://imgur.com/49xK5i9.jpg)

## Lazy Loading


![Lazy Loading](https://imgur.com/JZbU6x0.jpg)

The website uses lazy loading to avoid performance problems caused from the heavy network demand of loading photos.  The gallery will first load a spinner to keep the page responsive.

![Lighthouse Performance](https://imgur.com/SftVqdT.jpg)

Once all page content is loaded, then the browser will begin swapping the spinner with the appropriate photo.  This process happens fast enough that it is unnoticeable on strong network connections.

## Hosting

kennysexton.com is a static webpage hosted using github pages. The webpage can be access from both a custom URL ([kennysexton.com](https://kennysexton.com)) and the default URL of ([kennysexton.github.io](http://kennysexton.github.io/)).  More information on how that is done can be found [here](https://help.github.com/en/github/working-with-github-pages/about-custom-domains-and-github-pages).

## Lightbox

This project uses a custom lightbox built from this [lightbox tutorial](https://www.w3schools.com/howto/howto_js_lightbox.asp). This modal supports keyboard navigation using the arrow keys.

```
// Enable keyboard to navigate though lightbox
document.onkeydown = function (e) {
  switch (e.key) {
    case 'ArrowLeft': // left
      plusSlides(-1);
      break;
    case 'Escape': // esc
      closeModal();
      break;
    case 'ArrowRight': // right
      plusSlides(1);
      break;
  }
};
```
