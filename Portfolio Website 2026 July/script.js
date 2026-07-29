// script.js

const typingElement = document.getElementById("typing");
const skills = ["Networking", "Virtualization", "Automation", "PowerShell", "M365"];
let skillIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentSkill = skills[skillIndex];
  if (isDeleting) {
    typingElement.textContent = currentSkill.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      skillIndex = (skillIndex + 1) % skills.length;
    }
  } else {
    typingElement.textContent = currentSkill.substring(0, charIndex++);
    if (charIndex > currentSkill.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, isDeleting ? 100 : 150);
}

document.addEventListener("DOMContentLoaded", type);
