// This number must reflect number of images used in gallery
const GALLERY_SIZE = 24;

// load in images after the rest of content has loaded in 
window.addEventListener('load', function(){
  
  // Grabs all image tags.  This means allImages.length is (GALLERY_SIZE * 2) 1 for grid, 1 for lightbox
  var allImages= document.getElementsByTagName('img');
  
  // Size check
  console.log(GALLERY_SIZE + "code | length" + allImages.length );
  console.log(allImages[0]);
  
  for (var i=1; i<=allImages.length; i++) {
    
    // prevents code from changing the attributes of non-gallery <img> tags
    if (allImages[i].getAttribute('data-src')) {
      try {
//        allImages[i].setAttribute('src', allImages[i].getAttribute('data-src'));
        console.log("math: i%24 = " + i % GALLERY_SIZE);
        allImages[i].setAttribute('src', photoMap.get(i % GALLERY_SIZE)[0]);
        allImages[i].setAttribute('alt', photoMap.get(i % GALLERY_SIZE)[1]);
      } catch(e) {
        console.error("Image " +  i + " ERROR: " + e);
      }
    }
  }
}, false)

// MAP [key, value]
//     [1, [url, description]
var photoMap = new Map([[
  1 , [
    "https://lh3.googleusercontent.com/TETc4Tb-4SCq7emfgUKDrkQTEH1706_49w7x4Nc_l1B5tmygS9D0RKg9txRYIGHAmNt1akoqyVG2d-YVykDNLDHu7a5AyHn4zdet-vM8iwHbzG52pC8KzHjbS_2iXp_Is_5PfMlgWg=w2400"
    ,
    "Iceland portrait"
  ]
],[
  2, ["https://lh3.googleusercontent.com/0rKANsq6E3i12L9kZwENTPL2B-YTuL96yEw1bMyfvIK-VW5SQg7tTQ0gcwmQoATD8sVkLXMXLDBQMW3k65tjE4mJHM9pyQLz0VctN0nmVb1QB9AJhH0Tn2eTs6Tk5zJTrPsUC94F9A=w2400"
      ,
      "Bird landing"
     ]
],[
  3 , [
    "https://lh3.googleusercontent.com/GDaq0Ijd4_1HFd40cRzbYl_I7D1ZYPIew5E1fUudX50PzZd92Hm0fOEDvB80bVSrUF7MWUcDU-A_s3xbO5Zj87IV_LXTHzxmYY97Z_t7qk43u3dwFDkm9dOYIzWjj6adEdm5pSQ4Cg=w2400"
    ,
    "New Hampshire Shed"
  ]
],[


]]);