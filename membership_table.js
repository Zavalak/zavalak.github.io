export const initMembershipTable = () => {
  const container = document.getElementById('membership-table-container');
  
  const tiers = [
    { name: "One-Time Evaluation", price: "$0.00", highlight: false, data: ["$0.00", "$0.00", "---", "$249.99", "$249.99", "---", "---", "---"] },
    { name: "Non-Member", price: "$0.00", highlight: false, data: ["$79.99", "$69.99", "$199.99", "$249.99", "$249.99", "$79.99", "Yes", "3–5 Days"] },
    { name: "Basic", price: "$249.99", highlight: false, data: ["Waived*", "$49.99", "$199.99", "INCLUDED", "INCLUDED", "$39.99", "Yes", "2–3 Days"] },
    { name: "Premium", price: "$499.99", highlight: true, data: ["Waived", "Waived", "$169.99", "INCLUDED", "INCLUDED", "UNLIMITED", "WAIVED", "Under 24h"] }
  ];

  const rows = [
    "First On-Site Diagnostic", 
    "Secondary On-Site Diagnostic", 
    "Potential Repair ($200)", 
    "Spring Check ($250 Value)", 
    "Fall Check ($250 Value)", 
    "Future Service Calls", 
    "Part Stocking Fee", 
    "Priority Scheduling"
  ];

  const tableHtml = `
    <div class="overflow-x-auto pb-12 hide-scrollbar">
      <table class="w-full border-collapse min-w-[900px]">
        <thead>
          <tr class="border-b border-white/10">
            <th class="sticky left-0 z-20 bg-[#0F172A] p-6 text-left text-[10px] uppercase tracking-[0.2em] text-[#B87333] font-black">Service Component</th>
            ${tiers.map(t => `
              <th class="p-8 text-center ${t.highlight ? 'bg-[#B87333]/10 border-x border-t border-[#B87333]' : ''}">
                <span class="block text-[10px] uppercase tracking-widest text-slate-400 mb-2">${t.name}</span>
                <span class="text-3xl font-['Archivo_Black'] text-white leading-none">${t.price}</span>
              </th>
            `).join('')}
          </tr>
        </thead>
        <tbody>
          ${rows.map((row, i) => `
            <tr class="border-b border-white/5 hover:bg-white/5 transition-colors group">
              <td class="sticky left-0 z-20 bg-[#0F172A] p-6 text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">
                ${row}
              </td>
              ${tiers.map(t => `
                <td class="p-6 text-center text-[11px] font-black uppercase tracking-widest ${t.highlight ? 'bg-[#B87333]/5 border-x border-[#B87333] text-[#B87333]' : 'text-slate-400'}">
                  ${t.data[i]}
                </td>
              `).join('')}
            </tr>
          `).join('')}
          <tr class="bg-white/5">
            <td class="sticky left-0 z-20 bg-[#161e31] p-8 font-['Archivo_Black'] uppercase text-[#B87333] text-sm tracking-tighter">Total Est. Savings</td>
            <td class="p-8 text-center text-slate-600 font-bold">$0.00</td>
            <td class="p-8 text-center text-slate-600 font-bold">$0.00</td>
            <td class="p-8 text-center text-white font-black">$370.00</td>
            <td class="p-8 text-center border-x border-b border-[#B87333] bg-[#B87333]/10 text-[#B87333] font-black tracking-tighter">$190.00+ & VIP</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="max-w-3xl mx-auto mt-16 space-y-4">
      <h3 class="text-[10px] font-black tracking-[0.4em] text-[#B87333] uppercase text-center mb-8 italic underline decoration-1 underline-offset-8">Membership Disclosure</h3>
      <div class="border-b border-white/5 pb-6">
        <p class="text-[11px] uppercase tracking-widest font-black text-slate-200 mb-2 underline decoration-[#B87333] underline-offset-4">* First On-Site Diagnostic Waiver</p>
        <p class="text-sm text-slate-500 leading-relaxed font-medium">
          The 'First On-Site Diagnostic Waived' benefit for the Basic Membership tier is an exclusive incentive for new members during their first year of enrollment. All subsequent diagnostics are performable at the significantly reduced membership rate established for your tier.
        </p>
      </div>
    </div>
  `;

  container.innerHTML = tableHtml;
};