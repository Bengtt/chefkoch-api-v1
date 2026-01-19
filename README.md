# Chefkoch Vegan API

A simple REST API for fetching vegan main meal recipes from Chefkoch.de. This API scrapes and returns structured recipe data including meal listings and detailed recipe information.

## Features

- 🌱 Fetch vegan main meals (Hauptspeise) from Chefkoch.de
- 📖 Get detailed recipe information including ingredients and instructions
- 🐳 Docker support for easy deployment
- 🚀 Built with TypeScript and Express

## Prerequisites

- Node.js 20 or higher
- Docker and Docker Compose (optional, for containerized deployment)

## Setup

### Local Development

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd my-chefkoch-api
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file**

   ```bash
   PORT=3000
   ```

4. **Build the project**

   ```bash
   npm run build
   ```

5. **Start the server**

   ```bash
   npm start
   ```

   For development with auto-recompilation:

   ```bash
   npm run dev
   ```

### Docker Deployment

1. **Build and start with Docker Compose**

   ```bash
   docker-compose up -d
   ```

   The API will be available on the port specified in your `.env` file.

## API Endpoints

### POST `/fetch-meals`

Fetches a list of vegan main meals from Chefkoch.de.

**Request Body:**

```json
{
  "pagenumber": "0"
}
```

**Response:**

```json
{
  "result": [
    {
      "name": "Recipe Name",
      "img": "https://...",
      "preptime": "30 Min.",
      "description": "Recipe description...",
      "recipeLink": "https://www.chefkoch.de/..."
    }
  ]
}
```

**Notes:**

- `pagenumber` determines which page of results to fetch (starts at 0)
- Returns up to 11 recipes per request

### POST `/fetch-recipe`

Fetches detailed recipe information including ingredients and cooking instructions.

**Request Body:**

```json
{
  "recipeURL": "https://www.chefkoch.de/rezepte/..."
}
```

**Response:**

```json
{
  "result": [
    {
      "name": "Recipe Name",
      "portions": "4",
      "img": "https://...",
      "preptime": "30 Min.",
      "ingredientList": [
        {
          "amount": "200 g",
          "ingredient": "Ingredient name",
          "properties": "e.g., diced"
        }
      ],
      "instructionList": [
        {
          "step": "1",
          "instructionText": "Cooking instruction..."
        }
      ],
      "url": "https://www.chefkoch.de/..."
    }
  ]
}
```

## Project Structure

```
.
├── src/
│   ├── server.ts          # Express server setup and routes
│   ├── fetchMeals.ts      # Meal listing scraper
│   ├── getRecipe.ts       # Detailed recipe scraper
│   ├── fetcher.ts         # HTTP fetcher utility
│   ├── types.ts           # TypeScript interfaces
│   └── index.ts           # Exports
├── Dockerfile             # Docker image definition
├── docker-compose.yml     # Docker Compose configuration
├── package.json           # Dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

## Technology Stack

- **TypeScript** - Type-safe JavaScript
- **Express** - Web framework
- **Cheerio** - HTML parsing and scraping
- **Docker** - Containerization

## Environment Variables

| Variable | Description | Default |
| -------- | ----------- | ------- |
| `PORT`   | Server port | 3000    |

## Notes

- This API scrapes data from Chefkoch.de. Please use responsibly and respect their terms of service.
- The API specifically targets vegan main course recipes (Hauptspeise).
- Recipe availability depends on Chefkoch.de's website structure, which may change over time.

## License

This project is provided as-is for educational purposes.
