# Profile - Personal Portfolio Website


## Features

- **Hero Section:** A captivating introduction to grab visitor's attention.
- **About Section:** Share your story, skills, and what you're passionate about.
- **Experience Section:** Detail your professional journey and accomplishments.
- **Education Section:** Highlight your academic background.
- **Projects Section:** Showcase your best work with descriptions and links.
- **Responsive Design:** Optimized for various devices, from desktops to mobile phones.
- **Animations:** Smooth scroll animations powered by AOS (Animate On Scroll) for an engaging user experience.
- **Fast Performance:** Leveraging Astro for optimal performance and SEO.

## Technologies Used

- [Astro](https://astro.build/) - The web framework for building fast, content-focused websites.
- [React](https://reactjs.org/) - For building interactive UI components.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid styling.
- [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) - For declarative scroll animations.

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

- **Content:** Update the `.astro` files in `src/components/` (e.g., `Hero.astro`, `About.astro`, `Projects.astro`) with your personal information, skills, and projects.
- **Styling:** Modify `tailwind.config.mjs` and `src/styles/global.css` or component-specific styles to match your desired aesthetic.
- **Configuration:** Adjust `astro.config.mjs` for any Astro-specific configurations.
- **Animations:** Customize AOS animations in the relevant `.astro` components or `src/config.ts` if animation settings are centralized.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

Feel free to connect with me!
