# 🧠 Adaptive Goal Intelligence

> **An AI system that doesn't just create a plan — it learns when the plan is failing and adapts the strategy.**

Adaptive Goal Intelligence is an AI-powered goal execution and decision system designed to help users achieve complex goals under real-world constraints such as **time, budget, resources, and changing requirements**.

Instead of generating a plan once and stopping there, the system continuously compares **what was planned vs. what actually happened**, identifies the cause of failure or delay, researches alternatives when necessary, and generates an improved strategy.

---

## 🚀 The Core Idea

Traditional AI planners follow:

```text
GOAL
  ↓
PLAN
  ↓
EXECUTE
  ↓
DONE
```

But real projects rarely work that way.

Adaptive Goal Intelligence follows:

```text
GOAL
  ↓
RESEARCH
  ↓
COMPARE
  ↓
PLAN
  ↓
EXECUTE
  ↓
REALITY
  ↓
DRIFT DETECTED?
  ↓
DIAGNOSE
  ↓
RE-RESEARCH
  ↓
STRATEGY SWITCH
  ↓
REPLAN
  ↓
EXECUTE AGAIN
  ↓
GOAL ACHIEVED
```

The system is designed to **adapt instead of blindly replanning**.

---

# 🎯 Problem Statement

AI tools can generate plans and recommendations, but a generated plan may become ineffective when:

- Tasks take longer than expected
- Resources are unavailable
- A selected tool or API fails
- The chosen solution is unsuitable
- Requirements change
- The original strategy becomes impractical

The challenge is to build an intelligent system that can recognize these changes and determine:

> **What went wrong, why it went wrong, and whether the strategy itself should change.**

---

# 💡 Our Solution

Adaptive Goal Intelligence combines two AI-driven intelligence engines with an interactive frontend.

### 🧠 Decision & Adaptation Engine

Responsible for:

- Understanding the user's goal
- Extracting constraints
- Generating strategies
- Creating task plans
- Monitoring progress
- Detecting deviations
- Diagnosing root causes
- Deciding whether adaptation is required
- Replanning or switching strategies

### 🔎 Research & Solution Intelligence Engine

Responsible for:

- Discovering possible solutions
- Finding models, APIs, tools and resources
- Collecting evidence
- Comparing alternatives
- Requirement-aware scoring
- Shortlisting solutions
- Re-researching when the selected strategy fails

### 🖥️ Frontend & Visual Experience

Provides an **AI command-center style interface** where users can:

- Define goals
- Watch research happen
- Compare solutions
- View the selected strategy
- Track the execution plan
- Compare expected vs actual progress
- See diagnosis
- Watch strategy switching
- View the final result

---

# 🏗️ System Architecture

```text
                         USER
                           │
                           ▼
              ┌────────────────────────┐
              │       FRONTEND         │
              │  Dashboard + UX        │
              │      MEMBER 3          │
              └────────────┬───────────┘
                           │
                       API / JSON
                    ┌──────┴──────┐
                    ▼             ▼
          ┌──────────────┐  ┌──────────────┐
          │   DECISION   │  │   RESEARCH   │
          │    ENGINE    │  │    ENGINE    │
          │   MEMBER 1   │  │   MEMBER 2   │
          └──────────────┘  └──────────────┘
```

The project follows a clear division of responsibility:

| Member | Role | Main Responsibility |
|---|---|---|
| Member 1 | 🧠 Brain | Decision, planning, diagnosis & adaptation |
| Member 2 | 🔎 Knowledge | Research, comparison, evidence & re-research |
| Member 3 | 🖥️ Face | Frontend & visual experience |

All three components communicate through structured JSON APIs.

---

# 🔄 How It Works

## 1. Goal Setup

The user provides:

- Goal
- Deadline
- Budget
- Available resources
- Success criteria

Example:

```json
{
  "goal": "Build a voice spoof detection system",
  "deadline": "4 days",
  "budget": 0,
  "resources": [
    "Laptop",
    "Google Colab"
  ],
  "successCriteria": [
    "Good accuracy",
    "Working demo"
  ]
}
```

The system extracts the objective, constraints, deadline, budget, resources and priorities.

---

## 2. Research

The Research Engine explores the available solution space.

It can investigate:

- AI models
- APIs
- GitHub implementations
- Datasets
- Libraries
- Existing tools
- Pretrained solutions

