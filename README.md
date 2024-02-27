# Dynamic Carousel

This document describes the implementation of a dynamic carousel component in Angular.

## Overview

The dynamic carousel allows users to display a series of images with captions in a rotating slideshow format. Users can add new slides with image URLs and captions, delete existing slides, and navigate through the slides using previous and next buttons.

## Features

- Display a series of images with captions in a rotating slideshow format.
- Add new slides dynamically with image URLs and captions.
- Delete existing slides.
- Navigate through slides using previous and next buttons.
- Error handling for invalid image URLs.
- Proper styling and formatting.

## Implementation

### Component Structure

- **AppComponent:** Main component containing the carousel, list of slides, and add slide form.

### Functionality

- **Add Slide:** Allows users to add a new slide to the carousel by providing an image URL and caption. Validates the image URL and prevents adding empty slides.
- **Delete Slide:** Enables users to delete an existing slide from the carousel.
- **Slide Navigation:** Provides navigation through slides using previous and next buttons.
- **Error Handling:** Displays an error message if an invalid image URL is provided.

### Technologies Used

- Angular framework for building the dynamic carousel component.
- HTML and SCSS for structure and styling.
- TypeScript for component logic and data manipulation.

## Usage

To use the dynamic carousel component, follow these steps:

1. Add the AppComponent to your Angular application.
2. Provide the list of slides with image URLs and captions.
3. Interact with the carousel by adding, deleting, and navigating through slides.

## Example

Below is an example of how the dynamic carousel component can be used:

```html
<app-root></app-root>
