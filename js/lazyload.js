// This number must reflect number of images used in gallery
const GALLERY_SIZE = 24;

// load in images after the rest of content has loaded in 
window.addEventListener('load', function(){

  // Grabs all image tags.  This means allImages.length is (GALLERY_SIZE * 2) 1 for grid, 1 for lightbox
  var allImages= document.getElementsByClassName('photo');

  // Size check
  console.log(GALLERY_SIZE + "code | length" + allImages.length );
  console.log(allImages.length);


  for (var i=1; i<=allImages.length; i++) {
    try {
      //        allImages[i].setAttribute('src', allImages[i].getAttribute('data-src'));
      console.log("math: i%24 = " + i % GALLERY_SIZE);
      allImages[i].setAttribute('src', photoMap.get(i % GALLERY_SIZE)[0]);
      allImages[i].setAttribute('alt', photoMap.get(i % GALLERY_SIZE)[1]);
    } catch(e) {
      console.error("Image " +  i + " ERROR: " + e);
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
  2, ["https://lh3.googleusercontent.com/Z-mVf3I3SlzZBBnIc1JoN7wwsB8tquZbuNpQpBp7HYnfHohX_CmRx2eaMhbUdXI9qDXbC8bLsU7ZHsQ3_Rg0_gLjnXoavokefwGwPZm4GvWEfDOuO94nIpon92sjDzZUKAgl-WTG8A=w2400"
      ,
      "Snowy day in Philadelphia"
     ]
],[
  3 , [
    "https://lh3.googleusercontent.com/ckLouU_yU2GYct4HwteyJI5gs_FMNRAX1Z8SMnLcazUFHEuNi4ZviPOoiytiRGgx4zO2jCM4Qvb8R-Q37TBAVQkxOKWYOgjQYw4Hze6C6TcNU5HGaClhy6s52wNysWuSOCchqUh7Vg=w2400"
    ,
    "Iceland waterfall"
  ]
],[
  4 , [
    "https://lh3.googleusercontent.com/WoohXr_N_l0M3B2f2uamcYrAw7iwgSQpnINgmWUPLSl6NhtQ4nBXzTnZatYFD2SCiVYCeeWkN2TVn6YYgN46ixyaCVRL9-HP9fPHp0OscV6p_0-Hkrf7aNOkRQwd-e5M1PG_Cyp7zw=w2400"
    ,
    "Dairy block in Devner"
  ]
],[
  5 , [
    "https://lh3.googleusercontent.com/0rKANsq6E3i12L9kZwENTPL2B-YTuL96yEw1bMyfvIK-VW5SQg7tTQ0gcwmQoATD8sVkLXMXLDBQMW3k65tjE4mJHM9pyQLz0VctN0nmVb1QB9AJhH0Tn2eTs6Tk5zJTrPsUC94F9A=w2400"
    ,
    "Bird landing on hand"
  ]
],[
  6 , [
    "https://lh3.googleusercontent.com/Ycbw5lPTpC0JIORwLsC5aTCpm9yfaTbx9PEDlyYNOkrlspXOJXammzIRsJ7PVlywWF2NtOyT9d25QqBqU2ifagzpZSleLWQmVYXew5RTfo6ZfpChas2iD2zqS_bxj9oIB70ZcCwbYw=w2400"
    ,
    "Building near the mall in Washington DC"
  ]
],[
  7 , [
    "https://lh3.googleusercontent.com/Q2c7PgzH35wFYkYulnpjYZCwIhsjhba9z13oALcQeIiI_N6YpWmhCe-AKMTAVAVNj5mZNHr8V2cgYib1CKGHXEipmqE0BPl9aCCgCLvJN6fyxsX_5yNi77tyZyxnbyZwDBYM8kZWYA=w2400"
    ,
    "Pink sidewalk sofa in Richmond VA"
  ]
],[
  8 , [
    "https://lh3.googleusercontent.com/qJaIStf2DztM65W46kppsap9-2EcaePSJZgoIszsCPROj6JxHgt-49fYiZxDwGDI8_8N1LTBqOKPCs4BbAgRVNlfGqW_IWta-k9XtHAJh_-5pz75XeTaA_3UkFxIDB_C1ijSuP2t9w=w2400"
    ,
    "Two bikers in Denver, CO"
  ]
],[
  9 , [
    "https://lh3.googleusercontent.com/Kjmocs-fUXcUs63okSIdkVuQ8cn6Z3BoHLY6e5L3TrBhpswa2jMmtuHPyKMAQaOQhPI_zw0f6luk92F4OJZS8X5W0ipkZXHvKXB3UZlrYgwjY0zB-eoFWdvhUXxhtezsu4r20sK2wQ=w2400"
    ,
    "Foggy morning outside a Bates State Park in Austin, OR"
  ]
],[
  10 , [
    "https://lh3.googleusercontent.com/O5T_ISYeDCftN0SR51XxEOeGZdOn1KMjPhJUN6wug5LAKtAvfpf68WA7JH84NOWl7cWdYO6jcD_N4mf8dxmhKqveMM8E420ky7O3Iehh61y2L19tRbDjBdyv6s2_Qmt6NHtpUSg8Jg=w2400"
    ,
    "Sunset on the hike to Crystal Mill in Colorado"
  ]
],[
  11 , [
    "https://lh3.googleusercontent.com/7T6lohYb3-v9DLDvLYbVE6F3QOiPwvyQSKwZHIoARrz7QisgsBSQqwrn290_N7d3QKfE1WyYSAGZ8O7Z4c5LiSi6pv2MW6Maik5RifyrAP3EbneNXbDS0OvPeC2K7yqBSmTy4ul3yQ=w2400"
    ,
    "View from the Reading Viaduct in Philadelphia"
  ]
],[
  12 , [
    "https://lh3.googleusercontent.com/_Xw80IQthl1GbyNu0E2GPItLugI84NxdGMoS0nhKkMP-yGY-b1tI8oqhJXWfabyKXaB8tv9zntL6tyVpBft_x2o0rd4Mz0AjkeN0gu1WzTOZNE5jOyTJTNSs4VzgNLsrLYlUAIirPg=w2400"
    ,
    "Sunset in Grand Teton National Park in Wyoming"
  ]
],[
  13 , [
    "https://lh3.googleusercontent.com/mta6jwxSPuTRHrCexfEJBBtoR4Cowb3uLCnnOXYf-P9yBwOOrnRQ9RacaxZu9BpJhC0Z12skm-8GbkgbR7FTtuUj3XCoej5Qir7eY_A9FnT7g6yDXD3a9iaVSifKfbnCUAQPKTAvWg=w2400"
    ,
    "Watching a friend take a photo in the Olympic Peninsula in Washington"
  ]
],[
  14 , [
    "https://lh3.googleusercontent.com/H3DP-SXD_AW9JQudEtrL0UYSdFra8mknzAP2CqpWvgSkyodjs6roj2u6b2ZMD-O1I3wC7jFa-zrdUwKF_GRTNDH1WHxbClGg70R4uUh_waLafJky6U7XI67UCRR-BbyKhopmyxdhbQ=w2400"
    ,
    "Portrait in Chinatown in Montreal"
  ]
],[
  15 , [
    "https://lh3.googleusercontent.com/4WWiLPhXP2JYCC_03oeoSOIGxUhGO5co6g1dgNlk0CGB7pZ4GwvurlX7wAIxEN_OXNw9k_0-rCZ6p_U4dUpHCiesc7EKP1nwyzMMuAEsjDhIbrnIcYWccQ31DaUrc195DNJKpg-90g=w2400"
    ,
    "Building in the Olympic Peninsula, Washington"
  ]
],[
  16 , [
    "https://lh3.googleusercontent.com/wkBHMWSTArMW89GOeKc0aeEVobCZBqxUx-956o7HtG3jwAjERBpSXO8xlvyg8A4Htsi5AVHuf3P4X5GublB-1g-jrR1iBV6iYBuTjXNFHofbFpITt4iPQRKNz84u6JO2PZQXNeGbqQ=w2400"
    ,
    "Large American Flag in Boston, MA"
  ]
],[
  17 , [
    "https://lh3.googleusercontent.com/oZGdopLRlZPOzvcUYxKZpP_dLnnDhV0euBsfsGcY97Bl-h_owsJcZECYe-IwRKGMwXatXH_sFP41hQtnKb_x47Qj3WqVwP85BWF5mqZxieYd2N7kPV7Di58lBfe8osF0E3f_NqapeQ=w2400"
    ,
    "Flatiron building in New York City"
  ]
],[
  18 , [
    "https://lh3.googleusercontent.com/fwUtSFAUbZEbM3iKAgtkvTs6yy9fLmZ6pMQLCc4qvxVSc0lpW1714k8H1GawQT8GLTS8nWqxf4c58zFGgadSLVvqs_1N8Q9iopV9MnvhrftB4BdD9jSIwgS0EvtnfG2x171SeQHDUg=w2400"
    ,
    "Drone shot of City Hall in Philadelphia"
  ]
],[
  19 , [
    "https://lh3.googleusercontent.com/cZyJkp16bJ_ygKG5olkuhGLtpAiUOJHkKafnUAmzf3YxD34b2rCtaodLs2cUszTXVX_hzvKj2fDVKwPhStD2ZJygFjorz-eKYm8ZAp6DwzEY1rK0bOiPyYUg4Kt3Jn6M7LA4mzW7Uw=w2400"
    ,
    "Green fern in Boston MA"
  ]
],[
  20 , [
    "https://lh3.googleusercontent.com/wC6xbP1IaSugDqTFsfl35vep6VL3PritaMnWmQhmqPu2r4Y5eVF0FsOYYPVS76FPJOV7XdbaysIwjXTBDk6S5Lym4LQsxbBuW_NfAL5Ev0t7nGXLYTnhYfZhAyyde2O8KRcLwAqmaQ=w2400"
    ,
    "Abandoned mill in Crystal Colorado"
  ]
],[
  21 , [
    "https://lh3.googleusercontent.com/jkYqt1bclVubwcgvlvW9SUrR1Jyi4YuE6XKMan6TpMFi_QyyWioNz1gxGx8BNDn9_8TYBz-N5kK-nazLxcs2KqtOoy9jycFAnscAXeqmZgL99XOBa1vcy9pjR7OyIhIx8ZfQ5y6ogw=w2400"
    ,
    "Portrait of a friend in a stairwell at an abandoned bottle factory in Pennsylvania"
  ]
],[
  22 , [
    "https://lh3.googleusercontent.com/p5vD8MWxvrAaMQKIFHRk8ZeqMhLOyW_bHxzoGEKOBamxZJiwbSIFXQC5Tao_kHDjN-Aw6iBNTca9RRNVFP8GjanktH3Q1M6VHJTTmrAc-8L2FiuBAM57yZ-Cc277qZj6Js_wjtki0w=w2400"
    ,
    "My tent at a campsite in Oregon"
  ]
],[
  23 , [
    "https://lh3.googleusercontent.com/WUdcQfPVEW-9VBQxxvr4lMUALKgth_JgXkfZD8JvXhZYG-K0qVBbJW-qfRvdmc3X9EgWuDgmy8oisbuL9Ryzg-Dzmy4roktekTvXYIAVrH7eIw4Cl_rJAsYlZbgvcB3jSQSpRXt0Zw=w2400"
    ,
    "Northern Lights near Reykjavik, Iceland"
  ]
],[
  24 , [
    "https://lh3.googleusercontent.com/2FGCaCEEwwzY2HxinpJXvrobnqn8mWi5nDPl0JXwx6KJNhlfGDDTXNP6mcOMpKz_MyvmulFHAhAx0Sy9-5hl6_613Z3fzWua9XeP4Kqdy2QicqlhYugq8uQUuGmn0z7BJOLfE30l8Q=w2400"
    ,
    "A stranger standing on top of an abandoned plane in Iceland"
  ]
]]);