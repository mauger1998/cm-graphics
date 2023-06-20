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