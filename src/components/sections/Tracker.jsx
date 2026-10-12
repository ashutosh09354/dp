import { useState } from "react";
import Button from "../ui/Button";
const trackStatusPhone = "/assets/track-status-phone.png";

// Same Web app URL used by QueryForm.jsx
const GOOGLE_SHEET_WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbwU4UF_VzJHCnb5XsM5dwvf0HIJ8Efw-lLCuywOuDJdxzZZIjjX0PE5qEXkSWLi81bC5Q/exec";

const STATUS_STEPS = ["Not started", "In progress", "Completed"];

function statusProgressPercent(status) {
  if (status === "Completed") return 100;
  if (status === "In progress") return 55;
  if (status === "Blocked") return 55;
  return 10; // Not started
}

export default function Tracker() {
  const [refId, setRefId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  async function handleTrack(e) {
    e.preventDefault();
    if (!refId.trim()) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const queryId = refId.trim().toUpperCase();
      // Partner submissions use a DPM- reference ID. Keep the legacy
      // merchant value in the tracking request so the current Apps Script
      // backend can still identify the correct sheet while the UI reads as
      // "partner".
      const submitterType = queryId.startsWith("DPM-") ? "merchant" : "customer";
      const params = new URLSearchParams({ queryId, submitterType, source: submitterType });
      const res = await fetch(`${GOOGLE_SHEET_WEB_APP_URL}?${params.toString()}`);
      const data = await res.json();

      if (data.found) {
        setResult({
          ...data,
          queryId: data.queryId || queryId,
          // Supports either common response field while the tracking script
          // is being updated for partner records.
          status: data.status || data.partnerStatus || "Not started",
          submitterType: data.submitterType || data.source || submitterType,
        });
      } else {
        setError(data.error || "No query found with that reference ID.");
      }
    } catch (err) {
      setError("Couldn't reach the tracking service. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="track" className="section-shell py-10 md:py-12 lg:py-14 track-section">
      <div className="track-box w-full">
        <div className="relative z-10 w-full max-w-xl xl:max-w-2xl">
          <h2 className="section-title">Track Your Query</h2>
          <p className="section-copy mt-2">
            Enter your query reference number to check the latest status of your request.
          </p>
          <form
            onSubmit={handleTrack}
            className="tracker-form mt-6 flex flex-col gap-2 sm:flex-row max-w-lg lg:max-w-xl"
          >
            <input
              className="tracker-input h-12 min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
              placeholder="Enter your reference number"
              value={refId}
              onChange={(e) => setRefId(e.target.value)}
            />

            <Button
              type="submit"
              className="tracker-button shrink-0 px-6"
              disabled={loading}  
            >
              {loading ? "Checking..." : "Track Status"}
            </Button>
          </form>

          {error && <p className="mt-3 text-sm font-semibold text-red-600">{error}</p>}

          {result && (
            <div className="mt-6 max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Query Reference ID</div>
              <div className="mt-1 text-lg font-extrabold text-brand-900">{result.queryId}</div>
              <div className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-500">Query Type</div>
              <div className="mt-1 text-sm font-extrabold capitalize text-brand-700">{result.submitterType === "merchant" ? "partner" : result.submitterType}</div>
              <div className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-500">Status</div>
              <div className="mt-1 text-sm font-extrabold text-brand-700">{result.status}</div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-brand-500 transition-all"
                  style={{ width: `${statusProgressPercent(result.status)}%` }}
                />
              </div>
              <div className="mt-3 flex justify-between text-[10px] text-slate-400">
                {STATUS_STEPS.map((step) => <span key={step}>{step}</span>)}
              </div>
            </div>
          )}
        </div>

        <img
          src={trackStatusPhone}
          alt="Query status tracker on phone"
          className="track-phone-image"
        />
      </div>
    </section>
  );
}
