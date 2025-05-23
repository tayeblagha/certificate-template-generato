# Certificate Template Generator Documentation

## Project Structure

```
certificate-template-generator/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── card/
│   │   ├── baseCertificate.tsx
│   │   ├── formalTemplate.tsx
│   │   ├── modernTemplate.tsx
│   │   └── template-selector-card.tsx
│   ├── certificate-form.tsx
│   ├── certificate-preview.tsx
│   ├── template-selector.tsx
│   └── ui/ (shadcn components)
├── lib/
│   ├── pdf-utils.ts
│   ├── types.ts
│   └── utils.ts
├── public/ (static assets)
└── package.json
```

## Medium Help Guide

### Project Overview
A Next.js-based certificate generator that provides real-time preview updates as users customize their certificate templates through a multi-step form interface.

### Technologies Used
- Next.js 15.1.8
- Node.js 20.19.0
- shadcn/ui 2.5.0
- Tailwind CSS 4.0
- TypeScript
- React PDF libraries

### Installation
```bash
git clone https://github.com/tayeblagha/certificate-template-generator
cd certificate-template-generator
npm install
npm run dev
```

## User Flow Implementation

### Template Selection
- **Component:** `components/template-selector.tsx`
- **State Management:** Managed through React Context
- **Preview Updates:** Implemented with `useEffect` hooks to reflect template changes in real-time

### Certificate Information
- **Form Component:** `components/certificate-form.tsx`
- **Live Preview:** `components/certificate-preview.tsx`

### Recipient Details
- Dynamic date picker component
- Name input with auto-formatting

### Styling Options
- Color picker integration
- Border style selector
- Logo upload handling



## Key Features
- Real-time preview synchronization
- Responsive multi-step form
- Template-specific form fields
- PDF export functionality
- Mobile-friendly design

## Design Decisions
- **State Management:** Used React Context API for cross-component state sharing
- **Dynamic Component Loading:** Template-specific forms loaded dynamically with Next.js dynamic imports
- **Styling Approach:** Combined Tailwind CSS with shadcn/ui components for consistent theming
- **PDF Generation:** Server-side PDF rendering to enhance client performance



## Screenshot Guide


<img width="100%" src="https://github.com/tayeblagha/certificate-template-generato/blob/main/public/screenshoots/0.png?raw=true">


<img width="100%" src="https://github.com/tayeblagha/certificate-template-generato/blob/main/public/screenshoots/1.png?raw=true">

<img  width="100%" src="https://github.com/tayeblagha/certificate-template-generato/blob/main/public/screenshoots/2.png?raw=true">

<img width="100%" src="https://github.com/tayeblagha/certificate-template-generato/blob/main/public/screenshoots/3.png?raw=true">

<img width="100%" src="https://github.com/tayeblagha/certificate-template-generato/blob/main/public/screenshoots/4.png?raw=true">

<img width="100%" src="https://github.com/tayeblagha/certificate-template-generato/blob/main/public/screenshoots/5.png?raw=true">
