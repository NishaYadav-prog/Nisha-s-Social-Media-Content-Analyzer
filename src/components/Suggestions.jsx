import React from "react";

function Tag({ level, children }) {
  const cls =
    level === "good" ? "tag good" : level === "bad" ? "tag bad" : "tag warn";
  return <span className={cls}>{children}</span>;
}

export default function Suggestions({ result }) {
  if (!result) return null;
  const { summary, suggestions } = result;

  return (
    <div className="card suggestions-card">
      <div className="card-inner">
        <h3 className="title">✨ Engagement Analysis</h3>

        {/* KPI Section */}
        <div className="row kpi-row">
          <div className="kpi">
            <span className="val">{summary.characters}</span>
            <span className="hint">Characters</span>
          </div>
          <div className="kpi">
            <span className="val">{summary.words}</span>
            <span className="hint">Words</span>
          </div>
          <div className="kpi">
            <span className="val">{summary.hashtags}</span>
            <span className="hint">Hashtags</span>
          </div>
          <div className="kpi">
            <span className="val">{summary.mentions}</span>
            <span className="hint">Mentions</span>
          </div>
          <div className="kpi">
            <span className="val">{summary.urls}</span>
            <span className="hint">Links</span>
          </div>
          <div className="kpi">
            <span className="val">{summary.avgWordsPerSentence}</span>
            <span className="hint">Avg W/S</span>
          </div>
        </div>

        {/* Suggestions List */}
        <ul className="suggestions-list">
          {suggestions.map((s, i) => (
            <li key={i} className="suggestion-item">
              <Tag level={s.level}>{s.level.toUpperCase()}</Tag>
              <span>{s.msg}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
