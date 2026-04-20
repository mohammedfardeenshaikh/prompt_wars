# ArenaPulse

ArenaPulse is a state-of-the-art sports-tech dashboard platform built to manage, visualize, and monitor smart stadium operations and analytics.

## Features

- **Real-time Analytics**: Visualizations of live data using Recharts.
- **Dynamic Dashboard**: A responsive, interactive dashboard to manage stadium resources.
- **Cloud-Ready**: Prepared for Google Cloud Run deployment with an included Dockerfile and Nginx configuration.
- **Modern UI/UX**: Built with React, Vite, and Lucide Icons for a sleek, premium experience.

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Charting**: Recharts
- **Icons**: Lucide React

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository and navigate to the project directory.
2. Install all dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the Vite development server:
```bash
npm run dev
```

### Building for Production

To create a production build:
```bash
npm run build
```
This will compile your app into the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Docker Deployment (Google Cloud Run)

This project contains a Dockerfile configured for deployment, typically on platforms like Google Cloud Run. It uses Nginx to serve the built static assets.

1. Build the Docker image:
   ```bash
   docker build -t arenapulse .
   ```
2. Run the Docker container locally (optional):
   ```bash
   docker run -p 8080:80 arenapulse
   ```
