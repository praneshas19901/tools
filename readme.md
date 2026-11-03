# 🛠️ Web Utilities & Trackers Portal

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Platform](https://img.shields.io/badge/Platform-Web%20%7C%20HTML5-brightgreen.svg)](#-compatibility--recommended-hardware)
[![Privacy](https://img.shields.io/badge/Data%20Privacy-100%25%20Local-success.svg)](#-privacy--safety-first)

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

- 🛡️ **100% Client-Side Storage**: Unless explicitly stated otherwise, **no user data is tracked, transmitted, or stored on external servers**. All your logs, notes, and metrics remain entirely within your browser's `LocalStorage`.
- 🔑 **Complete Data Ownership**: Your data belongs solely to you. Managing local JSON file exports might carry a minor learning curve, but it guarantees full control over your sensitive information.
- 🔓 **Open & Unrestricted**: You are free to inspect, clone, fork, or adapt these files locally on your own machine.

> [!IMPORTANT]
> **Note on Calorie Tracker v2**:
> Unlike the local-first applications, **Calorie Tracker v2** utilizes [Supabase](https://supabase.com/) for backend data synchronization across devices. Your data remains strictly privatized using **Row Level Security (RLS)**—ensuring only authenticated owners can access their records. *This specific tool is currently in active development.*

---

## 💻 Compatibility & Hardware Recommendations

| Feature | Details | Status |
| :--- | :--- | :---: |
| 📱 **Mobile Responsiveness** | Fully responsive interface optimized for smartphones on the go. | ✅ Supported |
| 🖥️ **Optimal Screen View** | Large display (laptop/desktop) recommended for maximum dashboard clarity. | 🌟 Recommended |
| 🪟 **Tested Platform** | Extensively tested and verified for smooth performance on **Windows OS**. | ✅ Verified |
| 🐧 **Cross-Platform** | Optimizations and official support for Linux, macOS, and mobile OS versions. | 🔄 In Progress |

---

## 🚀 Available Tools & Applications

Below is an overview of the tools currently available in this repository:

| Status | Tool Name | Category | Key Capabilities |
| :---: | :--- | :--- | :--- |
| 🟢 | 📋 **Kanban Task Tracker** | `Productivity` | Priority lane management, visual task statuses, and workflow bottleneck tracking. |
| 🟡 | 🥗 **Calorie Tracker v2** | `Nutrition` | Advanced macro logging powered by Supabase RLS with interactive calorie goal visualizations. |
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
- **Persistence**: Browser `LocalStorage` API (Offline-first)
- **Database / Auth**: Supabase PostgreSQL + RLS (*Calorie Tracker v2 only*)

---

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
