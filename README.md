## Overview
This project is a creative and elegant clock designed using p5.js. It features dynamic visual elements and subtle animations that create an engaging and modern look. The clock is built to adapt to various screen sizes, offering a responsive and visually appealing design.

### Features
Analog Arcs for Time:
The clock uses colorful arcs to represent hours, minutes, and seconds.
Each arc smoothly animates with a slight pulsating effect.

Digital Time Display:
The current time is shown in a clean, digital format (HH:MM:SS).

Day and Date:
The current day of the week and the date are displayed below the clock for convenience.

Rotating Dots for Seconds:
Small, pastel-colored dots rotate around the clock center to represent seconds dynamically.

Pulsating Background Glow:
A hue-shifting gradient background adds a calming and modern touch.

Responsive Design:
The clock dynamically adjusts to fit the screen size, ensuring a seamless experience across devices.

## How It Works

Time Representation:
The clock uses the current system time to update the arcs, dots, and text dynamically.
The hour(), minute(), and second() functions fetch the current time.

Animations:
Subtle pulsating effects for arcs and floating dots are achieved using sine wave functions.
The background color shifts gently across the hue spectrum using HSB color mode.
