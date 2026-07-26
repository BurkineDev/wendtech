# 🚀 Wendtech - Site Web React

Site web moderne et sécurisé pour Wendtech, agence digitale au Burkina Faso.

## 📦 Technologies

- **React 18** - Framework UI
- **Vite** - Build tool ultra-rapide
- **React Router** - Navigation entre l'accueil et la page Ebooks
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes modernes
- **EmailJS** - Envoi des formulaires sans backend

## 🔒 Sécurité

Le site inclut plusieurs mesures de sécurité :

- ✅ Validation et sanitisation des entrées (`src/utils/security.js`, sans dépendance externe)
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
│   │   ├── Contact.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Pricing.jsx
│   │   └── Services.jsx
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

### Modifier les informations de contact

Éditez `src/components/Contact.jsx` et `src/components/Footer.jsx` :

```javascript
const contactInfo = [
  { icon: Phone, label: 'Téléphone', value: '+226 65 17 07 78' },
  { icon: Mail, label: 'Email', value: 'contact@wendtech.bf' },
  // ...
]
```

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

Modifiez les variables CSS dans `src/styles/index.css` :

```css
:root {
  --bg:     #0a0a0a;  /* fond principal */
  --card:   #141414;  /* cartes et encarts */
  --accent: #cdf32b;  /* accent lime */
  --fg:     #ffffff;  /* texte */
  --muted:  #b5b5b5;  /* texte secondaire */
  /* ... */
}
```

### Polices

**Hanken Grotesk** (400 à 800) pour l'ensemble du site, chargée depuis Google Fonts
dans `index.html`.

### Coordonnées

Téléphones, courriel, WhatsApp et liens de navigation sont centralisés dans
`src/data/site.js` — un seul fichier à modifier.

## 📄 Licence

© 2024 Wendtech. Tous droits réservés.

---

Créé avec ❤️ au Burkina Faso
