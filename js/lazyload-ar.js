// load in images after the rest of content has loaded in 
window.addEventListener('load', function(){

  // Grabs all gallery photos, each photo shows up twice 1 for grid, 1 for lightbox
  var allImages= document.getElementsByClassName('photo');

  // Get gallery size
  var gallerySize = allImages.length/2
  console.log("Number of images in gallery: " + gallerySize ) 

  // Loop through 
  for (var i=1; i<=allImages.length; i++) {
    try {
      // Set src tag
      allImages[i-1].setAttribute('src', photoMap.get(getPhotoMapValue(i, gallerySize))[0]);

      // Set alt tag
      allImages[i-1].setAttribute('alt', photoMap.get(getPhotoMapValue(i, gallerySize))[1]);
    } catch(e) {
      console.error("Image: " +  i + " ERROR: " + e);
    }

  }
}, false)

// fix for last gallery value (ex. 24 % 24 == 0)
function getPhotoMapValue(i, gallerySize){
  if(i== gallerySize || i== gallerySize*2){
    return gallerySize
  } else {
    return i % gallerySize
  }

}

// MAP [key, value]
//     [1, [url, description]
var photoMap = new Map([[
  1 , [
    "https://lh3.googleusercontent.com/qSIa4FVmp-TQZdCSqUu97U5VNr_YKkwAF7grbCYKqpk5HozUfshtmgHjkxwwNjA-S4LbqZAe1PoFSHEPowykZz72waN7OPlEDkOKE_cr8OXIDJgevfFL05XdCfkcGCrxM7CNQiW4_Q=w2400"
    ,
    "Shot of a car driving up a road in Colorado"
  ]
],[
  2, [
    "https://lh3.googleusercontent.com/Becb2Wt6uRrbdgEPgZ8BqtvppxQ4xnzLqBe32Vl9lVjMcwSCRwuwB_-0Ema8eaiQnKxHUFdopf7mksNVKVBmcXYUfOSsPCK1FKAGmWD7W_q2rv1MrvYyo1FCj2tyJNVm6wI1NbB0qw=w2400"
    , 
    "Foggy day in Philadelphia"
  ]
],[
  3 , [
    "https://lh3.googleusercontent.com/t6zkiuAlQBDcMXbvCXdtWSunEp0Bvhdp9RNUECZiGoGaElvBXpKpAJ8aFeEkN3x-L9hFKcREIKTMRDz_dXg0jXgEudVJQejMb3O_98zEjdaaAnBoqhmO2IeVJmSaFN91-V4N4TbEog=w2400"
    ,
    "Natural rock arch in Colorado"
  ]
],[
  4 , [
    "https://lh3.googleusercontent.com/Q6MK9XuVmp0Ooq50XUCVhabBCaugn_wSuVl1dBg-VfVsuklgwjyXuJld4reLaLY4TkJl3L_NpY_2tYuyv7jrIfqAT5n7VxGm_pWUc9xfESa9RkItdO9H4SZM0w2p40g28NSawNAqDw=w2400"
    ,
    "Sun going down over the snowy mountains of Iceland"
  ]
],[
  5 , [
    "https://lh3.googleusercontent.com/saHpfswqK-BaZPj9XB3MYwXz4QczXdFByGTYyWQtUSnUd4tdpsD_3oaqFf3TBAlah4iQ0_zuy-0wij2MBIJ5GdlnpCvF-0p0h42_oNkfRrjXER5bvCnke7kwzJkIsbBt8dGWGC0buQ=w2400"
    ,
    "Over University of Colorado Boulder campus"
  ]
],[
  6 , [
    "https://lh3.googleusercontent.com/_V9bgBjf06sAiOt-gr3LPAnr1wKrjXsJEuMmTev-uZBml_2GMSMAQttqbex9ajXZ1CV1SRHZO9uPKi0-Olxt-A4ijYHTAn7C25IaZl4K8xwaLqc7JU6r4ehAnz6qmsZ6_-BQTnh79w=w2400"
    ,
    "Overhead shot of an amusement park"
  ]
],[
  7 , [
    "https://lh3.googleusercontent.com/4RdINpYeWqGs3PnWyAcBx5Dkp8C8tcI4xJoDqnXLV43Zr0yLAPs5lBPNbd51jKmN8_gp8Ths525jOkf9GYWavt4YZiPMWQ4L27rF4NqCZLEg1Dm4iNbDsdlH74hFm1n4ku8MhJlz8A=w2400"
    ,
    "Denver skyline"
  ]
]
                       ]);