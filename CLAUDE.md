# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple interactive web application built with vanilla HTML, CSS, and JavaScript. It features three main interactive components: a counter, color generator, and todo list.

## Architecture

The application follows a straightforward client-side architecture:
- `index.html`: Main HTML structure with three card components
- `script.js`: All JavaScript functionality organized by feature (counter, color generator, todo list)
- `styles.css`: Complete styling with responsive design and animations

## Running the Application

Open `index.html` directly in a web browser - no build process or server required.

## Key Implementation Details

- **Counter**: Uses a global `count` variable with color changes based on value (green for positive, red for negative, purple for zero)
- **Color Generator**: Selects from a predefined array of colors and applies animations on generation
- **Todo List**: Dynamically creates todo items with unique IDs, supports click-to-complete and delete functionality
- **Animations**: CSS transitions and JavaScript-triggered transforms provide smooth UI interactions
- **Easter Egg**: Clicking the header title 5 times triggers an alert