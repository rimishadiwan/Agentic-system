const { isTransient } = require("../services/geminiConfig");
const { adapt } = require("../services/adaptation");
const { replan } = require("../services/replanner");
const { analyzeGoal } = require("../services/goalAnalyzer");
const { generatePlan } = require("../services/planner");
const { diagnose } = require("../services/diagnosis");
const { researchSolutions } = require("../services/researchEngine");
const { analyzeReality } = require("../services/realityAnalyzer");

// Temporary Gemini failures -> 503 + retryable so the frontend can show "try again" instead of a generic error.
function sendError(res, error, extra = {}) {
  if (error.transient || isTransient(error)) {
    return res.status(503).json({
      error: "The AI model is busy right now. Please try again in a few seconds.",
      retryable: true,
      ...extra
    });
  }
  if (error.permanent) {
    return res.status(503).json({ error: error.message, retryable: false, ...extra });
  }
  return res.status(500).json({ error: error.message, ...extra });
}

const analyzeGoalController = async (req, res) => {
  try {
    const {
      goal,
      deadline,
      budget,
      resources,
      successCriteria
    } = req.body;

    if (!goal) {
      return res.status(400).json({
        error: "Goal is required"
      });
    }

    const result = await analyzeGoal({
      goal,
      deadline,
      budget,
      resources,
      successCriteria
    });

    res.json(result);

  } catch (error) {
    console.error("GOAL ANALYSIS ERROR:", error);

    sendError(res, error);
  }
};
const createPlan = async (req, res) => {
  try {
    const result = await generatePlan(req.body);

    res.json(result);

  } catch (error) {
    console.error("PLAN GENERATION ERROR:", error);

    sendError(res, error);
  }
};
const analyzeRealityController = async (req, res) => {
  try {
    const result = await analyzeReality(req.body);

    res.json(result);

  } catch (error) {
    console.error("REALITY ANALYSIS ERROR:", error);

    sendError(res, error);
  }
};
const diagnoseController = async (req, res) => {
  try {
    const result = await diagnose(req.body);

    res.json(result);

  } catch (error) {
    console.error("DIAGNOSIS ERROR:", error);

    sendError(res, error);
  }
};
const replanController = async (req, res) => {
  try {
    const result = await replan(req.body);

    res.json(result);

  } catch (error) {
    console.error("REPLAN ERROR:", error);

    sendError(res, error);
  }
};
const adaptController = async (req, res) => {
  try {
    const result = await adapt(req.body);

    res.json(result);

  } catch (error) {
    console.error("ADAPTATION ERROR:", error);

    sendError(res, error);
  }
};
async function researchController(req, res) {
  try {
    const result = await researchSolutions(req.body);

    res.json(result);
  } catch (error) {
    console.error("Research error:", error);

    sendError(res, error, { message: error.message });
  }
}
module.exports = {
  analyzeGoal: analyzeGoalController,
  createPlan,
  analyzeReality: analyzeRealityController,
  diagnose: diagnoseController,
  replan: replanController,
  adapt: adaptController,
  research: researchController
};