For example, for a voice spoof detection goal, potential candidates could include pretrained models such as AASIST, RawNet-style approaches and Wav2Vec-based models.

---

## 3. Evidence-Based Comparison

Each candidate is evaluated using factors such as:

- Performance
- Cost
- Complexity
- Hardware requirements
- Time
- Compatibility
- Reliability
- Evidence

The system distinguishes between:

```text
Published Benchmark
Provider Claim
GitHub Information
Our Own Test
```

Performance values should not be invented; they should come from evidence or an explicitly defined scoring methodology.

---

## 4. Requirement-Aware Scoring

The best solution depends on the user's requirements.

For example:

```text
4-hour deadline
      ↓
Time + Simplicity become more important
```

Whereas:

```text
Accuracy is the highest priority
      ↓
Performance + Reliability become more important
```

This allows the system to dynamically calculate solution suitability instead of always recommending the same option.

---

# 📋 5. Strategy & Plan

The Decision Engine converts the selected solution into an executable strategy.

The generated plan can contain:

- Tasks
- Dependencies
- Expected duration
- Milestones
- Expected outcomes
- Risk points

Example:

```text
Research
   ↓
Model Setup
   ↓
Dataset Preparation
   ↓
Testing
   ↓
API Integration
   ↓
Demo
```

---

# 📊 6. Plan vs Reality

One of the key features is **Reality Analysis**.

Example:

```text
EXPECTED TIME:   2 hours
ACTUAL TIME:     5 hours

             ↓

        +150% DRIFT
```

The system analyzes:

- Time deviation
- Progress deviation
- Failed tasks
- Delayed dependencies
- Increased risk

This allows the system to determine whether the project is actually drifting from the original plan.

---

# 🔍 7. Root-Cause Diagnosis

Instead of simply saying:

> "The project is delayed."

the system attempts to determine **why**.

Possible causes include:

```text
Estimation Error
       ↓
Resource Limitation
       ↓
Tool / API Failure
       ↓
Model Unsuitable
       ↓
Requirement Changed
       ↓
Original Strategy Invalid
```

---

# 🔁 8. Adaptive Strategy Switching

This is the core differentiator of the project.

If the current strategy fails, the system determines the appropriate response.

### Case A — Plan is wrong

Keep the strategy but modify tasks or schedule.

### Case B — Resource problem

Find another resource.

### Case C — Strategy is wrong

Trigger new research for alternative solutions.

### Case D — Requirement changed

Re-evaluate the solution space.

The system can therefore move from:

```text
OLD STRATEGY
      ↓
FAILED
      ↓
RESEARCH AGAIN
      ↓
ALTERNATIVES
      ↓
NEW STRATEGY
      ↓
REPLAN
```

This research → strategy → failure → re-research cycle is central to the architecture.

---

# 🖥️ Frontend Experience

The frontend is designed as an **AI command center**, rather than a conventional chatbot interface.

### Main Screens

```text
01  Goal Setup
02  AI Research
03  Solution Comparison
04  Selected Strategy
05  Execution Plan
06  Plan vs Reality
07  Diagnosis
08  Strategy Switch
09  Final Result
```

The Strategy Switch screen acts as the main **WOW moment**, visually showing the old strategy being invalidated, alternatives being researched, and a new strategy being selected.

---

# 🔗 API Architecture

### Member 1 — Decision Engine

```http
POST /analyze
POST /plan
POST /reality
POST /diagnose
POST /replan
```

### Member 2 — Research Engine

```http
POST /research
POST /compare
```

The modules communicate through structured JSON contracts.

---

# 📦 Shared JSON Contract

All members must agree on the data structures exchanged between modules.

### Research → Frontend

```json
{
  "candidates": [],
  "shortlist": [],
  "sources": []
}
```

### Decision Engine → Frontend

```json
{
  "strategy": {},
  "tasks": [],
  "risks": [],
  "successCriteria": []
}
```

### Reality → Decision Engine

```json
{
  "task": "...",
  "expected": 2,
  "actual": 5,
  "status": "failed"
}
```

### Diagnosis → Replan

```json
{
  "cause": "...",
  "severity": "high",
  "strategyChangeRequired": true,
  "reason": "..."
}
```

---

# 🛠️ Technology Stack

### Backend / AI

- Node.js
- Express.js
- Gemini API
- JSON-based API communication
- Optional MongoDB for execution state

