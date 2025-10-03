# Antique Catalog

A simple React application to manage a catalog of antique objects. This app allows users to view, add, edit, and delete antique items with name, image, year, and description.

## Features

- 📋 **View Catalog**: Browse through your collection of antiques in a beautiful card layout
- ➕ **Add Antiques**: Add new antique objects with name, image URL, year, and description
- ✏️ **Edit Antiques**: Update existing antique information
- 🗑️ **Delete Antiques**: Remove antiques from your catalog with confirmation
- 💾 **Local Storage**: Sample data included with 6 pre-populated antique objects

## Screenshots

### Main Catalog View
![Main View](https://github.com/user-attachments/assets/131af5b6-0449-4182-b370-6ed3fde476f3)

### Add New Antique
![Add Form](https://github.com/user-attachments/assets/6566f516-973c-4c54-9728-fea06d5eb536)

### After Adding/Editing
![After Edit](https://github.com/user-attachments/assets/345bfb51-04d1-4942-82a3-9883b202030b)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/referencenull/communitydemo.git
cd communitydemo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

To create a production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:
```bash
npm run preview
```

## Technology Stack

- **React 18**: Modern UI library
- **Vite**: Fast build tool and dev server
- **CSS3**: Custom styling with modern features
- **JavaScript ES6+**: Modern JavaScript features

## Project Structure

```
communitydemo/
├── src/
│   ├── components/          # React components
│   │   ├── AntiqueCard.jsx     # Individual antique card
│   │   ├── AntiqueCard.css
│   │   ├── AntiqueForm.jsx     # Add/Edit form
│   │   ├── AntiqueForm.css
│   │   ├── AntiqueList.jsx     # Grid layout of cards
│   │   └── AntiqueList.css
│   ├── App.jsx              # Main app component
│   ├── App.css
│   ├── main.jsx            # App entry point
│   ├── index.css           # Global styles
│   └── data.js             # Sample antique data
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
└── vite.config.js         # Vite configuration
```

## Usage

### Adding a New Antique

1. Click the "+ Add New Antique" button
2. Fill in the form:
   - **Name** (required): The name of the antique
   - **Image URL**: URL to an image of the antique
   - **Year**: The year the antique was made
   - **Description**: A brief description
3. Click "Add Antique" to save

### Editing an Antique

1. Click the "Edit" button on any antique card
2. Modify the information in the form
3. Click "Update Antique" to save changes

### Deleting an Antique

1. Click the "Delete" button on any antique card
2. Confirm the deletion in the popup dialog

## Sample Data

The app comes pre-loaded with 6 sample antique objects:
- Victorian Oak Writing Desk (1890)
- Vintage Pocket Watch (1925)
- Art Deco Table Lamp (1935)
- Antique Gramophone (1920)
- Porcelain Tea Set (1880)
- Vintage Typewriter (1950)

## License

MIT License - feel free to use this project for learning and development purposes.
