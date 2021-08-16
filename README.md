# 🎨 Project Gnews - Nextjs ( Rectjs - Server Side )

- Gnews free API is used to render top news from multiple website in three language English, Hindi and French.
- Server-side Rendering tech is used to improve the SEO.
- Page is generated at a interval of 5 min to increase the page speed.

<!-- ABOUT THE PROJECT -->

## Main Tech Stack

List of tech stack used in the creation of the project. Apart from this, few other small library were also used.

- [Nextjs](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

### Incremental Statically Page Generated

Incremental Static Regeneration (ISR) enables developers and content editors to use static-generation on a per-page basis, without needing to rebuild the entire site. With this feature you can retain the benefits of static while scaling to millions of pages.

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://gnews.io/](https://gnews.io/)
2. Clone the repo
   ```sh
   git clone https://github.com/sourabhbgp/gnews.git
   ```
3. Install NPM packages
   ```sh
   cd gnews && npm install
   ```
4. Create local env file `.env.local`
   ```sh
   cp .env-example .env.local
   ```
5. Enter website token in `.env.local` file
   ```js
   NEXT_PUBLIC_TOKEN = token;
   ```
6. Start the app in development
   ```sh
   npm run dev
   ```
