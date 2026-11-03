/**
 * AAA Honest HVAC - Real-time Jobber Dispatch Feed
 * Endpoint: https://sheetdb.io/api/v1/py2z8kztwinkd
 */

export const initDispatchFeed = async () => {
  const container = document.getElementById('live-dispatch-list');
  const countBadge = document.getElementById('live-job-count');
  const totalCounter = document.getElementById('stat-total-jobs');

  const SHEETDB_URL = "https://sheetdb.io/api/v1/py2z8kztwinkd";

  try {
    const res = await fetch(SHEETDB_URL);
    if (!res.ok) throw new Error("Could not fetch dispatch records");

    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) return;

    // Filter out rows missing city data
    const validJobs = data.filter(j => j.City && j.City.trim() !== "");

    // 1. Update counters dynamically
    if (countBadge) {
      countBadge.textContent = `${validJobs.length}+ Verified Dispatches`;
    }
    if (totalCounter) {
      totalCounter.textContent = `${validJobs.length}+`;
    }

    // 2. Render recent dispatches
    if (container && validJobs.length > 0) {
      const recent = validJobs.slice(0, 6);

      container.innerHTML = recent.map(job => {
        const city = job.City ? job.City.trim() : "Greater Charlotte";
        const zip = job.Zip ? job.Zip.trim() : "";
        const service = (job.Service && job.Service.trim() !== "") 
          ? job.Service.trim() 
          : "Residential System Diagnostic";
        const date = job.Date ? job.Date.trim() : "Recent";

        return `
          <div class="p-3 bg-slate-900/80 border border-slate-800 hover:border-[#B87333]/40 transition-colors flex items-center justify-between text-xs rounded-sm">
            <div class="flex items-center gap-3">
              <span class="w-2 h-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
              <div>
                <div class="flex items-center gap-1.5">
                  <span class="font-bold text-white uppercase tracking-tight">${city}</span>
                  ${zip ? `<span class="text-slate-500 font-mono text-[10px]">(${zip})</span>` : ''}
                </div>
                <span class="text-slate-400 block text-[11px]">${service}</span>
              </div>
            </div>
            <span class="text-[9px] uppercase tracking-wider text-slate-500 font-mono shrink-0 pl-2">${date}</span>
          </div>
        `;
      }).join('');
    }
  } catch (err) {
    console.warn("Live dispatch feed using static baseline:", err);
  }
};
