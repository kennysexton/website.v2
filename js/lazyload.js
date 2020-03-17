// load in images after the rest of content has loaded in 
window.addEventListener('load', function(){
  var allimages= document.getElementsByTagName('img');
  for (var i=0; i<allimages.length; i++) {
    if (allimages[i].getAttribute('data-src')) {
      //allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
      allimages[i].setAttribute('src', photoMap.get(i)[0]);
      //allimages[i].setAttribute('alt', photoMap.get(i)[1]);
    }
  }
}, false)

// MAP [key, value]
//     [1, {url, description}]

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