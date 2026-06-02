export const initMembershipTable = () => {
  const container = document.getElementById('membership-table-container');
  
  const tiers = [
    { 
      name: "One-Time Evaluation", 
      price: "$0.00", 
      highlight: false, 
      data: ["$99.99", "$79.99", "$199.99/hr", "---", "$249.99", "$249.99", "---", "---", "---"] 
    },
    { 
      name: "Non-Member", 
      price: "$0.00", 
      highlight: false, 
      data: ["$99.99", "$79.99", "$199.99/hr", "Standard", "$249.99", "$249.99", "$99.99", "Yes", "---"] 
    },
    { 
      name: "Basic Member", 
      price: "$249.99", 
      highlight: false, 
      data: ["First diagnostic WAIVED*", "$79.99", "$149.99/hr", "Standard", "INCLUDED", "INCLUDED", "$79.99", "Yes", "---"] 
    },
    { 
      name: "Premium Member", 
      price: "$499.99", 
      highlight: true, 
      data: ["WAIVED", "WAIVED", "$99.99/hr", "15% DISCOUNT", "INCLUDED", "INCLUDED", "WAIVED", "WAIVED", "UNDER 24H"] 
    }
  ];

  const rows = [
    "Primary System Diagnostic", 
    "Additional System (Same Trip)", 
    "Urgent, After Hours & Holidays (after 6pm)",
    "Project Repair", 
    "Spring Check ($250 Value)", 
    "Fall Check ($250 Value)", 
    "Future Service Calls", 
    "Part Stocking Fee", 
    "Priority Scheduling"
  ];

  const tableHtml = `
    <div class="overflow-x-auto pb-12 hide-scrollbar">
      <table class="w-full border-collapse">
        <thead>
          <tr class="border-b border-white/10">
            <th class="sticky left-0 z-30 bg-[#0F172A] p-2 sm:p-4 text-left text-[8px] sm:text-[10px] uppercase tracking-[0.2em] text-[#B87333] font-black w-[110px] sm:w-[180px] border-r border-white/5">
              Service Component
            </th>
            ${tiers.map(t => `
              <th class="p-3 sm:p-6 text-center min-w-[160px] sm:min-w-[180px] ${t.highlight ? 'bg-[#B87333]/10 border-x border-t border-[#B87333]' : ''}">
                <span class="block text-[8px] sm:text-[10px] uppercase tracking-widest text-slate-400 mb-1">${t.name}</span>
                <span class="text-xl sm:text-3xl font-['Archivo_Black'] text-white leading-none">${t.price}</span>
              </th>
            `).join('')}
          </tr>
        </thead>
        <tbody>
          ${rows.map((row, i) => `
            <tr class="border-b border-white/5 hover:bg-white/5 transition-colors group">
              <td class="sticky left-0 z-20 bg-[#0F172A] p-2 sm:p-4 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors w-[110px] sm:w-[180px] border-r border-white/5 shadow-[4px_0_8px_-4px_rgba(0,0,0,0.5)]">
                ${row}
              </td>
              ${tiers.map(t => `
                <td class="p-3 sm:p-4 text-center text-[10px] sm:text-[11px] font-black uppercase tracking-widest ${t.highlight ? 'bg-[#B87333]/5 border-x border-[#B87333] text-[#B87333]' : 'text-slate-400'}">
                  ${t.data[i]}
                </td>
              `).join('')}
            </tr>
          `).join('')}
          
          <tr class="bg-white/5">
            <td class="sticky left-0 z-20 bg-[#161e31] p-2 sm:p-6 font-['Archivo_Black'] uppercase text-[#B87333] text-[9px] sm:text-sm tracking-tighter w-[110px] sm:w-[180px] border-r border-white/5 shadow-[4px_0_8px_-4px_rgba(0,0,0,0.5)]">
              Total Annual Savings
            </td>
            <td class="p-3 sm:p-6 text-center text-slate-500 font-bold text-[10px] sm:text-sm">$0.00 (0%)</td>
            <td class="p-3 sm:p-6 text-center text-slate-500 font-bold text-[10px] sm:text-sm">$0.00 (0%)</td>
            <td class="p-3 sm:p-6 text-center text-white font-bold text-[10px] sm:text-sm">
               $350.00 <span class="block text-[8px] text-[#B87333] mt-1 font-black">140% VALUE SAVED</span>
            </td>
            <td class="p-3 sm:p-6 text-center border-x border-b border-[#B87333] bg-[#B87333]/10 text-[#B87333] font-black tracking-tighter text-[10px] sm:text-sm">
               $600.00+ <span class="block text-[8px] text-white mt-1 font-black">120%+ VIP ROI</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="max-w-3xl mx-auto mt-10 sm:mt-16 space-y-4 px-4 text-center">
      <h3 class="text-[9px] sm:text-[10px] font-black tracking-[0.4em] text-[#B87333] uppercase mb-6 sm:mb-8 italic underline decoration-1 underline-offset-8">Membership Disclosure</h3>
      <div class="border-b border-white/5 pb-6">
        <p class="text-[10px] sm:text-[11px] uppercase tracking-widest font-black text-slate-200 mb-2 underline decoration-[#B87333] underline-offset-4">
          * Multiple System Coverage
        </p>
        <p class="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
          Membership benefits cover the primary HVAC system at the residence. Because each additional mechanical unit requires a separate, comprehensive safety and performance evaluation, multi-system properties receive a deeply discounted rate on extra units during the same service visit. All subsequent repairs and options follow established membership tier advantages.
        </p>
      </div>
    </div>
  `;

  container.innerHTML = tableHtml;
};