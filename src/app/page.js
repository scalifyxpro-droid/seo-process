"use client";

import { useState, useEffect } from "react";
import {
  FREE_TOOLS_DIRECTORY,
  TECHNICAL_SPRINT_DAYS,
  REPETITIVE_WEEKLY_CADENCE,
  generate100DaysProgram,
  INITIAL_CLIENTS
} from "@/data/seoKnowledgeBase";
import { generateLocationPage, DEFAULT_LOCATIONS } from "@/data/programmaticEngine";
import { getTasksForDay, PILLARS_1000 } from "@/data/thousandTasksEngine";
import {
  WEBSITE_PROMPT_PARAMETERS,
  PARAMETER_CATEGORIES,
  generateMasterWebsitePrompt
} from "@/data/websitePromptParameters";

export default function Home() {
  const [clients, setClients] = useState([]);
  const [activeClientId, setActiveClientId] = useState("");
  const [viewMode, setViewMode] = useState("guided"); // 'guided' (simple) or 'matrix' (advanced)
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("roadmap");
  const [roadmapFilter, setRoadmapFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDay, setSelectedDay] = useState(null);
  
  // 300 Website Prompt Parameters State
  const [paramCategoryFilter, setParamCategoryFilter] = useState("all");
  const [paramSearchQuery, setParamSearchQuery] = useState("");
  
  // Modals
  const [showAddClientModal, setShowAddClientModal] = useState(false);
  const [showProofModal, setShowProofModal] = useState(false);
  const [currentLoggingDay, setCurrentLoggingDay] = useState(null);
  const [copyToast, setCopyToast] = useState("");

  // New Client Form
  const [newClient, setNewClient] = useState({
    name: "",
    domain: "",
    industry: "",
    targetClicks: 10000,
    currentClicks: 0,
    primaryKeywords: ""
  });

  // Proof Log Form
  const [proofForm, setProofForm] = useState({
    by: "",
    date: "",
    notes: "",
    link: ""
  });

  // Programmatic SEO State
  const [progService, setProgService] = useState("Cosmetic Dentistry");
  const [progLocations, setProgLocations] = useState(DEFAULT_LOCATIONS.slice(0, 10).join("\n"));
  const [progPhone, setProgPhone] = useState("(555) 019-2834");
  const [generatedPages, setGeneratedPages] = useState([]);
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);

  const handleGenerateProgrammaticPages = () => {
    if (!progService.trim() || !progLocations.trim()) return;
    const locList = progLocations.split("\n").map(l => l.trim()).filter(Boolean);
    const pages = locList.map(loc => generateLocationPage({
      service: progService,
      location: loc,
      domain: activeClient?.domain || "example.com",
      clientName: activeClient?.name || "Local Specialists",
      phone: progPhone
    }));
    setGeneratedPages(pages);
    setActivePreviewIndex(0);
    showNotification(`Generated ${pages.length} programmatic location pages!`);
  };

  const exportAllPagesAsJSON = () => {
    if (generatedPages.length === 0) return;
    const blob = new Blob([JSON.stringify(generatedPages, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${progService.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-location-pages.json`;
    a.click();
    showNotification("Downloaded JSON export of all pages!");
  };

  const fullProgram = generate100DaysProgram();

  // Load clients from localStorage or fallback to INITIAL_CLIENTS
  useEffect(() => {
    try {
      const saved = localStorage.getItem("seo_growth_os_clients");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.length > 0) {
          setClients(parsed);
          setActiveClientId(parsed[0].id);
          return;
        }
      }
    } catch (e) {
      console.error("Failed to load clients", e);
    }
    setClients(INITIAL_CLIENTS);
    setActiveClientId(INITIAL_CLIENTS[0].id);
  }, []);

  // Save clients to localStorage on updates
  useEffect(() => {
    if (clients.length > 0) {
      try {
        localStorage.setItem("seo_growth_os_clients", JSON.stringify(clients));
      } catch (e) {
        console.error("Failed to save clients", e);
      }
    }
  }, [clients]);

  const activeClient = clients.find(c => c.id === activeClientId) || clients[0] || null;

  // Toggle Day Completion
  const toggleDayStatus = (dayNum) => {
    if (!activeClient) return;
    const isDone = (activeClient.completedDays || []).includes(dayNum);
    const updatedCompleted = isDone
      ? (activeClient.completedDays || []).filter(d => d !== dayNum)
      : [...(activeClient.completedDays || []), dayNum];

    const updatedClients = clients.map(c => {
      if (c.id === activeClient.id) {
        return { ...c, completedDays: updatedCompleted };
      }
      return c;
    });
    setClients(updatedClients);
  };

  // Toggle Individual Micro-Task (1 of 1,000 tasks)
  const toggleTaskId = (taskId) => {
    if (!activeClient) return;
    const currentTaskIds = activeClient.completedTaskIds || [];
    const isDone = currentTaskIds.includes(taskId);
    const updated = isDone
      ? currentTaskIds.filter(id => id !== taskId)
      : [...currentTaskIds, taskId];

    const updatedClients = clients.map(c => {
      if (c.id === activeClient.id) {
        return { ...c, completedTaskIds: updated };
      }
      return c;
    });
    setClients(updatedClients);
  };

  // Toggle All 10 Micro-Tasks for the Day
  const toggleAllTasksForDay = (dailyTasks, currentDayNum) => {
    if (!activeClient) return;
    const currentTaskIds = new Set(activeClient.completedTaskIds || []);
    const allDailyIds = dailyTasks.map(t => t.id);
    const allDone = allDailyIds.every(id => currentTaskIds.has(id));

    if (allDone) {
      allDailyIds.forEach(id => currentTaskIds.delete(id));
    } else {
      allDailyIds.forEach(id => currentTaskIds.add(id));
    }

    const updatedTaskIds = Array.from(currentTaskIds);
    const isDayCompleted = !allDone;
    let updatedCompletedDays = activeClient.completedDays || [];
    if (isDayCompleted && !updatedCompletedDays.includes(currentDayNum)) {
      updatedCompletedDays = [...updatedCompletedDays, currentDayNum];
    } else if (!isDayCompleted && updatedCompletedDays.includes(currentDayNum)) {
      updatedCompletedDays = updatedCompletedDays.filter(d => d !== currentDayNum);
    }

    const updatedClients = clients.map(c => {
      if (c.id === activeClient.id) {
        return {
          ...c,
          completedTaskIds: updatedTaskIds,
          completedDays: updatedCompletedDays
        };
      }
      return c;
    });
    setClients(updatedClients);
    showNotification(allDone ? `Reset 10 tasks for Day ${currentDayNum}` : `All 10 tasks marked done for Day ${currentDayNum}!`);
  };

  // Open Proof Logger Modal
  const openProofLogger = (day) => {
    setCurrentLoggingDay(day);
    const existingProof = activeClient?.proofLogs?.[day.dayNumber] || {
      by: "SEO Strategist",
      date: new Date().toISOString().split("T")[0],
      notes: "",
      link: ""
    };
    setProofForm({
      by: existingProof.by || "SEO Specialist",
      date: existingProof.date || new Date().toISOString().split("T")[0],
      notes: existingProof.notes || "",
      link: existingProof.link || ""
    });
    setShowProofModal(true);
  };

  // Save Proof of Work
  const saveProofOfWork = (e) => {
    e.preventDefault();
    if (!activeClient || !currentLoggingDay) return;

    const dayNum = currentLoggingDay.dayNumber;
    const updatedProofLogs = {
      ...activeClient.proofLogs,
      [dayNum]: { ...proofForm }
    };

    // Auto mark as completed if not already
    const updatedCompleted = activeClient.completedDays.includes(dayNum)
      ? activeClient.completedDays
      : [...activeClient.completedDays, dayNum];

    const updatedClients = clients.map(c => {
      if (c.id === activeClient.id) {
        return {
          ...c,
          completedDays: updatedCompleted,
          proofLogs: updatedProofLogs
        };
      }
      return c;
    });

    setClients(updatedClients);
    setShowProofModal(false);
    showNotification(`Proof logged for Day ${dayNum}!`);
  };

  // Create Client
  const handleCreateClient = (e) => {
    e.preventDefault();
    if (!newClient.name || !newClient.domain) return;

    const created = {
      id: "client-" + Date.now(),
      name: newClient.name,
      domain: newClient.domain.replace(/^https?:\/\//, "").replace(/\/$/, ""),
      industry: newClient.industry || "General Business",
      targetClicks: Number(newClient.targetClicks) || 10000,
      currentClicks: Number(newClient.currentClicks) || 0,
      startDate: new Date().toISOString().split("T")[0],
      targetDate: new Date(Date.now() + 100 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      primaryKeywords: newClient.primaryKeywords
        ? newClient.primaryKeywords.split(",").map(k => k.trim())
        : [],
      completedDays: [],
      inProgressDays: [],
      proofLogs: {}
    };

    setClients([...clients, created]);
    setActiveClientId(created.id);
    setShowAddClientModal(false);
    setNewClient({
      name: "",
      domain: "",
      industry: "",
      targetClicks: 10000,
      currentClicks: 0,
      primaryKeywords: ""
    });
    showNotification(`Client "${created.name}" created!`);
  };

  const showNotification = (msg) => {
    setCopyToast(msg);
    setTimeout(() => setCopyToast(""), 3000);
  };

  const copyToClipboard = (text, label = "AI Prompt") => {
    // Replace placeholders with client data
    let formattedText = text;
    if (activeClient) {
      formattedText = formattedText
        .replace(/\[WEBSITE_URL\]/g, activeClient.domain)
        .replace(/\[CLIENT_NAME\]/g, activeClient.name)
        .replace(/\[INDUSTRY\]/g, activeClient.industry)
        .replace(/\[TARGET_KEYWORD\]/g, activeClient.primaryKeywords[0] || "primary keyword");
    }

    navigator.clipboard.writeText(formattedText);
    showNotification(`${label} copied to clipboard!`);
  };

  const handleCopyMasterPrompt = () => {
    const promptText = generateMasterWebsitePrompt({
      clientName: activeClient?.name || "Client Website",
      websiteUrl: activeClient?.domain || "example.com",
      industry: activeClient?.industry || "Services",
      primaryService: Array.isArray(activeClient?.primaryKeywords) ? activeClient?.primaryKeywords[0] : (activeClient?.primaryKeywords || "Primary Service")
    });
    navigator.clipboard.writeText(promptText);
    showNotification("Copied Complete 300-Rule Master Website Creation Prompt!");
  };

  const exportParametersAsJSON = () => {
    const blob = new Blob([JSON.stringify(WEBSITE_PROMPT_PARAMETERS, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `300-website-prompt-parameters.json`;
    a.click();
    showNotification("Exported 300 Website Prompt Parameters as JSON!");
  };

  // Metrics Calculations
  const completedCount = activeClient ? (activeClient.completedDays || []).length : 0;
  const overallProgress = Math.round((completedCount / 100) * 100);

  const completedTasksCount = activeClient ? (activeClient.completedTaskIds || []).length : 0;
  const tasksProgress = Math.round((completedTasksCount / 1000) * 100);

  const phase1Completed = activeClient
    ? (activeClient.completedDays || []).filter(d => d <= 15).length
    : 0;
  const phase1Progress = Math.round((phase1Completed / 15) * 100);

  const phase2Completed = activeClient
    ? (activeClient.completedDays || []).filter(d => d > 15).length
    : 0;
  const phase2Progress = Math.round((phase2Completed / 85) * 100);

  // Filter program items
  const filteredProgram = fullProgram.filter(item => {
    // Filter by phase/status
    if (roadmapFilter === "phase1" && item.phase !== 1) return false;
    if (roadmapFilter === "phase2" && item.phase !== 2) return false;
    if (roadmapFilter === "todo" && activeClient?.completedDays.includes(item.dayNumber)) return false;
    if (roadmapFilter === "completed" && !activeClient?.completedDays.includes(item.dayNumber)) return false;

    // Search query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const match =
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.tool.toLowerCase().includes(q) ||
        item.plainEnglish.toLowerCase().includes(q) ||
        String(item.dayNumber).includes(q);
      if (!match) return false;
    }
    return true;
  });

  // Filter 300 Website Prompt Parameters
  const filteredParameters = WEBSITE_PROMPT_PARAMETERS.filter((p) => {
    if (paramCategoryFilter !== "all" && p.category !== paramCategoryFilter) return false;
    if (paramSearchQuery.trim() !== "") {
      const q = paramSearchQuery.toLowerCase();
      const match =
        p.name.toLowerCase().includes(q) ||
        p.directive.toLowerCase().includes(q) ||
        p.tag.toLowerCase().includes(q) ||
        String(p.id).includes(q) ||
        p.importance.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  return (
    <div style={{ minHeight: "100vh", paddingBottom: "80px" }}>
      {/* Toast Notification */}
      {copyToast && (
        <div
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            zIndex: 9999,
            background: "#10b981",
            color: "#ffffff",
            padding: "12px 24px",
            borderRadius: "12px",
            fontWeight: "600",
            boxShadow: "0 10px 25px rgba(16, 185, 129, 0.4)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            animation: "fadeIn 0.2s ease"
          }}
        >
          <span>✓</span> {copyToast}
        </div>
      )}

      {/* TOP NAVBAR */}
      <header
        style={{
          borderBottom: "1px solid var(--border)",
          background: "rgba(10, 13, 20, 0.8)",
          backdropFilter: "blur(12px)",
          position: "sticky",
          top: 0,
          zIndex: 50
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px"
          }}
        >
          {/* Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <img
              src="/siteicon.svg"
              alt="SEO Growth OS Site Icon"
              width="42"
              height="42"
              style={{
                borderRadius: "12px",
                boxShadow: "0 0 20px rgba(56, 189, 248, 0.4)",
                display: "block"
              }}
            />
            <div>
              <h1 style={{ fontSize: "1.25rem", color: "var(--text-primary)", lineHeight: 1.2 }}>
                SEO Growth OS
              </h1>
              <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.02em" }}>
                100-DAY PROCESS ENGINE • TARGET: 10,000 CLICKS/MO
              </p>
            </div>
          </div>

          {/* Client Selector & Add Client Button */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Website:</span>
              <select
                value={activeClientId}
                onChange={(e) => setActiveClientId(e.target.value)}
                style={{
                  minWidth: "220px",
                  fontWeight: "600",
                  cursor: "pointer"
                }}
              >
                {clients.map(c => (
                  <option key={c.id} value={c.id}>
                    {c.name} ({c.domain})
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => setShowAddClientModal(true)}
              className="btn btn-secondary"
              style={{ fontSize: "0.8rem", padding: "8px 14px" }}
            >
              + Add Client
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main style={{ maxWidth: "1400px", margin: "0 auto", padding: "24px" }}>
        {/* CLIENT EXECUTIVE STATS HERO */}
        {activeClient && (
          <div className="glass-panel" style={{ padding: "24px", marginBottom: "28px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "20px",
                alignItems: "center"
              }}
            >
              {/* Client Info */}
              <div>
                <span className="badge badge-medium" style={{ marginBottom: "8px" }}>
                  Active Project
                </span>
                <h2 style={{ fontSize: "1.6rem", marginBottom: "4px" }}>
                  {activeClient.name}
                </h2>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                  <a
                    href={`https://${activeClient.domain}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "var(--accent-cyan)", textDecoration: "none", fontSize: "0.9rem", fontWeight: "600" }}
                  >
                    🌐 {activeClient.domain} ↗
                  </a>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>•</span>
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>
                    {activeClient.industry}
                  </span>
                </div>
              </div>

              {/* Progress Toward 1,000 Tasks & 100 Days */}
              <div style={{ background: "rgba(10, 13, 20, 0.6)", padding: "16px", borderRadius: "12px", border: "1px solid var(--border)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                  <span style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>1,000 Actionable Tasks</span>
                  <span style={{ fontSize: "0.95rem", fontWeight: "700", color: "#10b981" }}>
                    {completedTasksCount} / 1,000 Tasks ({tasksProgress}%)
                  </span>
                </div>
                <div style={{ width: "100%", height: "6px", background: "rgba(255, 255, 255, 0.08)", borderRadius: "3px", overflow: "hidden", marginBottom: "12px" }}>
                  <div
                    style={{
                      width: `${tasksProgress}%`,
                      height: "100%",
                      background: "linear-gradient(90deg, #10b981, #38bdf8)",
                      borderRadius: "3px",
                      transition: "width 0.4s ease"
                    }}
                  />
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                  <span style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>100-Day Lifecycle Roadmap</span>
                  <span style={{ fontSize: "0.9rem", fontWeight: "600", color: "var(--accent-cyan)" }}>
                    {completedCount} / 100 Days ({overallProgress}%)
                  </span>
                </div>
                <div style={{ width: "100%", height: "6px", background: "rgba(255, 255, 255, 0.08)", borderRadius: "3px", overflow: "hidden" }}>
                  <div
                    style={{
                      width: `${overallProgress}%`,
                      height: "100%",
                      background: "linear-gradient(90deg, #38bdf8, #6366f1)",
                      borderRadius: "3px",
                      transition: "width 0.4s ease"
                    }}
                  />
                </div>
              </div>

              {/* 10-Stage Flow & Free Arsenal Badges */}
              <div style={{ display: "flex", gap: "12px" }}>
                <div style={{ flex: 1, background: "rgba(10, 13, 20, 0.6)", padding: "14px", borderRadius: "12px", border: "1px solid var(--border)" }}>
                  <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", display: "block" }}>
                    PROCESS ARCHITECTURE
                  </span>
                  <span style={{ fontSize: "1.1rem", fontWeight: "700", color: "#38bdf8" }}>
                    10 Stages (0→1000)
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "#94a3b8", display: "block" }}>
                    Design to 10k Clicks
                  </span>
                </div>

                <div style={{ flex: 1, background: "rgba(10, 13, 20, 0.6)", padding: "14px", borderRadius: "12px", border: "1px solid var(--border)" }}>
                  <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", display: "block" }}>
                    BUDGET & ARSENAL
                  </span>
                  <span style={{ fontSize: "1.1rem", fontWeight: "700", color: "#10b981" }}>
                    100% Free Tools
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "#94a3b8", display: "block" }}>
                    $0 Tool Spend Required
                  </span>
                </div>
              </div>

              {/* Traffic Milestone Target */}
              <div style={{ background: "rgba(16, 185, 129, 0.08)", padding: "16px", borderRadius: "12px", border: "1px solid rgba(16, 185, 129, 0.25)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.8rem", color: "#6ee7b7", fontWeight: "600" }}>ORGANIC CLICKS GOAL</span>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>~330 clicks/day</span>
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: "800", color: "#10b981", margin: "4px 0" }}>
                  {activeClient.currentClicks.toLocaleString()} / {activeClient.targetClicks.toLocaleString()}
                </div>
                <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
                  Monthly Organic Traffic Target
                </span>
              </div>
            </div>
          </div>
        )}

        {/* VIEW MODE TOGGLE (SIMPLE VS FULL MATRIX) */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", background: "rgba(16, 21, 34, 0.7)", padding: "10px 16px", borderRadius: "12px", border: "1px solid var(--border)", flexWrap: "wrap", gap: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontWeight: "600" }}>Experience Mode:</span>
            <button
              onClick={() => setViewMode("guided")}
              style={{
                padding: "6px 14px",
                borderRadius: "8px",
                fontSize: "0.85rem",
                fontWeight: "700",
                cursor: "pointer",
                border: viewMode === "guided" ? "1px solid #10b981" : "1px solid var(--border)",
                background: viewMode === "guided" ? "rgba(16, 185, 129, 0.15)" : "transparent",
                color: viewMode === "guided" ? "#34d399" : "var(--text-muted)"
              }}
            >
              🌱 Simple 1-Step Mode (Easy & Relaxed)
            </button>
            <button
              onClick={() => setViewMode("matrix")}
              style={{
                padding: "6px 14px",
                borderRadius: "8px",
                fontSize: "0.85rem",
                fontWeight: "700",
                cursor: "pointer",
                border: viewMode === "matrix" ? "1px solid var(--accent-cyan)" : "1px solid var(--border)",
                background: viewMode === "matrix" ? "rgba(56, 189, 248, 0.15)" : "transparent",
                color: viewMode === "matrix" ? "var(--accent-cyan)" : "var(--text-muted)"
              }}
            >
              📊 Full 100-Day View
            </button>
          </div>

          <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            {viewMode === "guided" ? "Focusing on 1 clear action at a time" : "Displaying complete matrix"}
          </span>
        </div>

        {/* PRIMARY NAVIGATION TABS */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderBottom: "1px solid var(--border)",
            paddingBottom: "12px",
            marginBottom: "24px",
            flexWrap: "wrap"
          }}
        >
          <button
            onClick={() => setActiveTab("roadmap")}
            className={`btn ${activeTab === "roadmap" ? "btn-primary" : "btn-secondary"}`}
          >
            🎯 100-Day Process Engine (1,000 Tasks)
          </button>

          <button
            onClick={() => setActiveTab("parameters")}
            className={`btn ${activeTab === "parameters" ? "btn-primary" : "btn-secondary"}`}
          >
            ⚡ 300 Website Prompt Parameters (Best Structure)
          </button>

          <button
            onClick={() => setActiveTab("programmatic")}
            className={`btn ${activeTab === "programmatic" ? "btn-primary" : "btn-secondary"}`}
          >
            🏭 Location & Keyword Pages (pSEO Engine)
          </button>

          <button
            onClick={() => setActiveTab("tools")}
            className={`btn ${activeTab === "tools" ? "btn-primary" : "btn-secondary"}`}
          >
            🛠️ 100% Free Tools Arsenal ({FREE_TOOLS_DIRECTORY.length})
          </button>

          <button
            onClick={() => setActiveTab("knowledge")}
            className={`btn ${activeTab === "knowledge" ? "btn-primary" : "btn-secondary"}`}
          >
            📚 Knowledge Base & AI Prompts
          </button>

          <button
            onClick={() => setActiveTab("proof")}
            className={`btn ${activeTab === "proof" ? "btn-primary" : "btn-secondary"}`}
          >
            📊 Activity & Indexing Logs ({Object.keys(activeClient?.proofLogs || {}).length})
          </button>
        </div>

        {/* TAB 1: 100-DAY ACTION ROADMAP */}
        {activeTab === "roadmap" && (
          <div>
            {viewMode === "guided" ? (
              /* GUIDED SIMPLE MODE - 1 TASK AT A TIME */
              <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                {/* 10-Stage Lifecycle Navigation Pills */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "8px", marginBottom: "20px" }}>
                  {PILLARS_1000.map((pillar, pIdx) => {
                    const startDayIdx = pIdx * 10;
                    const endDayIdx = startDayIdx + 9;
                    const isActive = currentStepIndex >= startDayIdx && currentStepIndex <= endDayIdx;
                    return (
                      <div
                        key={pillar.id}
                        onClick={() => setCurrentStepIndex(startDayIdx)}
                        style={{
                          background: isActive ? "rgba(56, 189, 248, 0.15)" : "rgba(255, 255, 255, 0.02)",
                          border: isActive ? "1px solid var(--accent-cyan)" : "1px solid var(--border)",
                          padding: "8px 10px",
                          borderRadius: "8px",
                          cursor: "pointer",
                          transition: "all 0.2s"
                        }}
                      >
                        <span style={{ fontSize: "0.7rem", color: isActive ? "var(--accent-cyan)" : "var(--text-muted)", fontWeight: "700", display: "block" }}>
                          {pillar.icon} Stage {pIdx + 1}
                        </span>
                        <span style={{ fontSize: "0.75rem", color: isActive ? "#fff" : "var(--text-secondary)", fontWeight: "600", display: "block", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {pillar.days}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* The Active Single Step Focus Card */}
                {fullProgram[currentStepIndex] && (() => {
                  const currentItem = fullProgram[currentStepIndex];
                  const isDone = (activeClient?.completedDays || []).includes(currentItem.dayNumber);
                  const dailyTasks = getTasksForDay(currentItem.dayNumber);

                  return (
                    <div className="glass-panel" style={{ padding: "32px", border: isDone ? "1px solid #10b981" : "1px solid var(--border)", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
                      {/* Step Header */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                        <span style={{ fontSize: "1rem", fontWeight: "800", color: "var(--accent-cyan)", fontFamily: "'Outfit', sans-serif" }}>
                          DAY {currentItem.dayNumber} OF 100 • {currentItem.phaseName}
                        </span>
                        <div style={{ display: "flex", gap: "8px" }}>
                          <span className={currentItem.impact === "Critical" ? "badge badge-critical" : "badge badge-high"}>
                            {currentItem.impact}
                          </span>
                          {isDone && <span className="badge badge-completed">✓ Day Completed</span>}
                        </div>
                      </div>

                      {/* Main Title */}
                      <h2 style={{ fontSize: "1.6rem", marginBottom: "16px", color: isDone ? "#94a3b8" : "#fff" }}>
                        {currentItem.title}
                      </h2>

                      {/* Plain English Box */}
                      <div style={{ background: "rgba(56, 189, 248, 0.08)", border: "1px solid rgba(56, 189, 248, 0.25)", borderRadius: "12px", padding: "18px", marginBottom: "18px" }}>
                        <h4 style={{ fontSize: "0.85rem", color: "var(--accent-cyan)", textTransform: "uppercase", marginBottom: "6px" }}>
                          🧠 In Simple Words (Why You Do This):
                        </h4>
                        <p style={{ fontSize: "0.95rem", color: "#f1f5f9", lineHeight: "1.6" }}>
                          {currentItem.plainEnglish}
                        </p>
                      </div>

                      {/* Why It Strengthens the Website */}
                      <div style={{ background: "rgba(16, 185, 129, 0.08)", border: "1px solid rgba(16, 185, 129, 0.25)", borderRadius: "12px", padding: "18px", marginBottom: "22px" }}>
                        <h4 style={{ fontSize: "0.85rem", color: "#34d399", textTransform: "uppercase", marginBottom: "6px" }}>
                          📈 How This Brings Real Traffic:
                        </h4>
                        <p style={{ fontSize: "0.95rem", color: "#f1f5f9", lineHeight: "1.6" }}>
                          {currentItem.whyItHelps}
                        </p>
                      </div>

                      {/* 10 DAILY MICRO-TASKS CHECKLIST */}
                      <div style={{ marginBottom: "26px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px", flexWrap: "wrap", gap: "8px" }}>
                          <h4 style={{ fontSize: "0.95rem", color: "var(--accent-cyan)", textTransform: "uppercase", fontWeight: "700", display: "flex", alignItems: "center", gap: "6px" }}>
                            ⚡ 10 Daily Micro-Tasks (Tasks {(currentItem.dayNumber - 1) * 10 + 1} to {currentItem.dayNumber * 10} of 1,000)
                          </h4>
                          <button
                            onClick={() => toggleAllTasksForDay(dailyTasks, currentItem.dayNumber)}
                            className="btn btn-secondary"
                            style={{ fontSize: "0.75rem", padding: "5px 12px" }}
                          >
                            ✓ Toggle All 10 Tasks
                          </button>
                        </div>

                        {/* Programmatic Banner on Days 51-60 */}
                        {currentItem.dayNumber >= 51 && currentItem.dayNumber <= 60 && (
                          <div style={{ background: "rgba(99, 102, 241, 0.12)", border: "1px solid #6366f1", borderRadius: "10px", padding: "14px", marginBottom: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
                            <div>
                              <span style={{ fontSize: "0.8rem", color: "#818cf8", fontWeight: "700", display: "block" }}>
                                🚀 STAGE 6: PROGRAMMATIC SEO MULTI-PAGE ENGINE ACTIVE (DAYS 51–60)
                              </span>
                              <span style={{ fontSize: "0.85rem", color: "#e2e8f0" }}>
                                Launch 1,000s of location & keyword pages with 1,000+ words & 1.5% density using our built-in generator.
                              </span>
                            </div>
                            <button
                              onClick={() => setActiveTab("programmatic")}
                              className="btn btn-primary"
                              style={{ fontSize: "0.8rem", padding: "8px 14px" }}
                            >
                              Open pSEO Generator →
                            </button>
                          </div>
                        )}

                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                          {dailyTasks.map((task) => {
                            const isTaskDone = (activeClient?.completedTaskIds || []).includes(task.id);
                            return (
                              <div
                                key={task.id}
                                style={{
                                  background: isTaskDone ? "rgba(16, 185, 129, 0.05)" : "rgba(10, 13, 20, 0.5)",
                                  border: isTaskDone ? "1px solid rgba(16, 185, 129, 0.3)" : "1px solid var(--border)",
                                  borderRadius: "10px",
                                  padding: "14px",
                                  transition: "all 0.2s"
                                }}
                              >
                                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                                  <input
                                    type="checkbox"
                                    checked={!!isTaskDone}
                                    onChange={() => toggleTaskId(task.id)}
                                    style={{ marginTop: "4px", width: "18px", height: "18px", cursor: "pointer", accentColor: "#10b981" }}
                                  />
                                  <div style={{ flex: 1 }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px", marginBottom: "4px" }}>
                                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "var(--accent-cyan)", fontWeight: "700" }}>
                                          [{task.id}]
                                        </span>
                                        <span style={{ fontSize: "0.9rem", fontWeight: "700", color: isTaskDone ? "#94a3b8" : "#fff", textDecoration: isTaskDone ? "line-through" : "none" }}>
                                          {task.shortTitle}
                                        </span>
                                      </div>
                                      <div style={{ display: "flex", gap: "6px" }}>
                                        <span className="badge badge-low" style={{ fontSize: "0.7rem", padding: "2px 8px" }}>
                                          🛠️ {task.tool}
                                        </span>
                                        <span className="badge badge-medium" style={{ fontSize: "0.7rem", padding: "2px 8px" }}>
                                          {task.pillar}
                                        </span>
                                      </div>
                                    </div>

                                    <p style={{ fontSize: "0.85rem", color: "#cbd5e1", margin: "4px 0 6px 0", lineHeight: "1.5" }}>
                                      {task.action}
                                    </p>

                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                                      <span style={{ fontSize: "0.75rem", color: "#94a3b8", fontStyle: "italic" }}>
                                        💡 {task.tip}
                                      </span>
                                      <button
                                        onClick={() => copyToClipboard(task.prompt, `${task.id} AI Prompt`)}
                                        className="btn btn-secondary"
                                        style={{ fontSize: "0.72rem", padding: "4px 8px" }}
                                      >
                                        📋 1-Click AI Prompt
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Action Buttons Bar */}
                      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", padding: "18px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", marginBottom: "24px" }}>
                        <button
                          onClick={() => copyToClipboard(currentItem.aiPrompt, `Day ${currentItem.dayNumber} AI Prompt`)}
                          className="btn btn-primary"
                          style={{ flex: 1, padding: "12px", justifyContent: "center" }}
                        >
                          📋 1-Click Copy AI Prompt (For ChatGPT)
                        </button>

                        <button
                          onClick={() => openProofLogger(currentItem)}
                          className="btn btn-secondary"
                          style={{ padding: "12px 18px" }}
                        >
                          📷 Add Proof Note
                        </button>
                      </div>

                      {/* Stepper Navigation */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <button
                          disabled={currentStepIndex === 0}
                          onClick={() => setCurrentStepIndex(prev => Math.max(0, prev - 1))}
                          className="btn btn-secondary"
                          style={{ opacity: currentStepIndex === 0 ? 0.4 : 1, cursor: currentStepIndex === 0 ? "not-allowed" : "pointer" }}
                        >
                          ← Previous Step
                        </button>

                        <div style={{ textAlign: "center", fontSize: "0.85rem", color: "var(--text-muted)" }}>
                          Step {currentStepIndex + 1} of 100
                        </div>

                        <button
                          onClick={() => {
                            if (!isDone) toggleDayStatus(currentItem.dayNumber);
                            setCurrentStepIndex(prev => Math.min(99, prev + 1));
                          }}
                          className="btn btn-success"
                          style={{ padding: "10px 22px", fontSize: "0.95rem" }}
                        >
                          {isDone ? "Next Step →" : "✓ Mark Done & Next Step →"}
                        </button>
                      </div>
                    </div>
                  );
                })()}
              </div>
            ) : (
              /* FULL MATRIX VIEW (ALL 100 CARDS) */
              <div>
            {/* Filter Controls Bar */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "16px",
                marginBottom: "20px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Filter:</span>
                {[
                  { id: "all", label: "All 100 Days" },
                  { id: "phase1", label: "Phase 1: Tech Sprint (Days 1-15)" },
                  { id: "phase2", label: "Phase 2: Repetitive (Days 16-100)" },
                  { id: "todo", label: "Pending" },
                  { id: "completed", label: "Completed" }
                ].map(f => (
                  <button
                    key={f.id}
                    onClick={() => setRoadmapFilter(f.id)}
                    style={{
                      padding: "6px 14px",
                      borderRadius: "8px",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      border: roadmapFilter === f.id ? "1px solid var(--accent-cyan)" : "1px solid var(--border)",
                      background: roadmapFilter === f.id ? "rgba(56, 189, 248, 0.15)" : "transparent",
                      color: roadmapFilter === f.id ? "var(--accent-cyan)" : "var(--text-secondary)"
                    }}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div style={{ position: "relative", minWidth: "260px" }}>
                <input
                  type="text"
                  placeholder="Search tasks, tools, keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ width: "100%", paddingLeft: "34px" }}
                />
                <span style={{ position: "absolute", left: "12px", top: "10px", color: "var(--text-muted)" }}>
                  🔍
                </span>
              </div>
            </div>

            {/* List of Days */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {filteredProgram.map((item) => {
                const isCompleted = activeClient?.completedDays?.includes(item.dayNumber);
                const hasProof = !!activeClient?.proofLogs?.[item.dayNumber];

                return (
                  <div
                    key={item.dayNumber}
                    className="glass-panel"
                    style={{
                      padding: "20px 24px",
                      borderLeft: isCompleted
                        ? "4px solid #10b981"
                        : item.phase === 1
                        ? "4px solid var(--accent-cyan)"
                        : "4px solid #6366f1",
                      transition: "transform 0.2s"
                    }}
                  >
                    {/* Milestone Banner if exists */}
                    {item.milestone && (
                      <div
                        style={{
                          background: "rgba(245, 158, 11, 0.15)",
                          border: "1px solid rgba(245, 158, 11, 0.4)",
                          color: "#fcd34d",
                          padding: "8px 14px",
                          borderRadius: "8px",
                          fontSize: "0.85rem",
                          fontWeight: "700",
                          marginBottom: "14px"
                        }}
                      >
                        {item.milestone}
                      </div>
                    )}

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
                      {/* Left Header */}
                      <div style={{ flex: 1, minWidth: "300px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                          <span
                            style={{
                              fontSize: "1rem",
                              fontWeight: "800",
                              color: item.phase === 1 ? "var(--accent-cyan)" : "#a5b4fc",
                              fontFamily: "'Outfit', sans-serif"
                            }}
                          >
                            DAY {item.dayNumber < 10 ? `0${item.dayNumber}` : item.dayNumber}
                          </span>
                          <span className={item.impact === "Critical" ? "badge badge-critical" : "badge badge-high"}>
                            {item.impact}
                          </span>
                          <span className="badge badge-todo" style={{ fontSize: "0.7rem" }}>
                            {item.category}
                          </span>
                          <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                            ⏱️ {item.duration}
                          </span>
                        </div>

                        <h3 style={{ fontSize: "1.15rem", color: isCompleted ? "var(--text-muted)" : "var(--text-primary)", textDecoration: isCompleted ? "line-through" : "none" }}>
                          {item.title}
                        </h3>

                        {/* Plain English explanation preview */}
                        <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginTop: "6px", lineHeight: "1.5" }}>
                          {item.plainEnglish}
                        </p>

                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "10px", flexWrap: "wrap" }}>
                          <span style={{ fontSize: "0.8rem", color: "var(--accent-cyan)", background: "rgba(56, 189, 248, 0.1)", padding: "3px 8px", borderRadius: "6px" }}>
                            🛠️ Tool: {item.tool}
                          </span>
                          <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                            {item.hackId}
                          </span>
                        </div>
                      </div>

                      {/* Right Action Controls */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-end" }}>
                        <div style={{ display: "flex", gap: "8px" }}>
                          {/* Log Proof Button */}
                          <button
                            onClick={() => openProofLogger(item)}
                            className={`btn ${hasProof ? "btn-success" : "btn-secondary"}`}
                            style={{ fontSize: "0.8rem", padding: "6px 12px" }}
                          >
                            {hasProof ? "✓ Proof Logged" : "📷 Log Proof of Work"}
                          </button>

                          {/* Toggle Completion */}
                          <button
                            onClick={() => toggleDayStatus(item.dayNumber)}
                            style={{
                              padding: "6px 14px",
                              borderRadius: "8px",
                              fontSize: "0.85rem",
                              fontWeight: "700",
                              cursor: "pointer",
                              border: "none",
                              background: isCompleted ? "#10b981" : "rgba(255, 255, 255, 0.08)",
                              color: isCompleted ? "#ffffff" : "var(--text-secondary)",
                              transition: "all 0.2s"
                            }}
                          >
                            {isCompleted ? "✓ Completed" : "Mark Done"}
                          </button>
                        </div>

                        {/* View in Knowledge Base / Copy Prompt */}
                        <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
                          <button
                            onClick={() => copyToClipboard(item.aiPrompt, `Day ${item.dayNumber} AI Prompt`)}
                            className="btn btn-secondary"
                            style={{ fontSize: "0.75rem", padding: "4px 10px" }}
                          >
                            🤖 Copy AI Prompt
                          </button>

                          <button
                            onClick={() => {
                              setSelectedDay(item);
                              setActiveTab("knowledge");
                            }}
                            style={{
                              background: "transparent",
                              border: "none",
                              color: "var(--accent-cyan)",
                              fontSize: "0.75rem",
                              cursor: "pointer",
                              textDecoration: "underline"
                            }}
                          >
                            View Guide & Theory →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
            )}
          </div>
        )}

        {/* TAB 2: PLAIN-ENGLISH KNOWLEDGE BASE & AI PROMPTS */}
        {activeTab === "knowledge" && (
          <div>
            <div style={{ marginBottom: "20px" }}>
              <h2 style={{ fontSize: "1.4rem", marginBottom: "6px" }}>
                The SEO Process Knowledge Base & AI Prompts
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                Every single action explained in plain English for non-technical clients, including why Google rewards it and a ready-to-use AI prompt for ChatGPT or Claude.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "20px" }}>
              {fullProgram.map((item) => (
                <div
                  key={item.dayNumber}
                  className="glass-panel"
                  style={{
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    border: selectedDay?.dayNumber === item.dayNumber ? "1px solid var(--accent-cyan)" : "1px solid var(--border)"
                  }}
                >
                  <div>
                    {/* Header */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                      <span style={{ fontSize: "0.85rem", fontWeight: "700", color: "var(--accent-cyan)" }}>
                        DAY {item.dayNumber} • {item.phaseName}
                      </span>
                      <span className={item.impact === "Critical" ? "badge badge-critical" : "badge badge-high"}>
                        {item.impact}
                      </span>
                    </div>

                    <h3 style={{ fontSize: "1.2rem", marginBottom: "12px" }}>
                      {item.title}
                    </h3>

                    {/* Non-Technical Plain English Box */}
                    <div
                      style={{
                        background: "rgba(56, 189, 248, 0.06)",
                        border: "1px solid rgba(56, 189, 248, 0.2)",
                        borderRadius: "10px",
                        padding: "14px",
                        marginBottom: "12px"
                      }}
                    >
                      <h4 style={{ fontSize: "0.8rem", color: "var(--accent-cyan)", textTransform: "uppercase", marginBottom: "4px" }}>
                        🧠 Plain English (What This Does):
                      </h4>
                      <p style={{ fontSize: "0.88rem", color: "#e2e8f0", lineHeight: "1.5" }}>
                        {item.plainEnglish}
                      </p>
                    </div>

                    {/* Why It Helps Traffic */}
                    <div
                      style={{
                        background: "rgba(16, 185, 129, 0.06)",
                        border: "1px solid rgba(16, 185, 129, 0.2)",
                        borderRadius: "10px",
                        padding: "14px",
                        marginBottom: "16px"
                      }}
                    >
                      <h4 style={{ fontSize: "0.8rem", color: "#34d399", textTransform: "uppercase", marginBottom: "4px" }}>
                        📈 How It Strengthens The Website & Brings Traffic:
                      </h4>
                      <p style={{ fontSize: "0.88rem", color: "#e2e8f0", lineHeight: "1.5" }}>
                        {item.whyItHelps}
                      </p>
                    </div>

                    {/* Step-by-Step Action Items */}
                    <div style={{ marginBottom: "16px" }}>
                      <h4 style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "6px" }}>
                        Action Checklist:
                      </h4>
                      <ul style={{ paddingLeft: "18px", fontSize: "0.85rem", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "4px" }}>
                        {item.actionSteps.map((step, idx) => (
                          <li key={idx}>{step}</li>
                        ))}
                      </ul>
                    </div>

                    {/* AI Prompt Snippet */}
                    <div
                      style={{
                        background: "rgba(15, 23, 42, 0.9)",
                        borderRadius: "10px",
                        padding: "12px",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        marginBottom: "16px"
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                        <span style={{ fontSize: "0.75rem", color: "#a5b4fc", fontWeight: "600" }}>
                          🤖 Ready-To-Use AI Prompt
                        </span>
                        <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
                          Paste into ChatGPT/Claude
                        </span>
                      </div>
                      <p style={{ fontSize: "0.75rem", color: "#cbd5e1", maxHeight: "100px", overflowY: "auto", whiteSpace: "pre-wrap", fontFamily: "'JetBrains Mono', monospace" }}>
                        {item.aiPrompt}
                      </p>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "12px", borderTop: "1px solid var(--border)" }}>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                      Tool: <strong style={{ color: "var(--text-primary)" }}>{item.tool}</strong>
                    </span>

                    <button
                      onClick={() => copyToClipboard(item.aiPrompt, `Day ${item.dayNumber} AI Prompt`)}
                      className="btn btn-primary"
                      style={{ fontSize: "0.8rem", padding: "6px 14px" }}
                    >
                      📋 Copy Pre-Filled Prompt
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: FREE TOOLS & CHROME EXTENSIONS ARSENAL */}
        {activeTab === "tools" && (
          <div>
            <div style={{ marginBottom: "20px" }}>
              <h2 style={{ fontSize: "1.4rem", marginBottom: "6px" }}>
                The Zero-Cost SEO Toolkit & Chrome Extensions
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                Every tool needed to reach 10,000 monthly clicks is 100% free. No expensive $150/month subscriptions required.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "20px" }}>
              {FREE_TOOLS_DIRECTORY.map((tool) => (
                <div key={tool.id} className="glass-panel" style={{ padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                      <span className="badge badge-medium">{tool.type}</span>
                      <span className="badge badge-completed">{tool.badge}</span>
                    </div>

                    <h3 style={{ fontSize: "1.25rem", marginBottom: "6px" }}>{tool.name}</h3>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "16px", lineHeight: "1.5" }}>
                      {tool.description}
                    </p>

                    <h4 style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "6px" }}>
                      Primary Use Cases:
                    </h4>
                    <ul style={{ paddingLeft: "18px", fontSize: "0.85rem", color: "#cbd5e1", display: "flex", flexDirection: "column", gap: "4px", marginBottom: "16px" }}>
                      {tool.useCases.map((uc, idx) => (
                        <li key={idx}>{uc}</li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Open {tool.name} ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: PROOF OF WORK & CLIENT REPORT GENERATOR */}
        {activeTab === "proof" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", marginBottom: "20px" }}>
              <div>
                <h2 style={{ fontSize: "1.4rem", marginBottom: "6px" }}>
                  Proof of Work & Executive Deliverables
                </h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  Verified record of every task executed for <strong>{activeClient?.name}</strong>. Print or export directly to show complete transparency.
                </p>
              </div>

              <button
                onClick={() => window.print()}
                className="btn btn-primary no-print"
              >
                🖨️ Print / Save as PDF Report
              </button>
            </div>

            {/* Proof Log Table */}
            <div className="glass-panel" style={{ padding: "20px", overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem", textAlign: "left" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border)", color: "var(--text-muted)" }}>
                    <th style={{ padding: "12px 14px" }}>DAY</th>
                    <th style={{ padding: "12px 14px" }}>TASK & FOCUS</th>
                    <th style={{ padding: "12px 14px" }}>COMPLETED BY</th>
                    <th style={{ padding: "12px 14px" }}>DATE</th>
                    <th style={{ padding: "12px 14px" }}>EXECUTION NOTES</th>
                    <th style={{ padding: "12px 14px" }}>PROOF LINK</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(activeClient?.proofLogs || {}).length === 0 ? (
                    <tr>
                      <td colSpan="6" style={{ padding: "30px", textAlign: "center", color: "var(--text-muted)" }}>
                        No proof logs recorded yet. Click "Log Proof of Work" on any roadmap task to add verified notes.
                      </td>
                    </tr>
                  ) : (
                    Object.entries(activeClient.proofLogs).map(([dayKey, proof]) => {
                      const dayItem = fullProgram.find(p => p.dayNumber === Number(dayKey));
                      return (
                        <tr key={dayKey} style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                          <td style={{ padding: "14px", fontWeight: "700", color: "var(--accent-cyan)" }}>
                            Day {dayKey}
                          </td>
                          <td style={{ padding: "14px", maxWidth: "240px" }}>
                            <div style={{ fontWeight: "600", color: "var(--text-primary)" }}>{dayItem?.title || `Day ${dayKey}`}</div>
                            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{dayItem?.category}</div>
                          </td>
                          <td style={{ padding: "14px", color: "var(--text-secondary)" }}>
                            {proof.by || "SEO Lead"}
                          </td>
                          <td style={{ padding: "14px", color: "var(--text-muted)", fontSize: "0.85rem" }}>
                            {proof.date}
                          </td>
                          <td style={{ padding: "14px", color: "#e2e8f0", maxWidth: "340px", lineHeight: "1.4" }}>
                            {proof.notes || "Executed according to specification."}
                          </td>
                          <td style={{ padding: "14px" }}>
                            {proof.link ? (
                              <a
                                href={proof.link}
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: "var(--accent-cyan)", textDecoration: "none", fontWeight: "600", fontSize: "0.85rem" }}
                              >
                                View Proof ↗
                              </a>
                            ) : (
                              <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>Internal verified</span>
                            )}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 5: PROGRAMMATIC LOCATION PAGES ENGINE (pSEO) */}
        {activeTab === "programmatic" && (
          <div>
            <div style={{ marginBottom: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
                <div>
                  <h2 style={{ fontSize: "1.4rem", marginBottom: "6px" }}>
                    Programmatic SEO & Location Page Generator
                  </h2>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                    Generate hundreds of optimized, 1,000+ word location and service landing pages for <strong>{activeClient?.name}</strong> with target keywords in the first 100 words, balanced density, and Local JSON-LD schema.
                  </p>
                </div>

                {generatedPages.length > 0 && (
                  <button
                    onClick={exportAllPagesAsJSON}
                    className="btn btn-primary"
                  >
                    📥 Export All ({generatedPages.length}) Pages as JSON
                  </button>
                )}
              </div>
            </div>

            {/* Algorithmic Guidelines Alert */}
            <div
              style={{
                background: "rgba(56, 189, 248, 0.08)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                borderRadius: "12px",
                padding: "16px 20px",
                marginBottom: "24px"
              }}
            >
              <h4 style={{ color: "var(--accent-cyan)", fontSize: "0.95rem", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span>⚠️</span> 2026 Google Ranking Rules for Programmatic Pages:
              </h4>
              <ul style={{ paddingLeft: "20px", fontSize: "0.85rem", color: "#e2e8f0", display: "flex", flexDirection: "column", gap: "6px" }}>
                <li>
                  <strong>Keywords in the First 100 Words (Hack #042):</strong> Google evaluates the opening paragraph to determine primary topical intent. The target keyword must appear in the opening hook and H1.
                </li>
                <li>
                  <strong>Safe Keyword Density (1.5% – 2.0% vs 5% Danger):</strong> Never exceed 2% keyword density. A 5% density (50 keyword repetitions per 1,000 words) triggers Google&apos;s SpamBrain keyword-stuffing penalty (Hack #060). Our engine balances keyword frequency with natural synonyms and entities.
                </li>
                <li>
                  <strong>Structured Data (Hacks #047 & #091):</strong> Every generated page automatically includes validated <code>LocalBusiness</code> JSON-LD and <code>FAQPage</code> schemas for rich snippet eligibility.
                </li>
              </ul>
            </div>

            {/* Generator Form Controls */}
            <div className="glass-panel" style={{ padding: "24px", marginBottom: "28px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", marginBottom: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "4px" }}>
                    Core Service / Target Keyword *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Cosmetic Dentistry, Emergency Plumber, Roof Repair"
                    value={progService}
                    onChange={(e) => setProgService(e.target.value)}
                    style={{ width: "100%" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "4px" }}>
                    Local Phone Hotline *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. (555) 019-2834"
                    value={progPhone}
                    onChange={(e) => setProgPhone(e.target.value)}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "4px" }}>
                  Target Cities / Locations List (1 per line) *
                </label>
                <textarea
                  rows="5"
                  required
                  placeholder={"Austin, TX\nDallas, TX\nHouston, TX..."}
                  value={progLocations}
                  onChange={(e) => setProgLocations(e.target.value)}
                  style={{ width: "100%", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.85rem" }}
                />
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  Enter as many cities, counties, or neighborhoods as needed. Each will generate a dedicated 1,000+ word page.
                </span>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "16px" }}>
                <button
                  type="button"
                  onClick={handleGenerateProgrammaticPages}
                  className="btn btn-primary"
                  style={{ padding: "10px 24px", fontSize: "0.95rem" }}
                >
                  ⚡ Generate Programmatic Location Pages
                </button>
              </div>
            </div>

            {/* Generated Pages List & Live Viewer */}
            {generatedPages.length > 0 && (
              <div style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: "24px", alignItems: "start" }}>
                {/* Left List of Generated Pages */}
                <div className="glass-panel" style={{ padding: "16px", maxHeight: "800px", overflowY: "auto" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", borderBottom: "1px solid var(--border)", paddingBottom: "8px" }}>
                    <span style={{ fontSize: "0.85rem", fontWeight: "700" }}>Generated Pages ({generatedPages.length})</span>
                    <span style={{ fontSize: "0.75rem", color: "var(--accent-cyan)" }}>Click to preview</span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {generatedPages.map((pg, idx) => (
                      <div
                        key={pg.slug}
                        onClick={() => setActivePreviewIndex(idx)}
                        style={{
                          padding: "10px 12px",
                          borderRadius: "8px",
                          cursor: "pointer",
                          background: activePreviewIndex === idx ? "rgba(56, 189, 248, 0.15)" : "rgba(255, 255, 255, 0.03)",
                          border: activePreviewIndex === idx ? "1px solid var(--accent-cyan)" : "1px solid transparent",
                          transition: "all 0.15s"
                        }}
                      >
                        <div style={{ fontWeight: "600", fontSize: "0.85rem", color: activePreviewIndex === idx ? "var(--accent-cyan)" : "var(--text-primary)" }}>
                          📍 {pg.primaryKeyword}
                        </div>
                        <div style={{ display: "flex", gap: "8px", marginTop: "4px", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                          <span>{pg.wordCount} words</span>
                          <span>•</span>
                          <span style={{ color: "#34d399" }}>Density: {pg.keywordDensity}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Live Preview Panel */}
                {generatedPages[activePreviewIndex] && (
                  <div className="glass-panel" style={{ padding: "24px" }}>
                    {/* Top Preview Controls */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px", marginBottom: "16px", borderBottom: "1px solid var(--border)", paddingBottom: "14px" }}>
                      <div>
                        <span className="badge badge-completed" style={{ marginRight: "8px" }}>
                          ✓ 1,000+ Words Ready
                        </span>
                        <span className="badge badge-medium">
                          Density: {generatedPages[activePreviewIndex].keywordDensity}
                        </span>
                      </div>

                      <div style={{ display: "flex", gap: "8px" }}>
                        <button
                          onClick={() => copyToClipboard(generatedPages[activePreviewIndex].content, "Page Markdown")}
                          className="btn btn-secondary"
                          style={{ fontSize: "0.8rem", padding: "6px 12px" }}
                        >
                          📋 Copy Markdown
                        </button>

                        <button
                          onClick={() => copyToClipboard(generatedPages[activePreviewIndex].jsonLdSchema, "Local Schema")}
                          className="btn btn-secondary"
                          style={{ fontSize: "0.8rem", padding: "6px 12px" }}
                        >
                          🏷️ Copy Local Schema
                        </button>
                      </div>
                    </div>

                    {/* Metadata Header */}
                    <div style={{ background: "rgba(10, 13, 20, 0.6)", padding: "16px", borderRadius: "10px", marginBottom: "20px", border: "1px solid var(--border)" }}>
                      <div style={{ marginBottom: "8px" }}>
                        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", display: "block" }}>
                          URL SLUG:
                        </span>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--accent-cyan)", fontSize: "0.85rem" }}>
                          /{generatedPages[activePreviewIndex].slug}
                        </span>
                      </div>

                      <div style={{ marginBottom: "8px" }}>
                        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", display: "block" }}>
                          SEO TITLE TAG (Under 60 chars):
                        </span>
                        <span style={{ fontWeight: "700", color: "#f8fafc", fontSize: "0.95rem" }}>
                          {generatedPages[activePreviewIndex].title}
                        </span>
                      </div>

                      <div>
                        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", display: "block" }}>
                          META DESCRIPTION (Under 160 chars):
                        </span>
                        <span style={{ color: "#cbd5e1", fontSize: "0.88rem" }}>
                          {generatedPages[activePreviewIndex].metaDescription}
                        </span>
                      </div>
                    </div>

                    {/* Content Preview Box */}
                    <div style={{ background: "rgba(15, 23, 42, 0.8)", padding: "20px", borderRadius: "10px", border: "1px solid rgba(255, 255, 255, 0.08)", maxHeight: "550px", overflowY: "auto" }}>
                      <pre style={{ whiteSpace: "pre-wrap", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.88rem", lineHeight: "1.6", color: "#e2e8f0" }}>
                        {generatedPages[activePreviewIndex].content}
                      </pre>
                    </div>

                    {/* Schema Snippets Section */}
                    <div style={{ marginTop: "20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <div style={{ background: "rgba(10, 13, 20, 0.8)", padding: "14px", borderRadius: "10px", border: "1px solid var(--border)" }}>
                        <span style={{ fontSize: "0.75rem", color: "#38bdf8", fontWeight: "700", display: "block", marginBottom: "6px" }}>
                          LocalBusiness JSON-LD Schema:
                        </span>
                        <pre style={{ fontSize: "0.7rem", color: "#94a3b8", maxHeight: "150px", overflowY: "auto", fontFamily: "'JetBrains Mono', monospace" }}>
                          {generatedPages[activePreviewIndex].jsonLdSchema}
                        </pre>
                      </div>

                      <div style={{ background: "rgba(10, 13, 20, 0.8)", padding: "14px", borderRadius: "10px", border: "1px solid var(--border)" }}>
                        <span style={{ fontSize: "0.75rem", color: "#34d399", fontWeight: "700", display: "block", marginBottom: "6px" }}>
                          FAQPage JSON-LD Schema:
                        </span>
                        <pre style={{ fontSize: "0.7rem", color: "#94a3b8", maxHeight: "150px", overflowY: "auto", fontFamily: "'JetBrains Mono', monospace" }}>
                          {generatedPages[activePreviewIndex].faqSchema}
                        </pre>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* TAB: 300 WEBSITE PROMPT PARAMETERS (BEST STRUCTURE & ARCHITECTURE ENGINE) */}
        {activeTab === "parameters" && (
          <div>
            {/* Header Banner */}
            <div style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
                <div style={{ maxWidth: "780px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                    <span className="badge badge-completed" style={{ fontSize: "0.8rem", padding: "4px 10px" }}>
                      ⚡ 300 Architectural Rules
                    </span>
                    <span className="badge badge-medium" style={{ fontSize: "0.8rem", padding: "4px 10px" }}>
                      100% Free / Agency-Grade
                    </span>
                  </div>
                  <h2 style={{ fontSize: "1.5rem", marginBottom: "6px" }}>
                    300 Master Parameters for Website Creation Prompts
                  </h2>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: "1.5" }}>
                    Paste these 300 architectural directives into your AI prompt (Claude / ChatGPT / Gemini) when designing or coding any website. It forces the AI to output flawless 2026 Core Web Vitals, Semantic HTML5, AEO Answer Targets, GEO Entity Citations, and Hierarchical Silos from Day 1.
                  </p>
                </div>

                {/* Master Action Buttons */}
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <button
                    onClick={handleCopyMasterPrompt}
                    className="btn btn-primary"
                    style={{ padding: "10px 20px", display: "flex", alignItems: "center", gap: "8px", fontSize: "0.92rem" }}
                  >
                    <span>📋</span>
                    <span>Copy Complete 300-Rule Master Prompt</span>
                  </button>
                  <button
                    onClick={exportParametersAsJSON}
                    className="btn btn-secondary"
                    style={{ padding: "10px 18px", display: "flex", alignItems: "center", gap: "8px", fontSize: "0.92rem" }}
                  >
                    <span>📥</span>
                    <span>Export JSON</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Category Filter Navigation Pills */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "8px",
                marginBottom: "20px"
              }}
            >
              {PARAMETER_CATEGORIES.map((cat) => {
                const isSelected = paramCategoryFilter === cat.id;
                return (
                  <div
                    key={cat.id}
                    onClick={() => setParamCategoryFilter(cat.id)}
                    style={{
                      padding: "10px 14px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      border: isSelected ? "1px solid var(--accent-cyan)" : "1px solid var(--border)",
                      background: isSelected ? "rgba(56, 189, 248, 0.14)" : "rgba(16, 21, 34, 0.6)",
                      transition: "all 0.15s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "8px"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ fontSize: "1rem" }}>{cat.icon}</span>
                      <span
                        style={{
                          fontSize: "0.82rem",
                          fontWeight: isSelected ? "700" : "500",
                          color: isSelected ? "#38bdf8" : "var(--text-secondary)"
                        }}
                      >
                        {cat.name}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        padding: "2px 7px",
                        borderRadius: "12px",
                        background: isSelected ? "rgba(56, 189, 248, 0.25)" : "rgba(255, 255, 255, 0.05)",
                        color: isSelected ? "#ffffff" : "var(--text-muted)",
                        fontWeight: "600"
                      }}
                    >
                      {cat.count}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Search Bar & Result Summary */}
            <div
              className="glass-panel"
              style={{
                padding: "16px 20px",
                marginBottom: "24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "14px"
              }}
            >
              <div style={{ flex: 1, minWidth: "260px" }}>
                <input
                  type="text"
                  placeholder="Search across all 300 parameters (e.g. LCP, schema, alt text, font display, breadcrumb)..."
                  value={paramSearchQuery}
                  onChange={(e) => setParamSearchQuery(e.target.value)}
                  style={{ width: "100%", padding: "10px 14px", fontSize: "0.9rem" }}
                />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                  Showing <strong style={{ color: "var(--accent-cyan)" }}>{filteredParameters.length}</strong> of 300 Directives
                </span>
                {paramSearchQuery && (
                  <button
                    onClick={() => setParamSearchQuery("")}
                    className="btn btn-secondary"
                    style={{ padding: "6px 12px", fontSize: "0.78rem" }}
                  >
                    Clear Filter
                  </button>
                )}
              </div>
            </div>

            {/* 300 Parameters Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
                gap: "16px"
              }}
            >
              {filteredParameters.map((param) => {
                const importanceColor =
                  param.importance === "Mandatory"
                    ? "#ef4444"
                    : param.importance === "Critical"
                    ? "#f59e0b"
                    : "#38bdf8";

                return (
                  <div
                    key={param.id}
                    className="glass-panel"
                    style={{
                      padding: "18px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      border: "1px solid rgba(255, 255, 255, 0.07)",
                      position: "relative",
                      transition: "transform 0.15s ease, border-color 0.15s ease"
                    }}
                  >
                    <div>
                      {/* Top Meta Header */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "10px"
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: "0.75rem",
                              fontWeight: "700",
                              color: "var(--accent-cyan)",
                              background: "rgba(56, 189, 248, 0.12)",
                              padding: "2px 7px",
                              borderRadius: "6px"
                            }}
                          >
                            #{String(param.id).padStart(3, "0")}
                          </span>
                          <span
                            style={{
                              fontSize: "0.72rem",
                              fontWeight: "600",
                              textTransform: "uppercase",
                              letterSpacing: "0.04em",
                              color: "var(--text-muted)",
                              background: "rgba(255, 255, 255, 0.04)",
                              padding: "2px 6px",
                              borderRadius: "4px"
                            }}
                          >
                            {param.tag}
                          </span>
                        </div>

                        <span
                          style={{
                            fontSize: "0.7rem",
                            fontWeight: "700",
                            color: importanceColor,
                            border: `1px solid ${importanceColor}40`,
                            background: `${importanceColor}15`,
                            padding: "2px 8px",
                            borderRadius: "10px"
                          }}
                        >
                          {param.importance}
                        </span>
                      </div>

                      {/* Directive Name */}
                      <h4
                        style={{
                          fontSize: "0.98rem",
                          fontWeight: "700",
                          color: "#ffffff",
                          marginBottom: "8px",
                          lineHeight: "1.3"
                        }}
                      >
                        {param.name}
                      </h4>

                      {/* Directive Instruction */}
                      <div
                        style={{
                          background: "rgba(10, 13, 20, 0.75)",
                          border: "1px solid rgba(255, 255, 255, 0.05)",
                          borderRadius: "8px",
                          padding: "12px",
                          marginBottom: "14px"
                        }}
                      >
                        <p
                          style={{
                            fontSize: "0.84rem",
                            color: "#cbd5e1",
                            lineHeight: "1.5",
                            margin: 0
                          }}
                        >
                          {param.directive}
                        </p>
                      </div>
                    </div>

                    {/* Copy Directive Action */}
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                      <button
                        onClick={() => {
                          const directiveText = `[Rule #${param.id} - ${param.tag}] ${param.name}: ${param.directive}`;
                          navigator.clipboard.writeText(directiveText);
                          showNotification(`Copied Rule #${param.id} directive!`);
                        }}
                        className="btn btn-secondary"
                        style={{
                          padding: "6px 12px",
                          fontSize: "0.78rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px"
                        }}
                      >
                        <span>📋</span>
                        <span>Copy Directive</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>

      {/* MODAL: ADD CLIENT */}
      {showAddClientModal && (
        <div className="modal-overlay">
          <div className="modal-content animate-fade">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
              <h3 style={{ fontSize: "1.3rem" }}>Add Website / Client</h3>
              <button
                onClick={() => setShowAddClientModal(false)}
                style={{ background: "transparent", border: "none", color: "var(--text-muted)", fontSize: "1.2rem", cursor: "pointer" }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateClient} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "4px" }}>
                  Website / Business Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Cosmetic Dentistry"
                  value={newClient.name}
                  onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                  style={{ width: "100%" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "4px" }}>
                  Domain (Website URL) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. apexdentalstudio.com"
                  value={newClient.domain}
                  onChange={(e) => setNewClient({ ...newClient, domain: e.target.value })}
                  style={{ width: "100%" }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "4px" }}>
                    Industry / Niche
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dental, B2B SaaS, eCommerce"
                    value={newClient.industry}
                    onChange={(e) => setNewClient({ ...newClient, industry: e.target.value })}
                    style={{ width: "100%" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "4px" }}>
                    Monthly Target Clicks
                  </label>
                  <input
                    type="number"
                    value={newClient.targetClicks}
                    onChange={(e) => setNewClient({ ...newClient, targetClicks: e.target.value })}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "4px" }}>
                  Primary Target Keywords (Comma separated)
                </label>
                <input
                  type="text"
                  placeholder="e.g. cosmetic dentist austin, teeth whitening near me"
                  value={newClient.primaryKeywords}
                  onChange={(e) => setNewClient({ ...newClient, primaryKeywords: e.target.value })}
                  style={{ width: "100%" }}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "14px" }}>
                <button
                  type="button"
                  onClick={() => setShowAddClientModal(false)}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Create Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: LOG PROOF OF WORK */}
      {showProofModal && currentLoggingDay && (
        <div className="modal-overlay">
          <div className="modal-content animate-fade">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
              <div>
                <h3 style={{ fontSize: "1.3rem" }}>
                  Log Proof of Work • Day {currentLoggingDay.dayNumber}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                  {currentLoggingDay.title}
                </p>
              </div>
              <button
                onClick={() => setShowProofModal(false)}
                style={{ background: "transparent", border: "none", color: "var(--text-muted)", fontSize: "1.2rem", cursor: "pointer" }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={saveProofOfWork} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "4px" }}>
                    Completed By
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lead SEO / Developer"
                    value={proofForm.by}
                    onChange={(e) => setProofForm({ ...proofForm, by: e.target.value })}
                    style={{ width: "100%" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "4px" }}>
                    Completion Date
                  </label>
                  <input
                    type="date"
                    required
                    value={proofForm.date}
                    onChange={(e) => setProofForm({ ...proofForm, date: e.target.value })}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "4px" }}>
                  Proof URL / Test Result Link (Optional)
                </label>
                <input
                  type="url"
                  placeholder="e.g. https://search.google.com/test/rich-results or live page URL"
                  value={proofForm.link}
                  onChange={(e) => setProofForm({ ...proofForm, link: e.target.value })}
                  style={{ width: "100%" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "4px" }}>
                  What Was Done (Execution Notes) *
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Detail exactly what was changed on the website, verified metrics, or updated code..."
                  value={proofForm.notes}
                  onChange={(e) => setProofForm({ ...proofForm, notes: e.target.value })}
                  style={{ width: "100%" }}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "14px" }}>
                <button
                  type="button"
                  onClick={() => setShowProofModal(false)}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Proof & Mark Done
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
