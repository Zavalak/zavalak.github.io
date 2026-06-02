import { initMembershipTable } from './membership_table.js';
import { initContactForm } from './contact_form.js';
import { initAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize standard Lucide contextual icon library
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Load active components
  initMembershipTable();
  initContactForm();
  initAnimations();

  // Functional Mobile Toggle
  const menuBtn = document.getElementById('mobile-menu-toggle');
  const navMenu = document.querySelector('nav');
  
  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('hidden');
      navMenu.classList.toggle('flex');
      navMenu.classList.toggle('flex-col');
      navMenu.classList.toggle('absolute');
      navMenu.classList.toggle('top-full');
      navMenu.classList.toggle('left-0');
      navMenu.classList.toggle('w-full');
      navMenu.classList.toggle('bg-[#0F172A]');
      navMenu.classList.toggle('p-6');
      navMenu.classList.toggle('border-b');
      navMenu.classList.toggle('border-white/5');
    });
  }

  // Standard Smooth Inter-Page Anchor Scrolls
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});