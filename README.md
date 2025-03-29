# Arport - Rwanda Academic Research Portal

**Arport** is a modern academic research portal designed to help researchers, students, and academics find, filter, and access scholarly papers and articles.

## Features

- **Search Functionality**: Search for papers, authors, topics, and more
- **Advanced Filtering**: Filter research papers by year, category, citation count, and other criteria
- **Responsive UI**: Modern, clean interface that works on desktop and mobile devices
- **Paper Details**: View comprehensive information about research papers, including abstracts, author information, and citation data

## Technology Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS, Shadcn UI
- **Backend**: Next.js App Router with Server Components
- **Database**: PostgreSQL (via Prisma ORM)

## Getting Started

First, install the required dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Next.js App Router pages and layouts
- `components/`: Reusable React components
- `lib/`: Utility functions and data
- `prisma/`: Database schema and migrations
- `public/`: Static assets

## Building for Production

To build the application for production:

```bash
pnpm build
```

Then run the production server:

```bash
pnpm start
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
