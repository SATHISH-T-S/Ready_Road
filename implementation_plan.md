# Refactoring to Vanilla CSS

## Goal
Replace Tailwind CSS classes with standard CSS to resolve styling issues and meet user preference.

## Changes

### 1. Global Styles (`src/index.css`)
- Define CSS Variables for colors (`--primary`, `--secondary`, etc.).
- Add Reset and Base styles.
- Add Component classes:
  - `.btn`, `.btn-primary`
  - `.glass-card`, `.glass-panel`
  - `.input-field`
  - `.navbar`
  - `.landing-section`
  - `.shop-card`

### 2. Component Updates
Replace Tailwind classes with semantic CSS classes in:
- `src/pages/LandingPage.jsx`
- `src/components/Navbar.jsx`
- `src/components/ShopCard.jsx`
- `src/pages/auth/LoginPage.jsx`
- `src/pages/auth/RegisterPage.jsx`
- `src/pages/MainPage.jsx`

## Verification
- Check visually that the layout and design (colors, glassmorphism) match the original intent but use standard CSS.
