# 🚀 Wendtech - Site Web React

Site web moderne et sécurisé pour Wendtech, agence digitale au Burkina Faso.

## 📦 Technologies

- **React 18** - Framework UI
- **Vite** - Build tool ultra-rapide
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes modernes
- **DOMPurify** - Sanitisation XSS

## 🔒 Sécurité

Le site inclut plusieurs mesures de sécurité :

- ✅ Protection XSS (Cross-Site Scripting)
- ✅ Validation et sanitisation des entrées
- ✅ Rate limiting sur le formulaire
- ✅ Headers de sécurité (CSP, X-Frame-Options, etc.)
- ✅ Attributs de sécurité HTML5

## 🛠️ Installation

```bash
# Cloner le projet
git clone <votre-repo>
cd wendtech-react

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Construire pour la production
npm run build
```

## 🌐 Déploiement

### Option 1: Vercel (Recommandé - Gratuit)

1. Créez un compte sur [vercel.com](https://vercel.com)
2. Connectez votre repo GitHub
3. Cliquez sur "Import Project"
4. Sélectionnez votre repo
5. Vercel détecte automatiquement Vite
6. Cliquez sur "Deploy"

**Ou via CLI :**
```bash
npm i -g vercel
vercel
```

### Option 2: Netlify (Gratuit)

1. Créez un compte sur [netlify.com](https://netlify.com)
2. Glissez-déposez le dossier `dist` après `npm run build`

**Ou connectez votre repo GitHub :**
- Build command: `npm run build`
- Publish directory: `dist`

### Option 3: GitHub Pages

```bash
# Installer gh-pages
npm install gh-pages --save-dev

# Ajouter dans package.json > scripts
"deploy": "npm run build && gh-pages -d dist"

# Déployer
npm run deploy
```

### Option 4: Hébergement traditionnel

```bash
# Construire
npm run build

# Uploader le contenu du dossier 'dist' via FTP
```

## 📁 Structure du projet

```
wendtech-react/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Advantages.jsx
│   │   ├── BookPage.jsx
│   │   ├── Clients.jsx
│   │   ├── Contact.jsx
│   │   ├── Ebooks.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── Growth.jsx
│   │   ├── Hero.jsx
│   │   ├── Loader.jsx
│   │   ├── Marquee.jsx
│   │   ├── Navbar.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Pricing.jsx
│   │   ├── Process.jsx
│   │   ├── Services.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Topbar.jsx
│   │   ├── WhatsAppButton.jsx
│   │   └── WhyUs.jsx
│   ├── data/
│   │   └── site.js
│   ├── styles/
│   │   └── index.css
│   ├── utils/
│   │   └── security.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️ Configuration

### Modifier les informations de l'entreprise

Toutes les coordonnées (téléphones, courriel, adresses, réseaux sociaux), les
chiffres clés et les listes de services sont centralisés dans **`src/data/site.js`**.
Une modification à cet endroit se répercute sur la barre supérieure, le menu,
la section contact et le pied de page :

```javascript
export const company = {
  name: 'Wendtech',
  phones: ['+226 65 17 07 78', '+1 819 219 0558'],
  email: 'saristide99@gmail.com',
  locations: ['Ouagadougou, Burkina Faso', 'Québec, Canada'],
  // ...
}
```

### Ajouter des avis clients

Renseignez le tableau `testimonials` dans `src/components/Testimonials.jsx`
(`score`, `source`, `quote`, `author`, `role`). Tant qu'il est vide, seuls les
engagements de l'agence sont affichés.

### Connecter un backend

Dans `src/components/Contact.jsx`, remplacez la simulation par votre API :

```javascript
// Remplacer :
await new Promise(resolve => setTimeout(resolve, 1500))

// Par :
const response = await fetch('https://votre-api.com/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(sanitizedData)
})
```

## 📱 Responsive

Le site est optimisé pour :
- 📱 Mobile (< 768px)
- 📱 Tablette (768px - 1024px)
- 💻 Desktop (> 1024px)

## 🎨 Personnalisation

### Couleurs

Le design system repose sur un fond noir, des surfaces sombres et une gamme
de bleus Wendtech. Toutes les variables sont dans `src/styles/index.css` :

```css
:root {
  --bg: #000000;
  --surface-2: #141414;
  --primary-500: #2f86ff;   /* bleu de marque */
  --primary-600: #1a67e6;   /* fond des boutons */
  --primary-400: #59a5ff;   /* accents sur fond sombre */
  --accent: #5ecdf6;
  /* ... */
}
```

### Polices

- **Plus Jakarta Sans** — titres et éléments d'interface
- **Inter** — corps de texte

## 📄 Licence

© 2024 Wendtech. Tous droits réservés.

---

Créé avec ❤️ au Burkina Faso
