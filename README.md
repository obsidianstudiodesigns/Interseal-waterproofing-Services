# Interseal Waterproofing Services Website

Professional modern web application for **Interseal Waterproofing Services** – Roofing & Waterproofing Experts in Gauteng.

## Live Website & GitHub Pages Deployment

The site is configured to automatically build and deploy to GitHub Pages when pushed to the repository.

- **GitHub Pages URL**: [https://obsidianstudiodesigns.github.io/Interseal-waterproofing-services](https://obsidianstudiodesigns.github.io/Interseal-waterproofing-services)
- **Direct Phone / WhatsApp Contact**: 064 038 9839

---

## Key Features

1. **Photorealistic Hero Experience**: High-resolution backdrop reflecting industrial torch-on waterproofing, membrane application, and roof restoration.
2. **Brand-Matched Color Palette & Vector Logo**: Deep Navy Blue (`#0B2F64`), Sky/Electric Azure (`#0084D6`), Golden Amber (`#F59E0B`), and WhatsApp Green (`#25D366`).
3. **Complete Services Showcase**:
   - Concrete Roofs Waterproofing
   - Roof Sheets Waterproofing
   - Chromadek & Galvanized Gutters Installation
   - Roof Repairs & New Installations
   - Ceiling Installations & Repairs
   - Walls Plastering & Skimming Plastering
   - Interior & Exterior Walls Painting
   - Tree Felling & Rubble Removal
   - Torch-On & Liquid Rubber Waterproofing
4. **Interactive Free Quote Calculator & WhatsApp Instant Quotation**: Fast interactive quote builder allowing customers to select multiple services, specify property types, and send an instant formatted WhatsApp query or submit online.
5. **Mobile-First & Responsive**: Full sticky contact bar on mobile, fast click-to-call (`064 038 9839`), and one-tap WhatsApp.
6. **SEO & Performance Optimized**:
   - Google Structured Data Schema (`RoofingContractor` & `LocalBusiness`)
   - OpenGraph and Twitter Meta Tags
   - Custom SVG Brand Favicon
   - Rapid asset loading and clean zero-bloat Tailwind styling

---

## Automatic GitHub Pages Deployment Setup

To push this site to GitHub and activate the auto-build workflow:

1. **Create/Link your GitHub Repository**:
   ```bash
   git init
   git remote add origin https://github.com/obsidianstudiodesigns/Interseal-waterproofing-services.git
   git add .
   git commit -m "Initial commit for Interseal Waterproofing Services"
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages in your GitHub Repository Settings**:
   - Go to your repository on GitHub: `https://github.com/obsidianstudiodesigns/Interseal-waterproofing-services`
   - Navigate to **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.

3. **Auto-Build**:
   - The included workflow file `.github/workflows/deploy.yml` will automatically trigger on every `git push` to `main`, run `npm run build`, and deploy the latest version directly to:
   - `https://obsidianstudiodesigns.github.io/Interseal-waterproofing-services`

---

## Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```
