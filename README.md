# Patient Management System

A modern, full-featured patient management application built with React, TypeScript, and Zustand. This application allows healthcare professionals to efficiently manage patient records, appointments, and medical information.

## ✨ Features

- **Patient Registration**: Add new patients with complete information including name, caretaker details, email, admission date, and symptoms
- **Patient Management**: Edit existing patient records with real-time updates
- **Patient Deletion**: Remove patient records with confirmation toasts
- **Persistent Storage**: Data persists across sessions using browser sessionStorage
- **Form Validation**: Robust form validation using React Hook Form
- **Responsive Design**: Fully responsive UI built with Tailwind CSS
- **Toast Notifications**: User-friendly feedback with React Toastify
- **Type Safety**: Full TypeScript support for enhanced code reliability

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **State Management**: Zustand 5.0.9
- **Form Management**: React Hook Form 7.68.0
- **Styling**: Tailwind CSS 4.1.18
- **Build Tool**: Vite 7.2.4
- **Notifications**: React Toastify 11.0.5
- **UUID Generation**: UUID 13.0.0
- **Linting**: ESLint 9.39.2

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16 or higher)
- npm or yarn package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pacientes-zustand
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

## 📜 Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run lint` - Runs ESLint to check code quality
- `npm run preview` - Preview the production build locally

## 📁 Project Structure

```
src/
├── components/
│   ├── ErrorMessage.tsx       # Error message display component
│   ├── PatientDetails.tsx     # Individual patient details view
│   ├── PatientDetailsItem.tsx # Patient detail field component
│   ├── PatientForm.tsx        # Form for adding/editing patients
│   └── PatientsList.tsx       # List view of all patients
├── store.ts                   # Zustand store configuration
├── types/                     # TypeScript type definitions
└── App.tsx                    # Main application component
```

## 💾 Data Persistence

The application uses browser sessionStorage to persist patient data. Data is maintained across page refreshes but cleared when the browser session ends. To change to localStorage for permanent storage, modify the storage configuration in `store.ts`.

## 🎯 Usage

### Adding a Patient

1. Fill in the patient form with required information:
   - Patient name
   - Caretaker/Owner name
   - Email address
   - Admission date
   - Symptoms

2. Click "Guardar Paciente" to save

### Editing a Patient

1. Click the "Editar" button on any patient card
2. Modify the information in the form
3. Click "Editar Paciente" to save changes

### Deleting a Patient

1. Click the "Eliminar" button on the patient card
2. The patient will be removed with a confirmation toast

## 🔧 Configuration

### ESLint

The project includes ESLint configuration with:
- TypeScript support
- React Hooks rules
- Semicolon enforcement
- React Refresh plugin

### Tailwind CSS

Tailwind CSS v4 is configured with Vite plugin for optimal performance and hot module replacement.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the MIT License.

## 👥 Support

For support, please open an issue in the repository or contact the development team.

---

Made with ❤️ using React and TypeScript