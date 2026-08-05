# Bergut Frontend

The Angular frontend for **Bergut** — a fitness analytics platform that integrates with Strava (and future providers such as Komoot) to visualize activities, track progress, and provide detailed performance insights.

## Features

* 🔐 Secure authentication with the Bergut backend
* 🚴 Browse and explore synced fitness activities
* 📊 Interactive analytics dashboards
* 🗺️ Activity maps and route visualization
* 📈 Performance trends and personal records
* ⚙️ User profile and provider management
* 📱 Responsive UI for desktop and mobile browsers

## Technology Stack

* **Angular**
* **TypeScript**
* **SCSS**
* **Angular Material**
* **Chart.js / ng2-charts**
* **Leaflet**
* **RxJS**

## Project Structure

```text
src/
├── app/
│   ├── core/
│   │   ├── auth/
│   │   ├── guards/
│   │   ├── interceptors/
│   │   ├── layout/
│   │   └── services/
│   │
│   ├── shared/
│   │   ├── components/
│   │   ├── models/
│   │   ├── pipes/
│   │   └── utils/
│   │
│   ├── features/
│   │   ├── auth/
│   │   ├── dashboard/
│   │   ├── activities/
│   │   ├── analytics/
│   │   ├── profile/
│   │   ├── providers/
│   │   └── settings/
│   │
│   ├── app.config.ts
│   └── app.routes.ts
│
├── assets/
└── environments/
```

## Requirements

* Node.js 22+
* npm 10+
* Angular CLI

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/bergut-frontend.git
cd bergut-frontend
```

Install dependencies:

```bash
npm install
```

## Running the Application

Start the development server:

```bash
ng serve
```

or

```bash
npm start
```

Open:

```
http://localhost:4200
```

The application automatically reloads when source files change.

## Build

Create a production build:

```bash
ng build
```

The compiled application will be placed in:

```text
dist/
```

## Environment Configuration

Example `environment.ts`:

```typescript
export const environment = {
    production: false,
    apiUrl: 'http://localhost:8080/api/v1'
};
```

Example `environment.prod.ts`:

```typescript
export const environment = {
    production: true,
    apiUrl: 'https://api.bergut.app/api/v1'
};
```

## Backend

The frontend communicates exclusively with the Bergut Spring Boot REST API.

Typical workflow:

```text
Angular
    │
    ▼
Spring Boot REST API
    │
    ▼
PostgreSQL
    │
    ▼
Strava API
```

The frontend never communicates directly with Strava. All OAuth authentication, token management, synchronization, and analytics are handled by the backend.

## Main Features

### Dashboard

* Weekly and monthly activity summaries
* Distance, time, and elevation statistics
* Recent activities
* Personal records
* Progress charts

### Activities

* Activity list
* Detailed activity view
* Interactive route map
* Splits and statistics
* Elevation profile

### Analytics

* Distance trends
* Pace trends
* Heart rate analysis
* Elevation analysis
* Historical progression
* Personal records

### Settings

* User profile
* Connected providers
* Application preferences

## Architecture

The application follows a feature-based architecture using Angular standalone components.

```text
Features
    │
    ├── Dashboard
    ├── Activities
    ├── Analytics
    ├── Profile
    └── Settings
```

Each feature encapsulates its own pages, components, services, models, and routing.

## Roadmap

* ✅ Strava authentication
* ✅ Activity synchronization
* ⏳ Interactive analytics dashboard
* ⏳ Personal record detection
* ⏳ Training load analytics
* ⏳ Activity filtering and search
* ⏳ Komoot integration
* ⏳ Garmin integration
* ⏳ Progressive Web App (PWA)
* ⏳ Native Android client

## License

This project is licensed under the MIT License.
