# 🧪 Gemini CLI Sandbox

Welcome to the **Gemini CLI Sandbox**. This environment allows you to safely test and experiment with Gemini CLI features, custom instructions, prompts, subagent delegations, and code modifications without affecting the main Tools Portal repository.

---

## 📂 Sandbox Directory Structure

```
sandbox/
├── GEMINI.md            # Scoped project instructions for the sandbox
├── README.md            # This documentation file
└── sample-app/          # Sample Node.js application for testing refactoring & tests
    ├── package.json     # Package configuration & test scripts
    ├── app.js           # Sample utility functions
    └── app.test.js      # Unit tests verifying app.js
```

---

## 🚀 How to Use

1. **Navigate to Sandbox**:
   Open your terminal in the repository root or subfolders.
2. **Test CLI Commands**:
   Use Gemini CLI in this workspace to perform tasks such as:
   - Refactoring `sandbox/sample-app/app.js`
   - Adding new features or unit tests
   - Testing subagent delegation (`codebase_investigator`, `generalist`)
3. **Run Tests**:
   Navigate to `sandbox/sample-app` and run:
   ```bash
   npm install
   npm test
   ```
