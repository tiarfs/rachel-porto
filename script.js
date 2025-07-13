document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const hamburger = document.getElementById("hamburger")
  const navMenu = document.getElementById("nav-menu")

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      hamburger.classList.toggle("active")
    })

    // Close mobile menu when clicking on a link
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active")
        hamburger.classList.remove("active")
      })
    })
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Reveal sections on scroll
  const revealSections = () => {
    const sections = document.querySelectorAll(".section")
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      // Adjust offset as needed
      if (sectionTop < windowHeight - 150) {
        section.classList.add("revealed")
      } else {
        // Optional: remove 'revealed' class if scrolling back up
        // section.classList.remove('revealed');
      }
    })
  }

  window.addEventListener("scroll", revealSections)
  // Run on load to reveal sections already in view
  revealSections()

  // Active navigation link highlighting on scroll
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  const highlightNavLink = () => {
    let current = ""
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      // Adjust offset for when section becomes active in view
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active")
      }
    })
  }

  window.addEventListener("scroll", highlightNavLink)
  // Run on load to set initial active link
  highlightNavLink()
})
