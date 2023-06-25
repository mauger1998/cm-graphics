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


    

    
   

   
}, 3000);