import React, { useState } from "react";

const Git = () => {
  const [copiedCmd, setCopiedCmd] = useState(null);
  const [difficulty, setDifficulty] = useState("beginner");
  const [expandedSections, setExpandedSections] = useState({});
  const [completedTopics, setCompletedTopics] = useState([]);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const toggleSection = (id) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleTopic = (id) => {
    setCompletedTopics(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const beginnerFlow = [
    { id: 1, cmd: "git clone <repo-url>", desc: "Download a project from GitHub to your computer", explain: "This creates a local copy of the entire repository on your machine. Use this to start working on an existing project." },
    { id: 2, cmd: "git status", desc: "See what files you've changed", explain: "Shows which files are modified, added, or ready to commit. Use this frequently to track your progress." },
    { id: 3, cmd: "git add .", desc: "Mark all your changes to upload", explain: "The dot (.) means 'all files'. You're telling Git 'I want to save these changes'. This is called 'staging'." },
    { id: 4, cmd: 'git commit -m "Your message"', desc: "Save your changes with a description", explain: "Creates a snapshot of your work. The message explains what you changed. Example: 'Fix login button color'" },
    { id: 5, cmd: "git push origin main", desc: "Upload your changes to GitHub", explain: "Sends your commits to GitHub so your team can see them. 'origin' = GitHub, 'main' = main branch." },
    { id: 6, cmd: "git pull origin main", desc: "Download team's latest changes", explain: "Gets the newest code from GitHub. Always do this before starting new work to avoid conflicts." }
  ];

  const intermediateFlow = [
    { id: 1, cmd: "git checkout -b feature/my-feature", desc: "Create your own separate branch", explain: "Branch = your own workspace. Never code directly on 'main'. Always create a feature branch first!" },
    { id: 2, cmd: "git status", desc: "Monitor your changes", explain: "Good habit: check status before every commit" },
    { id: 3, cmd: "git add .", desc: "Stage your changes", explain: "Ready to save your work" },
    { id: 4, cmd: 'git commit -m "feat: add login validation"', desc: "Save with descriptive message", explain: "Use prefix: 'feat:', 'fix:', 'refactor:'. Companies require this!" },
    { id: 5, cmd: "git push origin feature/my-feature", desc: "Upload to your branch", explain: "First time: use full command. Next times: just 'git push'" },
    { id: 6, cmd: "git pull origin main", desc: "Get latest main changes", explain: "Before merging: sync with main to catch conflicts early" },
    { id: 7, cmd: "git merge main", desc: "Bring main code into your branch", explain: "Alternative: use GitHub PR for code review (professional way)" },
    { id: 8, cmd: "git push -f origin feature/my-feature", desc: "Force push (carefully!)", explain: "Only use after merge if history conflicts. -f is dangerous, use sparingly." }
  ];

  const advancedFlow = [
    { id: 1, cmd: "git rebase main", desc: "Replay your commits on top of main", explain: "Cleaner history than merge. Use for local branches before PR." },
    { id: 2, cmd: "git rebase -i HEAD~3", desc: "Edit last 3 commits interactively", explain: "Reorder, squash, or edit commits. Clean up messy commit history." },
    { id: 3, cmd: "git cherry-pick <commit-hash>", desc: "Copy a specific commit to current branch", explain: "Useful when you only want one change from another branch" },
    { id: 4, cmd: "git stash", desc: "Temporarily save work without committing", explain: "Use when you need to switch branches before finishing current work" },
    { id: 5, cmd: "git stash pop", desc: "Restore stashed changes", explain: "Brings back your saved work from stash" },
    { id: 6, cmd: "git log --oneline --graph --all", desc: "View beautiful branch tree", explain: "See all branches and commits in a graph format" },
    { id: 7, cmd: "git reset --soft HEAD~1", desc: "Undo last commit but keep changes", explain: "Useful when you committed too early or wrong message" },
    { id: 8, cmd: "git reflog", desc: "View all past actions (recovery tool)", explain: "Accidentally deleted something? Reflog can help you recover!" }
  ];

  const scenarioQuestions = [
    {
      id: "s1",
      scenario: "😱 Oops! You committed on 'main' instead of a feature branch!",
      solution: "Don't panic! Use: git reset HEAD~1 (undoes commit, keeps changes), then create branch and recommit",
      difficulty: "beginner"
    },
    {
      id: "s2",
      scenario: "🔥 Your teammate changed the same file you changed. Git won't merge!",
      solution: "Conflict! Open the file, find <<<<<<< markers, decide which code to keep, then commit the fix",
      difficulty: "intermediate"
    },
    {
      id: "s3",
      scenario: "💀 You pushed code but lead says 'squash your commits before PR'?",
      solution: "Use: git rebase -i origin/main, mark commits as 'squash', keep first as 'pick'. Clean history!",
      difficulty: "advanced"
    }
  ];

  const getProgressPercentage = () => {
    const currentFlow = difficulty === "beginner" ? beginnerFlow : difficulty === "intermediate" ? intermediateFlow : advancedFlow;
    return Math.round((completedTopics.length / currentFlow.length) * 100);
  };

  const currentFlow = difficulty === "beginner" ? beginnerFlow : difficulty === "intermediate" ? intermediateFlow : advancedFlow;

  return (
    <div className="git-interactive-page">
      <style>{`
        .git-interactive-page {
          background: #050507;
          color: #e6eef8;
          font-family: Inter, ui-sans-serif, system-ui, Arial;
        }

        .sticky-header {
          position: sticky;
          top: 0;
          z-index: 30;
          background: linear-gradient(180deg, #050507, rgba(5,5,7,0.95));
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          padding: 1.5rem 2rem;
          margin-bottom: 2rem;
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          gap: 2rem;
        }

        .header-title {
          font-size: 28px;
          font-weight: 700;
          color: #fff;
          margin: 0;
        }

        .difficulty-selector {
          display: flex;
          gap: 0.75rem;
        }

        .difficulty-btn {
          padding: 8px 16px;
          border: 2px solid;
          background: transparent;
          border-radius: 8px;
          font-weight: 700;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.25s;
          text-transform: capitalize;
        }

        .difficulty-btn.beginner {
          color: #17d0b8;
          border-color: #17d0b8;
        }

        .difficulty-btn.beginner.active {
          background: rgba(23, 208, 184, 0.15);
        }

        .difficulty-btn.intermediate {
          color: #fbbf24;
          border-color: #fbbf24;
        }

        .difficulty-btn.intermediate.active {
          background: rgba(251, 191, 36, 0.15);
        }

        .difficulty-btn.advanced {
          color: #f87171;
          border-color: #f87171;
        }

        .difficulty-btn.advanced.active {
          background: rgba(248, 113, 113, 0.15);
        }

        .progress-bar-container {
          width: 100%;
          max-width: 400px;
        }

        .progress-label {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-size: 12px;
          font-weight: 700;
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #06b6d4, #7c3aed);
          transition: width 0.5s ease;
          border-radius: 4px;
        }

        .page-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem 2rem;
        }

        .flow-section {
          margin-bottom: 2rem;
        }

        .flow-title {
          font-size: 20px;
          font-weight: 700;
          color: #06b6d4;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .flow-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .flow-step-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 12px;
          padding: 1.25rem;
          transition: all 0.25s;
          cursor: pointer;
        }

        .flow-step-card:hover {
          background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015));
          border-color: rgba(6, 182, 212, 0.3);
        }

        .step-header {
          display: flex;
          align-items: center;
          gap: 12px;
          justify-content: space-between;
        }

        .step-number-badge {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #06b6d4, #7c3aed);
          color: #031025;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
        }

        .step-info {
          flex: 1;
        }

        .step-desc {
          font-size: 14px;
          font-weight: 700;
          color: #e6eef8;
        }

        .step-expanded {
          font-size: 13px;
          color: rgba(230, 238, 248, 0.7);
          margin-top: 0.75rem;
        }

        .expand-icon {
          color: #06b6d4;
          font-size: 20px;
          transition: transform 0.25s;
        }

        .expand-icon.expanded {
          transform: rotate(180deg);
        }

        .checkbox-icon {
          font-size: 20px;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .checkbox-icon:hover {
          transform: scale(1.1);
        }

        .cmd-box {
          background: #0a0a0f;
          border: 1px solid rgba(6, 182, 212, 0.3);
          border-radius: 8px;
          padding: 12px 14px;
          font-family: 'Courier New', monospace;
          color: #06b6d4;
          font-size: 13px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 0.75rem;
          transition: all 0.25s;
        }

        .cmd-box:hover {
          border-color: rgba(6, 182, 212, 0.6);
          background: rgba(6, 182, 212, 0.08);
        }

        .cmd-text {
          flex: 1;
          letter-spacing: 0.5px;
          overflow: auto;
        }

        .cmd-copy-btn {
          background: transparent;
          border: 1px solid rgba(6, 182, 212, 0.4);
          color: #06b6d4;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          text-transform: uppercase;
          margin-left: 12px;
          flex-shrink: 0;
        }

        .cmd-copy-btn:hover {
          background: rgba(6, 182, 212, 0.1);
        }

        .cmd-copy-btn.copied {
          background: rgba(23, 208, 184, 0.2);
          border-color: #17d0b8;
          color: #17d0b8;
        }

        .scenarios-section {
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 12px;
          padding: 1.5rem;
          margin: 2rem 0;
        }

        .scenarios-title {
          font-size: 18px;
          font-weight: 700;
          color: #9cecff;
          margin-bottom: 1.5rem;
        }

        .scenario-card {
          background: transparent;
          border-left: 4px solid;
          padding: 1.25rem;
          margin-bottom: 1.25rem;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.25s;
        }

        .scenario-card.beginner {
          border-color: #17d0b8;
        }

        .scenario-card.intermediate {
          border-color: #fbbf24;
        }

        .scenario-card.advanced {
          border-color: #f87171;
        }

        .scenario-card:hover {
          background: rgba(255, 255, 255, 0.02);
          transform: translateX(4px);
        }

        .scenario-label {
          display: inline-block;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 4px;
          margin-bottom: 0.5rem;
        }

        .scenario-label.beginner {
          background: rgba(23, 208, 184, 0.2);
          color: #17d0b8;
        }

        .scenario-label.intermediate {
          background: rgba(251, 191, 36, 0.2);
          color: #fbbf24;
        }

        .scenario-label.advanced {
          background: rgba(248, 113, 113, 0.2);
          color: #f87171;
        }

        .scenario-question {
          font-weight: 700;
          color: #e6eef8;
          margin-bottom: 0.75rem;
        }

        .scenario-solution {
          font-size: 13px;
          color: rgba(230, 238, 248, 0.7);
          line-height: 1.6;
        }

        .learning-path-card {
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(124, 58, 237, 0.1));
          border: 1px solid rgba(6, 182, 212, 0.3);
          border-radius: 12px;
          padding: 1.5rem;
          margin: 2rem 0;
        }

        .learning-path-title {
          font-weight: 700;
          color: #9cecff;
          margin-bottom: 0.75rem;
        }

        .learning-tips {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 1.5rem;
        }

        .tip-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 10px;
          padding: 1.25rem;
          transition: all 0.25s;
        }

        .tip-card:hover {
          background: rgba(6, 182, 212, 0.05);
          border-color: rgba(6, 182, 212, 0.3);
          transform: translateY(-2px);
        }

        .tip-emoji {
          font-size: 28px;
          margin-bottom: 0.75rem;
        }

        .tip-title {
          font-weight: 700;
          color: #06b6d4;
          margin-bottom: 0.5rem;
          font-size: 14px;
        }

        .tip-content {
          font-size: 13px;
          color: rgba(230, 238, 248, 0.7);
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .header-top {
            flex-direction: column;
            align-items: flex-start;
          }

          .difficulty-selector {
            width: 100%;
            justify-content: flex-start;
          }

          .sticky-header {
            padding: 1rem;
          }

          .page-container {
            padding: 0 1rem 1rem;
          }
        }

        @media (max-width: 600px) {
          .header-title {
            font-size: 20px;
          }

          .difficulty-btn {
            padding: 6px 12px;
            font-size: 11px;
          }

          .learning-tips {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="sticky-header">
        <div className="header-content">
          <div className="header-top">
            <h1 className="header-title">🔗 Git Learning Path</h1>
            <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
              <div className="difficulty-selector">
                <button
                  className={`difficulty-btn beginner ${difficulty === "beginner" ? "active" : ""}`}
                  onClick={() => setDifficulty("beginner")}
                >
                  🌱 Beginner
                </button>
                <button
                  className={`difficulty-btn intermediate ${difficulty === "intermediate" ? "active" : ""}`}
                  onClick={() => setDifficulty("intermediate")}
                >
                  🚀 Intermediate
                </button>
                <button
                  className={`difficulty-btn advanced ${difficulty === "advanced" ? "active" : ""}`}
                  onClick={() => setDifficulty("advanced")}
                >
                  ⚡ Advanced
                </button>
              </div>
            </div>
          </div>
          <div className="progress-bar-container">
            <div className="progress-label">
              <span>Progress</span>
              <span>{getProgressPercentage()}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${getProgressPercentage()}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-container">
        <div className="flow-section">
          <div className="flow-title">
            {difficulty === "beginner" && "📚 Learn the Basics"}
            {difficulty === "intermediate" && "🚀 Professional Workflow"}
            {difficulty === "advanced" && "⚡ Advanced Techniques"}
          </div>
          <div className="flow-container">
            {currentFlow.map((step) => (
              <div
                key={step.id}
                className="flow-step-card"
                onClick={() => toggleSection(`step-${step.id}`)}
              >
                <div className="step-header">
                  <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", flex: 1 }}>
                    <div className="step-number-badge">{step.id}</div>
                    <div className="step-info">
                      <div className="step-desc">{step.desc}</div>
                      {expandedSections[`step-${step.id}`] && (
                        <div className="step-expanded">
                          💡 {step.explain}
                        </div>
                      )}
                      {expandedSections[`step-${step.id}`] && (
                        <div
                          className="cmd-box"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="cmd-text">{step.cmd}</span>
                          <button
                            className={`cmd-copy-btn ${copiedCmd === step.id ? "copied" : ""}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              copyToClipboard(step.cmd, step.id);
                            }}
                          >
                            {copiedCmd === step.id ? "✓ Copied" : "Copy"}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <span
                      className="checkbox-icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTopic(`step-${step.id}`);
                      }}
                    >
                      {completedTopics.includes(`step-${step.id}`) ? "✅" : "⭕"}
                    </span>
                    <span className={`expand-icon ${expandedSections[`step-${step.id}`] ? "expanded" : ""}`}>
                      ▼
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="scenarios-section">
          <div className="scenarios-title">😱 Real-World Scenarios</div>
          {scenarioQuestions.map(scenario => (
            <div key={scenario.id} className={`scenario-card ${scenario.difficulty}`}>
              <div className={`scenario-label ${scenario.difficulty}`}>
                {scenario.difficulty === "beginner" && "Beginner"}
                {scenario.difficulty === "intermediate" && "Intermediate"}
                {scenario.difficulty === "advanced" && "Advanced"}
              </div>
              <div className="scenario-question">{scenario.scenario}</div>
              <div className="scenario-solution">
                <strong>✓ Solution:</strong> {scenario.solution}
              </div>
            </div>
          ))}
        </div>

        <div className="learning-path-card">
          <div className="learning-path-title">📋 Your Learning Path</div>
          <p style={{ color: "rgba(230, 238, 248, 0.8)", fontSize: "14px", marginBottom: "1rem" }}>
            {difficulty === "beginner" && "✅ Start here! Master the basic commands you'll use every day. Check off each step as you understand it!"}
            {difficulty === "intermediate" && "🎯 You're progressing! Learn professional practices like branching strategy and code review workflow."}
            {difficulty === "advanced" && "🏆 Advanced master! Understand complex scenarios like rebasing, resolving conflicts, and optimizing history."}
          </p>
          <div className="learning-tips">
            <div className="tip-card">
              <div className="tip-emoji">🗓️</div>
              <div className="tip-title">Daily Practice</div>
              <div className="tip-content">
                Spend 10-15 minutes daily on Git. Try commands in real projects, not just tutorials.
              </div>
            </div>
            <div className="tip-card">
              <div className="tip-emoji">🧠</div>
              <div className="tip-title">Understanding {`>`} Memorization</div>
              <div className="tip-content">
                Focus on WHY commands work, not just memorizing them. This helps you in new situations.
              </div>
            </div>
            <div className="tip-card">
              <div className="tip-emoji">👥</div>
              <div className="tip-title">Learn with Others</div>
              <div className="tip-content">
                Work on team projects. Real collaboration teaches Git faster than solo learning.
              </div>
            </div>
            <div className="tip-card">
              <div className="tip-emoji">❓</div>
              <div className="tip-title">Google Your Errors</div>
              <div className="tip-content">
                Git errors are common! Search for the error message - 99% are already solved online.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Git;