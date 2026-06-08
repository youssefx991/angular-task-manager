# Angular Task Manager

A modular task management application built using Angular, TypeScript, and Bootstrap. The project integrates with a mock REST API to demonstrate complete CRUD operations, client-side authentication, routing guards, and reactive state management utilizing Angular Signals.

## Author
* **Youssef Wagih**

## Key Features

### 1. User Authentication & Route Guarding
* **Secure Workspaces**: Restricts access to task lists, forms, and pages using Angular's route activation guards (`CanActivate`).
* **Session Verification**: Evaluates authorization states dynamically before navigating. Unauthenticated visitors are automatically redirected to the Login or Signup pages.
* **Component Views**: Separate user registration and login components handle credential input and validation before database storage/querying.

### 2. Task Management (Full CRUD)
* **Creation & Validation**: A validation-backed reactive form handles inputting new tasks (titles, descriptions, and statuses).
* **Data Editing**: Leverages a shared service state to select an existing task from the list, populate the editing form, and commit changes back to the server.
* **Status Updates & Deletion**: Quick controls to toggle completion status or permanently remove items from the task list.

### 3. Angular Signals State Management
* **Reactive Core**: Implements Angular's Signal API inside a centralized service to track the currently edited task.
* **Efficient Synchronization**: Avoids complex event piping by letting components subscribe reactively to signal changes, updating the UI instantaneously when task data changes.

### 4. Dynamic Filtering & Tabbed Layouts
* **Status-Based Organization**: Tasks are filtered in real-time under designated views (All Tasks, Done Tasks, Pending Tasks).
* **Tab Navigation**: Clean tabbed layout allows users to swap between task lists without triggering full-page refreshes.

### 5. Automated Image Slider
* **Lifecycle Management**: Features an automated slider component that manages timing intervals internally.
* **Safe Subscriptions**: Hooks into Angular's `OnInit` and `OnDestroy` lifecycle methods to initialize the rotation interval and clear it when navigating away, preventing memory leaks.

## Technology Stack

* **Frontend Framework**: Angular v21.2+
* **Programming Language**: TypeScript
* **Styling & Responsive Layout**: CSS, Bootstrap v5.3+
* **Routing**: Angular Router with page title bindings
* **Mock Backend**: JSON Server (REST API emulator)

## Directory Structure

* `src/app/`
  * `Guards/`: Route protection logic.
  * `services/`: `APIService` handling REST communication with `HttpClient`.
  * `app.routes.ts`: Definition of all application paths, component bindings, and guard associations.
* `src/components/`
  * `my-home/`: Welcome view container.
  * `my-header/`: Shared navigation navbar with session control (logout).
  * `my-task-list/`, `my-task-form/`: Creation, listing, updating, and deleting interfaces.
  * `my-tabs/`, `my-all-tasks/`, `my-done-tasks/`, `my-not-done-tasks/`: Tab components and filtered list views.
  * `my-slider/`: Content carousel displaying image sets.
  * `my-log-in/`, `my-sign-up/`: Identity management modules.
* `public/`: Assets directory containing images and static files.
* `db.json`: JSON file database for mock REST API storage.

## Getting Started

### Prerequisites
* Node.js (v18.x or later recommended)
* npm (v10.x or later)

### Installation
1. Install project dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. **Start the Mock database Server**:
   The backend API relies on `json-server` running on port 3000 (referenced in `src/types.ts`). In a dedicated terminal, run:
   ```bash
   npx json-server db.json --port 3000
   ```

2. **Start the Angular Development Server**:
   In another terminal, boot the Angular dev server:
   ```bash
   npm start
   ```

3. **Open the Application**:
   Navigate to [http://localhost:4200/](http://localhost:4200/) in your web browser.
