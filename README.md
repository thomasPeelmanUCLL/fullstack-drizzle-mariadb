# fullstack-drizzle-mariadb

Full-stack app with:

- **Frontend:** Next.js (pages router) + TypeScript + Tailwind
- **Backend:** Express + TypeScript, layered architecture (model/repository/service/controller)
- **Database:** MariaDB
- **ORM:** Drizzle ORM + Drizzle Kit
- **Dev env:** `nix develop` ready

## Quickstart

```bash
# Enter Nix dev shell
nix develop

# Start MariaDB via Docker Compose
docker compose up -d

# Install dependencies
pnpm install

# Run DB migrations
pnpm db:migrate

# Start backend
pnpm dev:server

# In another terminal, start frontend
pnpm dev:client
```

## Structure

- `front-end/` – Next.js frontend
- `back-end/` – Express API with Drizzle ORM
- `docker-compose.yml` – Local MariaDB
- `flake.nix` – Nix dev shell (Node, pnpm, etc.)

## Environment

Create `back-end/.env`:

```env
DATABASE_URL="mysql://user:password@localhost:3306/app"
PORT=3000
```

Adjust credentials to match `docker-compose.yml`.

## License

MIT
