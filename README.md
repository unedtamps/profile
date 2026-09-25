# Profile - Personal Portfolio Website


## Features

- **Hero Section:** A sharp, bordered introduction with quick links and CV download.
- **About Section:** Share your story, skills, and what you're passionate about.
- **Projects Section:** Showcase featured work first, with the full list one click away.
- **Experience Section:** Detail your professional journey in a two-column grid.
- **Education Section:** Highlight your academic background.
- **Responsive Design:** Optimized for various devices, from desktops to mobile phones.
- **Neo-Brutalist Design:** Heavy borders, hard offset shadows, bold typography.
- **Fast Performance:** Leveraging Astro for optimal performance and SEO.

## Technologies Used

- [Astro](https://astro.build/) - The web framework for building fast, content-focused websites.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid styling.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.

- [Node.js](https://nodejs.org/en/download/) (LTS version recommended)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/getting-started/install)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/unedtamps/profile.git
    cd devportfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or if you use yarn
    # yarn install
    ```

### Development Server

To start the development server and see your changes in real-time:

```bash
npm run dev
# or
# yarn dev
```

The site will be available at `http://localhost:4321/`.

### Building for Production

To build the project for deployment:

```bash
npm run build
# or
# yarn build
```

This will generate a `dist/` directory with all the static assets and optimized code.

### Preview Production Build

You can preview the production build locally:

```bash
npm run preview
# or
# yarn preview
```

## Deployment

After running `npm run build`, the `dist/` folder contains all the necessary files for deployment. You can deploy this folder to any static site hosting service like Netlify, Vercel, GitHub Pages, etc.

## Customization

- **Content:** Update `src/config.ts` with your personal information, skills, and projects.
- **Styling:** Design tokens (colors, fonts, shadows) live in `src/styles/global.css` under `@theme`.
- **Configuration:** Adjust `astro.config.mjs` for any Astro-specific configurations.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

Feel free to connect with me!
