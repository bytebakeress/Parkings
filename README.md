# Projet parking
# Informations des membres du groupe
- **Nom membre 1 :** Fatimatou sow
- **Numéro étudiant :** 32320813

- **Nom  membre 2:** Mouhamadou Rassoul Mbaye
- **Numéro étudiant :** 32424377

- **Nom membre 3:** Kare elhadji ndiouga
- **Numero étudiant :** 32125983

# structure du projet
src
│   │   index.ts
│   │   parking.sqlite
│   │
│   ├───Controllers
│   │   │   HomeController.ts
│   │   │
│   │   ├───City
│   │   │       ReadAllCitiesController.ts
│   │   │       ReadOneCityController.ts
│   │   │
│   │   └───parking
│   │           ReadAllParkingsController.ts
│   │           ReadOneParkingController.ts
│   │
│   ├───data
│   │       staticDatabase.ts
│   │
│   ├───models
│   │       City.ts
│   │       Park.ts
│   │       Parking.ts
│   │       Spot.ts
│   │
│   ├───Routes
│   │       CityRoutes.ts
│   │       parkingroutes.ts
│   │
│   ├───test
│   │       generateRandomNumberl.test.ts
│   │       toSlug.test.ts
│   │
│   ├───types
│   │       GPS.ts
│   │
│   ├───Utils
│   │       generateRandomNumberld.ts
│   │       toSlug.ts
│   │
│   └───Views
│       ├───city
│       │       ReadAllCitiesView.tsx
│       │       ReadOneCityView.tsx
│       │
│       ├───parking
│       │       ReadAllParkingsView.tsx
│       │       ReadOneParkingView.tsx
│       │
│       └───Shared
│               Layout.tsx
│
└───static
        parking.png
To install dependencies:

```bash
bun install
```

To run:

```bash
bun run src/index.ts
```

This project was created using `bun init` in bun v1.1.27. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
