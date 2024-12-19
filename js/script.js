const nav = document.getElementById("nav");
const toggleBtn = document.getElementById("toggleBtn");

// Function to save the navbar state to localStorage
function saveNavbarState(state) {
  localStorage.setItem("navbarState", state);
}

// Function to set the initial state based on screen width or saved state
function setInitialNavState() {
  const savedState = localStorage.getItem("navbarState");

  if (savedState) {
    // If there's a saved state, apply it
    if (savedState === "collapsed") {
      nav.classList.add("collapsed");
    } else {
      nav.classList.remove("collapsed");
    }
  } else {
    // If no saved state, use the screen width as a fallback
    if (window.innerWidth <= 768) { // Mobile and tablet screens
      nav.classList.add("collapsed"); // Start in collapsed state
    } else {
      nav.classList.remove("collapsed"); // Start in open state
    }
  }
}

// Function to toggle navbar state and save it
toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("collapsed");
  const isCollapsed = nav.classList.contains("collapsed");
  saveNavbarState(isCollapsed ? "collapsed" : "expanded");
});

// Adjust nav state on window resize (without overwriting saved state)
window.addEventListener("resize", () => {
  const savedState = localStorage.getItem("navbarState");
  if (!savedState) { // Only apply responsive logic if no state is saved
    setInitialNavState();
  }
});

// Set the initial navbar state on page load
document.addEventListener("DOMContentLoaded", setInitialNavState);
