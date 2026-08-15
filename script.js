const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const navLinks = [...document.querySelectorAll(".nav a:not(.nav-cta)")];
const sections = [...document.querySelectorAll("main section[id]")];

menuToggle?.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${entry.target.id}`
      ));
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach(section => observer.observe(section));

// Mouse glow
const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

// Small parallax effect for the constellation.
const constellation = document.getElementById("constellation");
window.addEventListener("scroll", () => {
  if (!constellation) return;
  const rect = constellation.getBoundingClientRect();
  const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
  const y = (progress - .5) * 28;
  constellation.style.transform = `translateY(${y}px)`;
});

// Demo form: frontend-only for now.
// Replace this handler with your API/WhatsApp/CRM integration.
document.getElementById("contactForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const status = document.getElementById("formStatus");
  status.textContent = "Thanks! Your enquiry is ready to be connected to the SYKSA admissions system.";
  e.target.reset();
});


// Subtle scroll-driven movement around the brain section.
const brainStage = document.getElementById('brainStage');
if (brainStage) {
  const formulas = brainStage.querySelectorAll('.brain-formula');
  window.addEventListener('scroll', () => {
    const rect = brainStage.getBoundingClientRect();
    const progress = (window.innerHeight / 2 - (rect.top + rect.height / 2)) / rect.height;
    formulas.forEach((el, i) => {
      const amount = Math.max(-22, Math.min(22, progress * (i % 2 ? -30 : 30)));
      el.style.transform = `translate3d(${amount}px, ${amount * .35}px, 0)`;
    });
  }, { passive:true });
}


// ===== PROGRAM CARDS SLIDER =====
const programTrack = document.querySelector('.program-track');
const programCards = [...document.querySelectorAll('.program-card')];
const programPrev = document.querySelector('.program-prev');
const programNext = document.querySelector('.program-next');
const programDots = [...document.querySelectorAll('.program-dot')];
let programIndex = 0;
function programStep(){
  if(!programTrack || !programCards.length) return;
  const card = programCards[0];
  return card.getBoundingClientRect().width + 16;
}
function updateProgramSlider(){
  if(!programTrack) return;
  programTrack.scrollTo({left: programIndex * programStep(), behavior:'smooth'});
  programDots.forEach((d,i)=>d.classList.toggle('active', i===Math.min(programIndex, programDots.length-1)));
}
programPrev?.addEventListener('click',()=>{ programIndex=Math.max(0,programIndex-1); updateProgramSlider(); });
programNext?.addEventListener('click',()=>{ programIndex=Math.min(programCards.length-1,programIndex+1); updateProgramSlider(); });
programDots.forEach((d,i)=>d.addEventListener('click',()=>{programIndex=i;updateProgramSlider();}));
