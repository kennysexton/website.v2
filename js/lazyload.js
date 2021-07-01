// load in images after the rest of content has loaded in 
window.addEventListener('load', function () {

  // Grabs all gallery photos, each photo shows up twice 1 for grid, 1 for lightbox
  var allImages = document.getElementsByClassName('photo');

  // Get gallery size
  var gallerySize = allImages.length / 2
  console.log("Number of images in gallery: " + gallerySize)

  // Loop through 
  for (var i = 1; i <= allImages.length; i++) {
    try {
      // Set src tag
      allImages[i - 1].setAttribute('src', photoMap.get(getPhotoMapValue(i, gallerySize))[0]);

      // Set alt tag
      allImages[i - 1].setAttribute('alt', photoMap.get(getPhotoMapValue(i, gallerySize))[1]);
    } catch (e) {
      console.error("Image: " + i + " ERROR: " + e);
    }

  }
}, false)

// fix for last gallery value (ex. 27 % 27 == 0)
function getPhotoMapValue(i, gallerySize) {
  if (i == gallerySize || i == gallerySize * 2) {
    return gallerySize
  } else {
    return i % gallerySize
  }

}

// MAP [key, value]
//     [1, [url, description]
var photoMap = new Map([[
  1, [
    "https://lh3.googleusercontent.com/TETc4Tb-4SCq7emfgUKDrkQTEH1706_49w7x4Nc_l1B5tmygS9D0RKg9txRYIGHAmNt1akoqyVG2d-YVykDNLDHu7a5AyHn4zdet-vM8iwHbzG52pC8KzHjbS_2iXp_Is_5PfMlgWg=w2400"
    ,
    "Iceland portrait"
  ]
], [
  2, ["https://lh3.googleusercontent.com/Z-mVf3I3SlzZBBnIc1JoN7wwsB8tquZbuNpQpBp7HYnfHohX_CmRx2eaMhbUdXI9qDXbC8bLsU7ZHsQ3_Rg0_gLjnXoavokefwGwPZm4GvWEfDOuO94nIpon92sjDzZUKAgl-WTG8A=w2400"
    ,
    "Snowy day in Philadelphia"
  ]
], [
  3, [
    "https://lh3.googleusercontent.com/ckLouU_yU2GYct4HwteyJI5gs_FMNRAX1Z8SMnLcazUFHEuNi4ZviPOoiytiRGgx4zO2jCM4Qvb8R-Q37TBAVQkxOKWYOgjQYw4Hze6C6TcNU5HGaClhy6s52wNysWuSOCchqUh7Vg=w2400"
    ,
    "Iceland waterfall"
  ]
], [
  4, [
    "https://lh3.googleusercontent.com/WoohXr_N_l0M3B2f2uamcYrAw7iwgSQpnINgmWUPLSl6NhtQ4nBXzTnZatYFD2SCiVYCeeWkN2TVn6YYgN46ixyaCVRL9-HP9fPHp0OscV6p_0-Hkrf7aNOkRQwd-e5M1PG_Cyp7zw=w2400"
    ,
    "Dairy block in Devner"
  ]
], [
  5, [
    "https://lh3.googleusercontent.com/0rKANsq6E3i12L9kZwENTPL2B-YTuL96yEw1bMyfvIK-VW5SQg7tTQ0gcwmQoATD8sVkLXMXLDBQMW3k65tjE4mJHM9pyQLz0VctN0nmVb1QB9AJhH0Tn2eTs6Tk5zJTrPsUC94F9A=w2400"
    ,
    "Bird landing on hand"
  ]
], [
  6, [
    "https://lh3.googleusercontent.com/aeoyPPgX-kDaULoTkAL9IQOV6P9AtHiFcaWG2Mn1Fgc6FHEzluhfWjrx1KzbYECiKra5dW5kNA3wrNOFVMxQ1T8W8qUJrTvZbHmy-W3BxzITSVw5QCrS5vwB8A7hD2VERMhroNoJMrk=w2400"
    ,
    "Foggy sunrise tree in the Smoky Mountains"
  ]
], [
  7, [
    "https://lh3.googleusercontent.com/Q2c7PgzH35wFYkYulnpjYZCwIhsjhba9z13oALcQeIiI_N6YpWmhCe-AKMTAVAVNj5mZNHr8V2cgYib1CKGHXEipmqE0BPl9aCCgCLvJN6fyxsX_5yNi77tyZyxnbyZwDBYM8kZWYA=w2400"
    ,
    "Pink sidewalk sofa in Richmond VA"
  ]
], [
  8, [
    "https://lh3.googleusercontent.com/qJaIStf2DztM65W46kppsap9-2EcaePSJZgoIszsCPROj6JxHgt-49fYiZxDwGDI8_8N1LTBqOKPCs4BbAgRVNlfGqW_IWta-k9XtHAJh_-5pz75XeTaA_3UkFxIDB_C1ijSuP2t9w=w2400"
    ,
    "Two bikers in Denver, CO"
  ]
], [
  9, [
    "https://lh3.googleusercontent.com/Kjmocs-fUXcUs63okSIdkVuQ8cn6Z3BoHLY6e5L3TrBhpswa2jMmtuHPyKMAQaOQhPI_zw0f6luk92F4OJZS8X5W0ipkZXHvKXB3UZlrYgwjY0zB-eoFWdvhUXxhtezsu4r20sK2wQ=w2400"
    ,
    "Foggy morning outside a Bates State Park in Austin, OR"
  ]
], [
  10, [
    "https://lh3.googleusercontent.com/LEQEfbEJNaAoHCn_g0f-fVxsF2aHwWX59jz3ZRWhEWrzsMlpdue6o6UNhqb6dxFI_gmcXf3OofEjxGxvzkgDeqqTah7m3rl8w5YshCj2wz4dOISbE8O9WtU9T4ijB0E_X-SBPM8bVMs=w2400"
    ,
    "Clingman's Dome in the Smoky Mountains"
  ]
], [
  11, [
    "https://lh3.googleusercontent.com/7T6lohYb3-v9DLDvLYbVE6F3QOiPwvyQSKwZHIoARrz7QisgsBSQqwrn290_N7d3QKfE1WyYSAGZ8O7Z4c5LiSi6pv2MW6Maik5RifyrAP3EbneNXbDS0OvPeC2K7yqBSmTy4ul3yQ=w2400"
    ,
    "View from the Reading Viaduct in Philadelphia"
  ]
], [
  12, [
    "https://lh3.googleusercontent.com/_Xw80IQthl1GbyNu0E2GPItLugI84NxdGMoS0nhKkMP-yGY-b1tI8oqhJXWfabyKXaB8tv9zntL6tyVpBft_x2o0rd4Mz0AjkeN0gu1WzTOZNE5jOyTJTNSs4VzgNLsrLYlUAIirPg=w2400"
    ,
    "Sunset in Grand Teton National Park in Wyoming"
  ]
], [
  13, [
    "https://lh3.googleusercontent.com/mta6jwxSPuTRHrCexfEJBBtoR4Cowb3uLCnnOXYf-P9yBwOOrnRQ9RacaxZu9BpJhC0Z12skm-8GbkgbR7FTtuUj3XCoej5Qir7eY_A9FnT7g6yDXD3a9iaVSifKfbnCUAQPKTAvWg=w2400"
    ,
    "Watching a friend take a photo in the Olympic Peninsula in Washington"
  ]
], [
  14, [
    "https://lh3.googleusercontent.com/H3DP-SXD_AW9JQudEtrL0UYSdFra8mknzAP2CqpWvgSkyodjs6roj2u6b2ZMD-O1I3wC7jFa-zrdUwKF_GRTNDH1WHxbClGg70R4uUh_waLafJky6U7XI67UCRR-BbyKhopmyxdhbQ=w2400"
    ,
    "Portrait in Chinatown in Montreal"
  ]
], [
  15, [
    "https://lh3.googleusercontent.com/4WWiLPhXP2JYCC_03oeoSOIGxUhGO5co6g1dgNlk0CGB7pZ4GwvurlX7wAIxEN_OXNw9k_0-rCZ6p_U4dUpHCiesc7EKP1nwyzMMuAEsjDhIbrnIcYWccQ31DaUrc195DNJKpg-90g=w2400"
    ,
    "Building in the Olympic Peninsula, Washington"
  ]
], [
  16, [
    "https://lh3.googleusercontent.com/wkBHMWSTArMW89GOeKc0aeEVobCZBqxUx-956o7HtG3jwAjERBpSXO8xlvyg8A4Htsi5AVHuf3P4X5GublB-1g-jrR1iBV6iYBuTjXNFHofbFpITt4iPQRKNz84u6JO2PZQXNeGbqQ=w2400"
    ,
    "Large American Flag in Boston, MA"
  ]
], [
  17, [
    "https://lh3.googleusercontent.com/oZGdopLRlZPOzvcUYxKZpP_dLnnDhV0euBsfsGcY97Bl-h_owsJcZECYe-IwRKGMwXatXH_sFP41hQtnKb_x47Qj3WqVwP85BWF5mqZxieYd2N7kPV7Di58lBfe8osF0E3f_NqapeQ=w2400"
    ,
    "Flatiron building in New York City"
  ]
], [
  18, [
    "https://lh3.googleusercontent.com/fwUtSFAUbZEbM3iKAgtkvTs6yy9fLmZ6pMQLCc4qvxVSc0lpW1714k8H1GawQT8GLTS8nWqxf4c58zFGgadSLVvqs_1N8Q9iopV9MnvhrftB4BdD9jSIwgS0EvtnfG2x171SeQHDUg=w2400"
    ,
    "Drone shot of City Hall in Philadelphia"
  ]
], [
  19, [
    "https://lh3.googleusercontent.com/cZyJkp16bJ_ygKG5olkuhGLtpAiUOJHkKafnUAmzf3YxD34b2rCtaodLs2cUszTXVX_hzvKj2fDVKwPhStD2ZJygFjorz-eKYm8ZAp6DwzEY1rK0bOiPyYUg4Kt3Jn6M7LA4mzW7Uw=w2400"
    ,
    "Green fern in Boston MA"
  ]
], [
  20, [
    "https://lh3.googleusercontent.com/Ycbw5lPTpC0JIORwLsC5aTCpm9yfaTbx9PEDlyYNOkrlspXOJXammzIRsJ7PVlywWF2NtOyT9d25QqBqU2ifagzpZSleLWQmVYXew5RTfo6ZfpChas2iD2zqS_bxj9oIB70ZcCwbYw=w2400"
    ,
    "Building near the mall in Washington DC"
  ]
], [
  21, [
    "https://lh3.googleusercontent.com/dGQyRlNyAOoOXcR7KYpU9a4C6KkKUO6mNa5R1maYBBJeHZrmBcy5vBpg8jz-kanQrpvDuDS9e2xjJ9svudYd4A-WPWgNdHMNhHqnYVfS-sAGvz3SoBzHxq9j4WFdSzssBVirdN-4hVg=w2400"
    ,
    "Nice sun on the Big Sur coastline"
  ]
], [
  22, [
    "https://lh3.googleusercontent.com/-RVq16xj-zSw69h8PfLaTvMcfcjZtuDIa18XlanVWvQNxOO8usVT8zr4tt7vZHDoIKIEBfzSOdOZ9p5S4daFe1O2bkV9VxjM8RgkHkjmdgPgDEn7F_l4gNDE3XLloldzi5PbG-V7sKc=w2400"
    ,
    "Foggy pathway in Acadia, ME"
  ]
], [
  23, [
    "https://lh3.googleusercontent.com/WUdcQfPVEW-9VBQxxvr4lMUALKgth_JgXkfZD8JvXhZYG-K0qVBbJW-qfRvdmc3X9EgWuDgmy8oisbuL9Ryzg-Dzmy4roktekTvXYIAVrH7eIw4Cl_rJAsYlZbgvcB3jSQSpRXt0Zw=w2400"
    ,
    "Northern Lights near Reykjavik, Iceland"
  ]
], [
  24, [
    "https://lh3.googleusercontent.com/0cWjES4JLlxhIamNMKqfUvluzXaGgIYL4n6N5GfJWgzhRciMxASZYJHa0l3P288noHzRmowwffWttQzQA4sEELWyMSKXLf853mCnsvjGfkPIEOaRrZNO36fVu_SxmfHI66rw7ucTO2s=w2400"
    ,
    "Sunset lighting of my room"
  ]
], [
  25, [
    "https://lh3.googleusercontent.com/IqAhpu7ap_v1J4ZcgSc0vdU4-cDIFgGSFz6fe0s6v0MrfmyOv7wnkEg0QDvOF1exf_ffhxKNQ4VwtNM3YD6PiBsVtpeUis0bvqhn30y8oTlQS2Phzn59Pu_WT1o8b3TfCYkxnr7z9nQ=w2400"
    ,
    "Man on the beach Seaside, OR"
  ]
], [
  26, [
    "https://lh3.googleusercontent.com/myZBtzlN8_Bcj8s5TBWNc_4S9uzCrPXsECCal1YtQPln3S6gZMKtign6O290_zJ8w9PLWYGwDFY97CnRM58jOvYplu-yXFsVcrrL3D-V1yi12SgkkwgEobg6dwOPSA0xTUKnmbvlmDw=w2400"
    ,
    "Overlook in the south of Iceland"
  ]
], [
  27, [
    "https://lh3.googleusercontent.com/jj_900iIykBv3xENdY-imEbgVI6pprtGOEpjH9jRKOuGARoLIYK4Ip0U1R2pAd9p6lWtkAZkMqF1y5U6ix7znKXTSEXmF0DevkkV_9d65y4v97CSuxWx47ScdxwflDFSat_6ungwstU=w2400"
    ,
    "Close shot of dandelion"
  ]
]

]); // Only possible thanks to Amit Agarwal's site https://www.labnol.org/embed/google/photos/