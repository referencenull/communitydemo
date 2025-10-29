# 🏺 Antique Objects Catalogue

A simple React application for managing a catalogue of antique objects. Built with React and Vite.

## Features

- **View Catalogue**: Browse through a beautiful grid display of antique objects
- **Search Functionality**: Filter antiques by name, description, or origin
- **Add New Items**: Add new antique objects with name, description, image, year, origin, and condition
- **Edit Items**: Update existing antique object details
- **Delete Items**: Remove items from the catalogue with confirmation
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Sample Database**: Comes pre-loaded with 6 sample antique objects

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm (v10 or higher)

### Installation

1. Navigate to the project directory:
```bash
cd antique-catalogue
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

#### Development Mode

Start the development server with hot-reload:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

#### Production Build

Build the application for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Code Quality

Run ESLint to check code quality:
```bash
npm run lint
```

## Project Structure

```
antique-catalogue/
├── src/
│   ├── components/          # React components
│   │   ├── AntiqueCard.jsx      # Individual antique card display
│   │   ├── AntiqueCard.css
│   │   ├── AntiqueList.jsx      # Grid list of antique cards
│   │   ├── AntiqueList.css
│   │   ├── AntiqueForm.jsx      # Add/Edit form modal
│   │   └── AntiqueForm.css
│   ├── data/                # Sample data
│   │   └── antiqueData.js       # Initial antique objects database
│   ├── App.jsx              # Main application component
│   ├── App.css
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html              # HTML template
├── package.json            # Project dependencies
└── vite.config.js          # Vite configuration
```

## Usage Guide

### Viewing the Catalogue

The main page displays all antique objects in a responsive grid layout. Each card shows:
- Object image
- Name and description
- Year of origin
- Country/region of origin
- Condition rating

### Searching for Items

Use the search bar at the top to filter items by:
- Object name
- Description
- Origin/country

The results update in real-time as you type.

### Adding a New Antique

1. Click the "+ Add New Antique" button
2. Fill in the form with:
   - **Name** (required): The name of the antique object
   - **Description** (required): A brief description
   - **Image URL** (required): A web URL to an image
   - **Year** (optional): Year or era of the object
   - **Origin** (optional): Country or region of origin
   - **Condition** (optional): Select from Excellent, Very Good, Good, Fair, or Poor
3. Click "Add Object" to save or "Cancel" to close the form

### Editing an Item

1. Click the green "Edit" button on any antique card
2. Update the desired fields in the form
3. Click "Update Object" to save changes or "Cancel" to discard

### Deleting an Item

1. Click the red "Delete" button on any antique card
2. Confirm the deletion in the popup dialog

## Sample Data

The application comes with 6 pre-loaded antique objects:
- Victorian Porcelain Vase (1880, England)
- Antique Brass Telescope (1910, France)
- Vintage Pocket Watch (1925, Switzerland)
- Art Deco Table Lamp (1935, USA)
- Antique Typewriter (1940, USA)
- Chinese Jade Carving (1850, China)

You can modify the sample data in `src/data/antiqueData.js`.

## Technologies Used

- **React 19** - UI library
- **Vite 7** - Build tool and development server
- **CSS3** - Styling with modern features
- **ESLint** - Code quality and linting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for demonstration purposes.

## Screenshots

### Main Catalogue View
![Main View](https://github.com/user-attachments/assets/dedafbdd-ed94-467e-b669-d0a5097db3af)

### Add/Edit Form
![Add Form](https://github.com/user-attachments/assets/1d9412ba-dc1f-4c63-8a30-87819941b25f)

### Search Functionality
![Search](https://github.com/user-attachments/assets/1dd162c3-2a88-4e46-a6ba-1fbdaaec5b41)
