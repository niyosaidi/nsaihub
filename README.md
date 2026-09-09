<div align="center">
<img width="1200" height="475" alt="NS IT Consulting & Training Banner" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" />
</div>

# NS IT Consulting & Training Hub

Welcome to NS IT Consulting & Training - Your partner in digital transformation based in the heart of Africa (Rwanda).

**Website:** https://nsaihub.vercel.app

## About

NS IT Consulting & Training is a technology partner specializing in:
- **Generative AI Integration & Automation** - Customized AI workflows and prompt engineering solutions
- **Managed IT Infrastructure & Network Support** - End-to-end local network design and maintenance
- **Digital Branding & Web Management** - Corporate identity, WordPress setup, and content creation
- **Industry-Aligned Training Programs** - AI literacy, ICT basics, and networking essentials

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or bun package manager
- Gemini API Key (for AI Chatbot features)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/niyosaidi/nsaihub.git
   cd nsaihub
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or if using Bun:
   ```bash
   bun install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add your Gemini API key:
   ```
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   or with Bun:
   ```bash
   bun dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:5173` to view the application.

## Build for Production

```bash
npm run build
```

The optimized build will be created in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Type Checking

```bash
npm run lint
```

## Project Structure

```
nsaihub/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── AIChatbot.tsx
│   │   └── ...
│   ├── pages/            # Page components
│   │   ├── HomePage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── TrainingPage.tsx
│   │   └── ...
│   ├── context/          # React Context for state management
│   │   └── LocalizationContext.tsx
│   ├── services/         # API services
│   │   └── geminiService.ts
│   ├── data/             # Static data and content
│   │   └── content.ts
│   ├── types.ts          # TypeScript type definitions
│   ├── App.tsx
│   └── index.tsx
├── public/               # Static assets
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## Technology Stack

- **Frontend Framework:** React 19.1.0
- **Router:** React Router DOM 7.6.3
- **Build Tool:** Vite 6.2.0
- **Styling:** Tailwind CSS
- **Icons:** Lucide React 1.25.0
- **AI Integration:** Google GenAI 1.9.0
- **Language:** TypeScript 5.8.2

## Features

✨ **Multi-language Support** - English and Kinyarwanda
🤖 **AI Chatbot** - Integrated Gemini AI assistant
📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
🔄 **Localization** - Dynamic content switching based on language
🎨 **Modern UI** - Contemporary design with smooth animations

## Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run TypeScript type checking |

## Environment Setup

The application uses the following environment variable:
- `VITE_GEMINI_API_KEY` - Your Gemini API key for the chatbot feature

Get your API key from [Google AI Studio](https://aistudio.google.com/)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private. All rights reserved © NS IT Consulting & Training.

## Contact

📧 **Email:** nsaihub25@gmail.com
📍 **Location:** Kigali, Nyarugenge, KN 2 Av 266, Rwanda

---

**Built with ❤️ by Saidi Niyonzima and the NS IT Team**
