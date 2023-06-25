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


// Animations 

const textLines = document.querySelectorAll(".text1")

textLines.forEach(textLine => {
    const split = new SplitType(textLine, {
        type: "chars"
    })
})
// textLinesTwo.forEach(textLined => {
//     const splitTwo = new SplitType(textLined, {
//         type: "chars"
//     })
// })


gsap.from(".char", {
    yPercent: -210,
    stagger: 0.05,
})
