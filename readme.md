# 🛠️ Web Utilities & Trackers Portal

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Platform](https://img.shields.io/badge/Platform-Web%20%7C%20HTML5-brightgreen.svg)](#-compatibility--recommended-hardware)
[![Privacy](https://img.shields.io/badge/Data%20Privacy-100%25%20Local-success.svg)](#-privacy--safety-first)
[![License: Open Source & Free](https://img.shields.io/badge/License-Open%20Source%20%26%20Free-brightgreen.svg)](https://opensource.org/licenses)

Welcome to the **Tools Portal** repository! This is a collection of lightweight, single-page web applications and trackers built with modern HTML5, Tailwind CSS, and vanilla JavaScript libraries.

---

<div align="center">

### 🌐 LIVE DEMO & PORTAL HUB

Access these tools and trackers live directly in your browser:

<br />

<a href="https://praneshas19901.github.io/tools">
  <img src="https://img.shields.io/badge/🚀_LAUNCH_TOOLS_PORTAL_HUB-238636?style=for-the-badge&logo=github&logoColor=white" alt="Launch Tools Portal Hub" />
</a>

<sub>*(Tip: Hold <b>Ctrl</b> / <b>Cmd</b> while clicking to open in a new tab)*</sub>

</div>



---

## 💡 Core Philosophy

> *"Software should be simple, lightweight, safe, and completely transparent."*

This repository was created out of a firm belief in **altruism, minimalism, and digital privacy**. All applications are engineered to be zero-bloat, ultra-fast, visually intuitive, and strictly respectful of your personal data. There is no paid licensing ever, and please do not sell this based on licensing elsewhere - please respect open source and free software and respect our integrity.

---

## ⚡ Deployment, Local Use & Hosting

You have total control over how and where you run these tools:

| Deployment Method | Setup Instructions |
| :--- | :--- |
| 💻 **Run Locally** | Download or clone this repository and double-click any `.html` file. No local web server or `npm install` required! |
| 🌐 **Self-Hosting** | Clone the repository and push to your favorite static host (**Cloudflare Pages**, **GitHub Pages**, **Vercel**, **Netlify**). |

> [!WARNING]
> ### ⚠️ Usage Policy & Bandwidth Warning
> Please respect the hosted live demo site. **Do not abuse, overload, or waste server bandwidth.**
> 
> GitHub Pages enforces strict bandwidth soft limits (*~100 GB per month*). Excessive traffic or automated testing can trigger these limits and cause temporary suspension or throttling of the hosted portal. If you plan to use these tools heavily or for team operations, please clone the repository and host your own instance!

---

## 🔒 Privacy & Safety First

```
+-------------------------------------------------------------------+
|                        YOUR LOCAL BROWSER                         |
|  +--------------------+   +--------------------+   +-----------+  |
|  | Kanban Task Engine |   | Workout & Health   |   | Daily Log |  |
|  +--------------------+   +--------------------+   +-----------+  |
|            |                        |                    |        |
|            +------------------------+--------------------+        |
|                                     v                             |
|                        [ Browser LocalStorage ]                   |
+-------------------------------------------------------------------+
                                  X  (No Data Leaves Browser)
                       [ External Servers / Trackers ]
```

- 🛡️ **100% Client-Side Storage**: Unless explicitly stated otherwise, **no user data is tracked, transmitted, or stored on external servers**. All your logs, notes, and metrics remain entirely within your browser's `LocalStorage`. Note - Some apps store data in external DB services like Supabase or neon DB.
- 🔑 **Complete Data Ownership**: Your data belongs solely to you. Managing local JSON file exports might carry a minor learning curve, but it guarantees full control over your sensitive information. In the case of DB based application use your own database connection  -supabase or neon DB. The DB based connections handle unnecessary management of JSON file with export and import aross all your devices - Desktop/Laptop/Smartphones/Tablets.
- 🔓 **Open & Unrestricted**: You are free to inspect, clone, fork, or adapt these files locally on your own machine.

---

## 💻 Compatibility & Hardware Recommendations

🔑 - **File System Access API** required to be supported by your browser. Should work fine on Firefox\Chrome\Edge\Brave. Check if your browser supports this - read more at [File System Access API](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access).

| Feature | Details | Status |
| :--- | :--- | :---: |
| 📱 **Mobile Responsiveness** | Fully responsive interface optimized for smartphones on the go. Note - File System Access API not supported on Brave Browser (Android) but works fine on Google Chrome - Apps are being re-developed to store data in Supabase or Neon DB, apps work best for larger screens - not extensively tested on small screens. | ✅ Supported |
| 🖥️ **Optimal Screen View** | Large display (laptop/desktop) recommended for maximum dashboard clarity. | 🌟 Recommended |
| 🪟 **Tested Platform** | Extensively tested and verified for smooth performance on **Windows OS**. | ✅ Verified |
| 🐧 **Cross-Platform** | These should work fine on any platform as they run in browsers - no extensive testing done - should work fine for Linux, macOS, and mobile OS versions. Note - use chromium based browsers on Linux to have proper File System Access API support  | ✅ Supported |

---

## 🚀 Available Tools & Applications

Below is an overview of the tools currently available in this repository:

| Status | Tool Name | Category | Key Capabilities |
| :---: | :--- | :--- | :--- |
| 🟢 | ⏱️ **Progress Timers** | `Productivity` | Run multiple independent progress timers with labels, target durations, start/pause/stop/reset controls, ten color choices, and drag-and-drop ordering. Timer settings and progress are saved in browser IndexedDB and persist across refreshes. |
| 🟢 | 📋 **Project and Milestone Tracker with Gannt Chart view** | `Productivity` | Create projects with budgets, milestones and tasks and track progress in Gannt chart views. - Note: This requires your own neon DB or supabase DB connection - please provision your own. |
| 🟢 | 📋 **Kanban Task Tracker** | `Productivity` | Priority lane management, visual task statuses, and workflow bottleneck tracking. |
| 🟢 | 🥗 **Calorie Tracker v2 - DB Storage Based** | `Nutrition` | Advanced macro logging powered by Supabase RLS with interactive calorie goal visualizations. - Note: This requires your own neon DB or supabase DB connection - please provision your own.|
| 🟢 | 🍎 **Calorie Tracker** *(Std)* | `Nutrition` | Streamlined offline caloric intake logger to quickly record food items and daily totals. |
| 🟢 | 📅 **Daily Tracker** | `Routines` | Task checklists, habit streak tracking, sleep logs, and day-to-day wellness goals. |
| 🟢 | 🩺 **Health Tracker** | `Clinical` | Monitor vital metrics (blood pressure, pulse rate, blood glucose) with clinical ranges. |
| 🟢 | 🏋️ **Workout Tracker** | `Fitness` | Log strength sessions, set rep/weight targets, and track progressive overload. |
| 🟢 | 🎓 **Certifications Tracker** | `Education` | Milestone tracking for degrees and professional credentials with custom notes and reset options. |

*Legend: 🟢 Production Ready & Offline Local | 🟡 Active Development (Cloud Synced)*

---

## 🛠️ Tech Stack & Architecture

- **Frontend Core**: Standard HTML5 & Modern ES6+ JavaScript
- **Styling**: Tailwind CSS (loaded via CDN for clean, utility-first styling)
- **UI Assets**: FontAwesome icon library
- **Persistence**: Local JSON file through File system access API \ Browser `LocalStorage` and `IndexedDB` APIs (offline-first; Progress Timers uses IndexedDB)
- **Database / Auth**: Supabase PostgreSQL with RLS / or Neon DB with RLS - Calorie Tracker v2  and Project and Milestone Tracker 

---

## Project Tracker cloud sync

**[Open the live Project Tracker](https://praneshas19901.github.io/tools/project-tracker.html).** Its optional cloud sync uses Neon Auth with email/password sign-in and stores each account's workspace in a Neon PostgreSQL database. Neon is the source of truth for signed-in cloud users; each user's workspace is protected by database row-level security.

Sign-up is currently disabled in Neon Auth for the hosted demo. You cannot create a new cloud account there. Please use the live site only to explore the app, and do not save personal or sensitive project information to the demo's cloud database.

To use cloud sync, deploy your own copy and connect it to your own Neon project. Enable Neon Auth and the Data API, create the workspace table with [`db/project-workspaces.sql`](db/project-workspaces.sql), then configure these deployment values:

| Variable | Value |
| --- | --- |
| `NEON_AUTH_URL` | The Auth URL from your Neon project/branch. |
| `NEON_DATA_API_URL` | The Data API URL from your Neon project/branch. |

For GitHub Pages, add them as Actions secrets and the workflow injects them into `project-tracker.html`. On Vercel or another host, configure the build/deployment process to replace the same HTML placeholders with your own URLs. These are public endpoint URLs, not database passwords or secret keys. See the [cloud sync setup guide](docs/project-tracker-cloud-sync.md) for details.

These variables configure Neon only. Supabase or another database requires an integration supported by the particular app; the Project Tracker's current cloud adapter is Neon, while Calorie Tracker V2 has its separate Supabase integration.

## Calorie Tracker V2 App

Unlike the local-first applications, **Calorie Tracker v2** utilizes [Supabase](https://supabase.com/) for backend data synchronization across devices. Your data remains strictly privatized using **Row Level Security (RLS)**—ensuring only authenticated owners can access their records. If you use the Calorie Tracker v2 application on the demo site directly - signup has been disabled at supabase , so use your own supabase connection -    - Those trying to clone this app and managing it change the ENV_SUPABASE_URL in the app code to your specific supabase project URL . SUPABASE_ANON_KEY is optional - always use RLS with authenticated users only in RLS policies,   I use a GitHub workflow action to replace these variables with actual values for github pages deployment.

## 🤝 Feedback, Feature Requests & Contact

Your feedback drives continuous refinement! If you encounter bugs, have questions, or want to suggest new features:

- 🐛 **GitHub Issues**: [Open an Issue](https://github.com/praneshas19901/tools/issues) in this repository.
- 📬 **Direct Email**: Reach out anytime at:
  - 📧 `pranesh.sathyanarayan@outlook.com`
  - 📧 `praneshas19901@gmail.com`

---

<div align="center">
  <sub>Built with care for simplicity and data privacy. Feel free to clone, customize, and make these tools your own!</sub>
</div>
