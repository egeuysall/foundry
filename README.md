# Foundry

Clone. Build. Ship.

## Quick Start

### Setup

```bash
# Clone and setup
git clone https://github.com/egeuysall/foundry.git
cd foundry

# Environment files
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env

# Install dependencies
cd apps/web && pnpm install
cd ../api && go mod download
```

### Development

```bash
# Local development
cd apps/web && pnpm dev
cd ../api && air
```

## Deployment

```bash
# IMPORTANT: Get SSL certificate first
sudo certbot certonly --standalone -d <YOUR_DOMAIN> --email <YOUR_EMAIL> --agree-tos --no-eff-email

# Deploy with Docker
docker-compose up --build -d
```
