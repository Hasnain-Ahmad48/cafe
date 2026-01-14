# Café Hero Section

This project implements a modern hero section for a café website using React and Tailwind CSS.

## Setup

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Run the development server:
    ```bash
    npm run dev
    ```

## Customization

### Video Background
To use a custom video, place your video file named `hero-video.mp4` in the `public` folder. The application is configured to look for this file, but falls back to a remote URL if not found.

### Colors
Colors are defined in `tailwind.config.js`:
-   `earth-dark`: Main background/text color (#05110d)
-   `earth-overlay`: Overlay gradient color (#14251f)
-   `earth-accent`: Accent color for text and buttons (#a7ddb8)
-   `earth-hover`: Hover state color (#354b44)
