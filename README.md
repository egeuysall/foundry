# Foundry

Clone. Build. Ship.

## Quick Start

### Prerequisites

- Node.js 18+, pnpm, Go 1.21+
- Docker and Docker Compose

### Setup

```bash
# Clone and setup
git clone <your-repo-url>
cd foundry

# Environment files
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env

# Install dependencies
cd frontend && pnpm install
cd ../backend && go mod download
```

### Development

```bash
# Docker Compose (recommended)
docker-compose up -d

# Or local development
cd frontend && pnpm dev
cd backend && go run cmd/server.go
```

Access: Frontend http://localhost:3000 | Backend http://localhost:8080 | Storybook http://localhost:6006

## Development

### Frontend

```bash
cd frontend
pnpm dev          # Development server
pnpm test         # Run tests
pnpm storybook    # Storybook
pnpm build        # Production build
```

### Backend

```bash
cd backend
go run cmd/server.go    # Run server
go test ./...          # Run tests
sqlc generate          # Generate SQLC code
```

## Deployment

```bash
# Build for production
cd frontend && pnpm build
cd backend && go build -o bin/server cmd/server.go

# IMPORTANT: Get SSL certificate first
sudo certbot certonly --standalone -d <YOUR_DOMAIN> --email <YOUR_EMAIL> --agree-tos --no-eff-email

# Deploy with Docker
docker-compose -f docker-compose.prod.yml up -d
```

## License

MIT License - see LICENSE file for details.