### Research Layer

- Gemini
- Web Search / Tavily
- GitHub API
- Hugging Face
- Other relevant APIs where required

### Frontend

- HTML / CSS / JavaScript or selected frontend framework
- Interactive dashboards
- Data visualization
- Framer Motion for strategy-switch animations

---

# 📁 Suggested Project Structure

```text
adaptive-goal-intelligence/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── services/
│
├── decision-engine/
│   ├── analyzers/
│   ├── planners/
│   ├── diagnosis/
│   ├── adaptation/
│   └── routes/
│
├── research-engine/
│   ├── discovery/
│   ├── evidence/
│   ├── comparison/
│   ├── scoring/
│   └── routes/
│
├── shared/
│   └── schemas/
│
├── docs/
│
├── .env.example
├── README.md
└── package.json
```

---

# ⚙️ Getting Started

## Prerequisites

Make sure you have:

- Node.js installed
- Git installed
- Required API keys
- A supported browser

## Clone the Repository

```bash
git clone https://github.com/<your-username>/adaptive-goal-intelligence.git

cd adaptive-goal-intelligence
```

## Install Dependencies

```bash
npm install
```

## Environment Variables

Create a `.env` file:

```env
GEMINI_API_KEY=your_api_key_here
```

Add any additional API keys required by the research layer.

> Never commit `.env` or API keys to GitHub.

## Run the Project

```bash
npm run dev
```

Then open the local development URL shown in your terminal.

---

# 🎬 Demo Scenario

A sample demonstration can use the goal:

> **Build a voice spoof detection system in 4 days with a ₹0 budget.**

The system can demonstrate:

```text
Goal
 ↓
Research available approaches
 ↓
Compare candidates
 ↓
Select initial strategy
 ↓
Generate execution plan
 ↓
Simulate / observe delay
 ↓
Detect drift
 ↓
Diagnose cause
 ↓
Research alternatives
 ↓
Switch strategy
 ↓
Generate new plan
 ↓
Show final result
```

---

# ✨ Key Features

- 🎯 Goal and constraint analysis
- 🔎 AI-powered solution discovery
- 📚 Evidence-based research
- ⚖️ Requirement-aware solution scoring
- 📋 Automated strategy generation
- 🗓️ Task and milestone planning
- 📊 Plan vs reality analysis
- 🚨 Drift detection
- 🔍 Root-cause diagnosis
- 🔄 Adaptive replanning
- 🔁 Strategy switching
- 🧠 Continuous re-research
- 📈 Interactive execution visualization

---

# 🌟 What Makes It Different?

Most AI planning systems answer:

> **"What should you do?"**

Adaptive Goal Intelligence aims to answer:

> **"What should you do, how should you do it, is it actually working, why isn't it working, and what should you do instead?"**

The system doesn't treat the first generated plan as permanent.

It creates a feedback loop between:

```text
RESEARCH
    ↓
DECISION
    ↓
PLAN
    ↓
REALITY
    ↓
DIAGNOSIS
    ↓
ADAPTATION
    ↺
```

---

# 👥 Team

| Member | Role | Ownership |
|---|---|---|
| Member 1 | 🧠 AI Decision & Adaptation | Plan → Reality → Diagnosis → Adaptation |
| Member 2 | 🔎 Research & Solution Intelligence | Discover → Compare → Evidence → Re-research |
| Member 3 | 🖥️ Frontend & Visual Experience | Complete visual experience |

### The Golden Rule

**Member 1 = Brain**  
**Member 2 = Knowledge**  
**Member 3 = Face**

No duplicated responsibilities and early integration between all modules.

---

# 🔮 Future Scope

Potential future improvements include:

- Persistent execution history
- More advanced progress prediction
- Learning from previous projects
- Personalized planning strategies
- Multi-agent collaboration
- Automated task execution
- More sophisticated risk prediction
- Integration with project-management tools
- Continuous real-time adaptation

---

# 📌 Project Status

🚧 **Currently in Development**

The current architecture focuses on building a functional prototype demonstrating the complete adaptive loop:

```text
Goal → Research → Plan → Reality → Diagnose → Re-Research → Replan
```

---

## ⭐ Vision

> **Don't just generate better plans. Build systems that know when a plan is no longer good enough.**

---

## 📄 License

This project is developed for educational and prototype purposes.
