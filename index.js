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

// Selector

const selectorItemsArray = document.querySelectorAll(".selector-list-item")
const selectorImages = document.querySelectorAll(".selector-left img")

selectorItemsArray.forEach((item, index) => {
    item.addEventListener("mouseenter", (e) => {
        
        selectorImages[index].classList.add("active")
    })

    item.addEventListener("mouseleave", (e) => {
        selectorImages[index].classList.remove("active")

    })
})


// Auto Slider 

const autoSliderImages = document.querySelectorAll(".auto-slider-image")
const designSliderImages = document.querySelectorAll(".slider-image")
const paginationButtons = document.querySelectorAll(".pagination button")


setInterval(() => {
    // const activeImage = document.querySelector(".auto-slider-image.active")

    // if (activeImage.nextElementSibling != null) {
    //     activeImage.classList.remove("active")
    //     activeImage.nextElementSibling.classList.add("active")
    // } else {
    //     activeImage.classList.remove("active")
    //     autoSliderImages[0].classList.add("active")
    // }

    const activeSlide = document.querySelector(".slider-image.active")
    const activeButton = document.querySelector(".pagination button.active")

    if (activeSlide.nextElementSibling != null) {
        activeSlide.classList.remove("active")
        activeSlide.nextElementSibling.classList.add("active")
        activeButton.classList.remove("active")
        activeButton.nextElementSibling.classList.add("active")
    } else {
        activeSlide.classList.remove("active")
        designSliderImages[0].classList.add("active")
        activeButton.classList.remove("active")
        paginationButtons[0].classList.add("active")
    }
   
}, 5000);



// Mask Animations

const textLinesTwo = document.querySelectorAll(".tags")


// textLinesTwo.forEach(textLined => {
//     const splitTwo = new SplitType(textLined, {
//         type: "chars"
//     })
// })


gsap.from(".char", {
    yPercent: -120,
    stagger: 0.05,
})

gsap.to(".welcome-section .wrapper", {
  scrollTrigger: {
    trigger: ".welcome-section .wrapper",
    start: "top center", // when the top of the trigger hits the top of the viewport
    stagger:true,
  },
  x:0,
  opacity:1,
});
gsap.to(".selector-section .wrapper", {
    scrollTrigger: {
      trigger: ".selector-section .wrapper",
      start: "top center", // when the top of the trigger hits the top of the viewport
      stagger:true,
    },
    x:0,
    opacity:1,
  });
gsap.to(".slider-section .wrapper", {
    scrollTrigger: {
      trigger: ".slider-section .wrapper",
      start: "top center", // when the top of the trigger hits the top of the viewport
      stagger:true,
    },
    x:0,
    opacity:1,
  });
gsap.to(".why-section .relative", {
    scrollTrigger: {
      trigger: ".why-section .relative",
      start: "top center", // when the top of the trigger hits the top of the viewport
      stagger:true,
    },
    x:0,
    opacity:1,
  });
gsap.to(".why-section .three-card-grid", {
    scrollTrigger: {
      trigger: ".why-section .three-card-grid",
      start: "top center", // when the top of the trigger hits the top of the viewport
      stagger:true,
    },
    x:0,
    opacity:1,
  });
gsap.to(".signage-section .wrapper", {
    scrollTrigger: {
      trigger: ".signage-section .wrapper",
      start: "top center", // when the top of the trigger hits the top of the viewport
      stagger:true,
    },
    x:0,
    opacity:1,
  });
gsap.to(".contact-section .wrapper", {
    scrollTrigger: {
      trigger: ".contact-section .wrapper",
      start: "top center", // when the top of the trigger hits the top of the viewport
      stagger:true,
    },
    x:0,
    opacity:1,
  });





  const textLines = document.querySelectorAll(".text1, .text2")


  textLines.forEach(textLine => {
    const split = new SplitType(textLine, {
        type: "chars"
    })
})


gsap.from(".char", {
  yPercent: -120,
  stagger: 0.05,
})




