# Maham Waseem — Personal Portfolio

**BS Mathematics Student | Aspiring Software Developer | Data Analytics Enthusiast**

> Where Mathematics Meets Technology.

A responsive personal portfolio built with HTML, CSS and vanilla JavaScript. It presents my academic background, technical learning, software and data projects, research internship and certificates.

## Live website

https://maham-waseem-portfolio.vercel.app

## About

I am a BS Mathematics student at Bahauddin Zakariya University (BZU), Multan, currently in my 5th semester. My academic background supports my interest in analytical thinking, logical reasoning and problem-solving. Alongside my studies, I am developing practical skills in software development, databases and data analytics.

## Website sections

- Introduction and professional links
- About me and development approach
- Technical skills grouped by area
- Six project case studies with technology tags and expandable details
- Education and the connection between mathematics and technology
- Research Analyst internship experience at IdeaLink Pakistan
- Six certificates with links to the supplied PDF
- Contact and social links

## Featured projects

| Project | Focus | Technologies |
|---|---|---|
| [Retail Inventory & Sales Intelligence System](https://github.com/Maham-coree/retail-inventory-sales-intelligence) | Store inventory, sales, reorder workflow and database concepts | Python, FastAPI, PostgreSQL, SQLAlchemy, Alembic, JWT, HTML, CSS, JavaScript |
| [AI Coding Assistant](https://github.com/Maham-coree/AI-Coding-Assistant-) | AI-assisted code generation, explanation, debugging, optimization and conversion | Python, Flask, Gemini API, JavaScript, SQLAlchemy |
| [E-Commerce Sales Analysis](https://github.com/Maham-coree/E_Commerce-Sales-Analysis) | Data cleaning, exploratory analysis and visualizations | Python, Pandas, Matplotlib, Seaborn |
| [Superstore Sales & Profitability Dashboard](https://github.com/Maham-coree/Superstore-Sales-Tableau-Dashboard) | Interactive sales and profit exploration | Tableau Public, Excel |
| [ChillBreak — Student Wellness App](https://github.com/Maham-coree/ChillBreak_App) | Guided breathing, journaling, affirmations and student wellness tools | Flutter, Dart, Shared Preferences, Flutter TTS |
| [TempConvertr — Temperature Converter](https://github.com/Maham-coree/Flutter_Temp_Converter) | Celsius, Fahrenheit and Kelvin conversions | Flutter, Dart, Firebase Hosting |

Project descriptions are based on the linked repositories. Live demo links are shown only where a public demo is listed in the corresponding project documentation.

## Skills

- **Programming & web:** Python, HTML5, CSS3, JavaScript
- **Data analytics:** Excel, Power BI, Tableau, data cleaning, data analysis and visualization
- **Databases & backend:** SQL, PostgreSQL, DBMS, FastAPI, Flask, SQLAlchemy and Alembic
- **Mobile coursework/projects:** Flutter, Dart, cross-platform UI development
- **Tools:** Git, GitHub, VS Code and pgAdmin
- **Professional:** research, data collection, reporting, communication and problem-solving

Skills are not represented with invented proficiency percentages or experience years.

## Experience

**Research Analyst Intern — IdeaLink Pakistan**  
**1 August – 12 September 2026**

Research work included startup, investor and mentor research; market and competitor information; industry trends and funding research; data collection; and preparing reports and insights.

## Education

**BS Mathematics**  
Bahauddin Zakariya University (BZU), Multan  
Department of Mathematics · CASPAM  
Currently in 5th semester · GPA 3.70

## Certificates

The six certificates are included in `assets/certificates/certificates.pdf`. The website links each certificate card to its corresponding PDF page. Certificate titles, providers and dates are also documented in [CERTIFICATIONS.md](CERTIFICATIONS.md).

## Run locally

This is a static website. No package installation, API key or database is required.

1. Clone the repository:
   ```bash
   git clone https://github.com/Maham-coree/maham-waseem-portfolio.git
   cd maham-waseem-portfolio
   ```
2. Open `index.html` in your browser, or use the VS Code Live Server extension.
3. Alternatively, run a local static server:
   ```bash
   python -m http.server 5500
   ```
   Then open `http://127.0.0.1:5500`.

## Configure professional email

Open `script.js` and update the single configuration value near the top:

```js
const PORTFOLIO_CONFIG = {
  email: "your-professional-email@example.com"
};
```

The email link remains hidden while the value is empty. Do not publish an email address until you are comfortable making it public.

## Deploy on Vercel

1. Push the repository to GitHub.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import `Maham-coree/maham-waseem-portfolio`.
4. Keep the framework preset as **Other** (static site).
5. Leave the build command and output directory empty; the site is served from the repository root.
6. Deploy. Vercel will use `index.html` as the entry point and `404.html` for unknown routes.

## Deploy with GitHub Pages

1. Open **Settings → Pages** in the repository.
2. Select **Deploy from a branch**.
3. Choose `main` and the `/(root)` folder.
4. Save and wait for the deployment.

## Project structure

```text
.
├── index.html
├── style.css
├── script.js
├── favicon.svg
├── 404.html
├── README.md
├── CERTIFICATIONS.md
└── assets/
    └── certificates/
        └── certificates.pdf
```

## Accessibility and quality

- Semantic HTML and labelled navigation
- Keyboard-visible focus states and skip link
- Accessible mobile menu with Escape-key support
- Reduced-motion support
- Responsive layouts for desktop, tablet and mobile
- No fake contact form, fake statistics or invented contact details
- No API keys or server-side secrets in the static portfolio

## Final testing checklist

- [ ] Check all navigation links and mobile menu
- [ ] Test project filters and expandable case studies
- [ ] Open every GitHub and live demo link
- [ ] Open each certificate PDF page
- [ ] Test at mobile, tablet and desktop widths
- [ ] Test keyboard navigation and reduced-motion setting
- [ ] Configure email only if a public professional address is ready
- [ ] Confirm the Vercel deployment after merging the reviewed branch

---

Built with HTML, CSS and vanilla JavaScript by Maham Waseem.
