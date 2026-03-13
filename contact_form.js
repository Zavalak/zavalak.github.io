export const initContactForm = () => {
  const container = document.getElementById('contact-container');

  const issueData = {
    "Cooling and Heating Issues": [
      "AC Not Cooling/Warm Air",
      "Furnace Blowing Cold Air",
      "Uneven Temperatures"
    ],
    "System Malfunctions and Noises": [
      "Noisy HVAC System (Grinding/Squealing)",
      "Short Cycling",
      "Strange Odors (Musty)",
      "System Will Not Start"
    ],
    "Airflow and Maintenance Issues": [
      "Weak Airflow",
      "Water Leaks / Frozen Coils",
      "Dirty Air Filters / Efficiency Loss"
    ],
    "Safety and Preventive": [
      "Annual Maintenance (Spring AC/Fall Heat)",
      "System Performance Audit",
      "Filter Replacement Service"
    ],
    "Urgent: Call Immediately": [
      "Burning or Gas Smell",
      "Screeching Sounds",
      "System Freezing Up"
    ],
    "New Installation": [
      "System Replacement Estimate",
      "New Construction Install",
      "Ductless Mini-Split Install"
    ]
  };

  const renderForm = () => {
    container.innerHTML = `
      <div id="form-inner">
        <h2 class="text-4xl font-['Archivo_Black'] text-white uppercase mb-4 tracking-tighter">Secure Your <span class="text-[#B87333]">Expert</span></h2>
        <p class="text-slate-400 mb-12 uppercase text-[10px] tracking-[0.3em]">Request your diagnostic evaluation</p>
        
        <div id="emergency-alert" class="hidden mb-8 p-6 bg-red-950/30 border border-red-500/50 animate-pulse">
          <div class="flex items-center gap-4 text-red-500 mb-2">
            <i data-lucide="alert-triangle" size="20"></i>
            <span class="text-[10px] font-black uppercase tracking-[0.2em]">Immediate Action Required</span>
          </div>
          <p class="text-xs text-slate-200 uppercase tracking-widest leading-relaxed">
            Safety risk detected. Please shutdown your system and call dispatch immediately at 
            <a href="tel:7042189286" class="text-white font-black underline decoration-red-500 underline-offset-4">(704) 218-9286</a>.
          </p>
        </div>

        <form id="hvac-contact-form" class="space-y-4">
          <div class="grid md:grid-cols-2 gap-4">
            <input type="text" id="name" placeholder="FULL NAME" required class="w-full bg-slate-900 border border-slate-800 p-5 text-xs tracking-widest text-white focus:border-[#B87333] outline-none transition-all uppercase font-bold" />
            <input type="email" id="email" placeholder="EMAIL ADDRESS" required class="w-full bg-slate-900 border border-slate-800 p-5 text-xs tracking-widest text-white focus:border-[#B87333] outline-none transition-all uppercase font-bold" />
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <input type="tel" id="phone" placeholder="PHONE (10 DIGITS)" required maxlength="10" pattern="[0-9]{10}" title="Please enter exactly 10 digits (area code included)" class="w-full bg-slate-900 border border-slate-800 p-5 text-xs tracking-widest text-white focus:border-[#B87333] outline-none transition-all uppercase font-bold" />
            <input type="text" id="extension" placeholder="EXT. (OPTIONAL)" class="w-full bg-slate-900 border border-slate-800 p-5 text-xs tracking-widest text-white focus:border-[#B87333] outline-none transition-all uppercase font-bold" />
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <select id="category-select" required class="w-full bg-slate-900 border border-slate-800 p-5 text-xs tracking-widest text-white focus:border-[#B87333] outline-none transition-all appearance-none cursor-pointer uppercase font-bold">
              <option value="" disabled selected>SELECT CATEGORY</option>
              ${Object.keys(issueData).map(cat => `<option value="${cat}">${cat.toUpperCase()}</option>`).join('')}
            </select>
            
            <select id="reason-select" required disabled class="w-full bg-slate-900 border border-slate-800 p-5 text-xs tracking-widest text-white focus:border-[#B87333] outline-none transition-all appearance-none cursor-pointer opacity-50 uppercase font-bold">
              <option value="" disabled selected>SELECT SPECIFIC REASON</option>
            </select>
          </div>

          <textarea id="requirements" placeholder="ADDITIONAL DETAILS OR COMMENTS" rows="4" class="w-full bg-slate-900 border border-slate-800 p-5 text-xs tracking-widest text-white focus:border-[#B87333] outline-none transition-all uppercase font-bold"></textarea>
          
          <div class="flex gap-4 p-6 bg-slate-900/50 border-l-2 border-[#B87333] my-8">
            <i data-lucide="shield-check" class="text-[#B87333] shrink-0" size="24"></i>
            <p class="text-[10px] leading-relaxed text-slate-400 uppercase tracking-widest">
              <span class="text-white font-bold">Trust Note:</span> We utilize a secure pre-authorization hold for the initial evaluation fee only. No funds are processed until your diagnostic is complete.
            </p>
          </div>
          
          <button type="submit" id="submit-btn" class="w-full py-6 bg-[#B87333] text-white font-black uppercase tracking-[0.4em] text-xs hover:tracking-[0.5em] transition-all active:scale-[0.98]">Submit Request</button>
        </form>
      </div>
    `;

    lucide.createIcons();

    const categorySelect = document.getElementById('category-select');
    const reasonSelect = document.getElementById('reason-select');
    const emergencyAlert = document.getElementById('emergency-alert');
    const submitBtn = document.getElementById('submit-btn');

    categorySelect.addEventListener('change', (e) => {
      const selectedCat = e.target.value;
      const reasons = issueData[selectedCat];

      reasonSelect.innerHTML = `<option value="" disabled selected>SELECT SPECIFIC REASON</option>`;
      reasons.forEach(r => {
        const opt = document.createElement('option');
        opt.value = r;
        opt.textContent = r.toUpperCase();
        reasonSelect.appendChild(opt);
      });

      reasonSelect.disabled = false;
      reasonSelect.classList.remove('opacity-50');

      if (selectedCat === "Urgent: Call Immediately") {
        emergencyAlert.classList.remove('hidden');
        submitBtn.textContent = "CALL DISPATCH: (704) 218-9286";
        submitBtn.classList.replace('bg-[#B87333]', 'bg-red-700');
      } else {
        emergencyAlert.classList.add('hidden');
        submitBtn.textContent = "SUBMIT REQUEST";
        submitBtn.classList.replace('bg-red-700', 'bg-[#B87333]');
      }
    });

    const form = document.getElementById('hvac-contact-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      renderSuccess();
    });
  };

  const renderSuccess = () => {
    gsap.to("#form-inner", { opacity: 0, scale: 0.95, duration: 0.4, onComplete: () => {
      container.innerHTML = `
        <div class="text-center py-20 border border-[#B87333]/30 bg-slate-900/20" id="success-msg" style="opacity: 0">
          <i data-lucide="check" class="mx-auto text-[#B87333] mb-6" size="64"></i>
          <h3 class="text-2xl font-['Archivo_Black'] text-white uppercase mb-6 leading-tight">Thank you for trusting us<br/>with your home.</h3>
          <p class="text-slate-400 max-w-md mx-auto text-sm leading-relaxed mb-8">One of our experts will review your request and reach out shortly. Our priority is your peace of mind.</p>
          <div class="pt-8 border-t border-slate-800">
            <p class="text-[10px] tracking-widest text-slate-500 mb-2 font-bold">URGENT ASSISTANCE</p>
            <a href="tel:7042189286" class="text-3xl font-['Archivo_Black'] text-[#B87333] hover:opacity-80 transition-opacity">(704) 218-9286</a>
          </div>
        </div>
      `;
      lucide.createIcons();
      gsap.to("#success-msg", { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" });
    }});
  };

  renderForm();
};