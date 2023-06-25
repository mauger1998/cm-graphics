gsap.registerPlugin(ScrollTrigger);

document.addEventListener("click", (e) => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
  
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle("active")
    }
  
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })
  })

// CMS

let URL = "https://r1a26ddh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22portfolio%22%5D%20%7C%20order(order)%20%7B%0A%20%20%22imgUrl%22%3A%20image.asset-%3Eurl%2C%0A%20%20type%2C%0A%20%20client%0A%7D"

fetch(URL)
        .then((res) => res.json())
        .then(({ result }) => {
          const fourCardGrid = document.querySelector(".four-card-grid")

          if (result.length > 0) {
            fourCardGrid.innerHTML = ""
            result.forEach((result) => {
                const galleryCard = document.createElement("div")
                galleryCard.classList.add("gallery-card")
                fourCardGrid.appendChild(galleryCard)

                const portfolioImage = document.createElement("img")
                portfolioImage.src = result.imgUrl
                galleryCard.appendChild(portfolioImage)

                const designType = document.createElement("p")
                designType.textContent = result.type
                galleryCard.appendChild(designType)

                const clientName = document.createElement("p")
                clientName.textContent = result.client
                galleryCard.appendChild(clientName)



            });

          }
        })
        .catch((err) => console.error(err));



let URLTWO = "https://r1a26ddh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22featured%22%5D%20%7C%20order(order)%20%7B%0A%20%20%22imgUrl%22%3A%20image.asset-%3Eurl%2C%0A%20%20title%0A%7D"

fetch(URLTWO)
        .then((res) => res.json())
        .then(({ result }) => {
          const featuredSection = document.querySelector(".featured-section .wrapper")

          if (result.length > 0) {

            featuredSection.innerHTML = ""

            result.forEach((result) => {
                const featuredItem = document.createElement("div")
                featuredItem.classList.add("featured-item")
                featuredSection.appendChild(featuredItem)

                const featuredImage = document.createElement("img")
                featuredImage.src = result.imgUrl
                featuredItem.appendChild(featuredImage)

                const featuredTitle = document.createElement("p")
                featuredTitle.textContent = result.title
                featuredItem.appendChild(featuredTitle)

                


            });

          }
        })
        .catch((err) => console.error(err));

// Animations 

const textLines = document.querySelectorAll(".text1")

textLines.forEach(textLine => {
    const split = new SplitType(textLine, {
        type: "chars"
    })
})



gsap.from(".char", {
    yPercent: -120,
    stagger: 0.05,
})


gsap.to(".welcome-section .wrapped ", {
  scrollTrigger: {
    trigger: ".welcome-section .wrapped",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    stagger:1,
  },
  x:0,
  opacity:1,
});
gsap.to(".featured-section .wrapped ", {
  scrollTrigger: {
    trigger: ".featured-section .wrapped",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    stagger:1,
  },
  x:0,
  opacity:1,
});
gsap.to(".gallery-column ", {
  scrollTrigger: {
    trigger: ".gallery-column",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    stagger:1,
  },
  x:0,
  opacity:1,
});
gsap.to(".four-card-grid ", {
  scrollTrigger: {
    trigger: ".four-card-grid",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    stagger:1,
  },
  x:0,
  opacity:1,
});
gsap.to(".quote-section .wrapped ", {
  scrollTrigger: {
    trigger: ".quote-section .wrapped",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    stagger:1,
  },
  x:0,
  opacity:1,
});








