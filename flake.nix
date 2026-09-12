{
  description = "Full-stack React + Express + Drizzle + MariaDB dev environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.05";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        nodejs = pkgs.nodejs_20;
        pnpm = pkgs.pnpm;
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = [
            nodejs
            pnpm
            pkgs.docker-compose
            pkgs.git
          ];

          shellHook = ''
            echo "Node: ${nodejs.version}"
            echo "pnpm: ${pnpm.version}"
            echo ""
            echo "Commands:"
            echo "  pnpm install"
            echo "  pnpm dev:server"
            echo "  pnpm dev:client"
            echo "  pnpm db:migrate"
            echo ""
            echo "Start DB:"
            echo "  docker compose up -d"
          '';
        };
      }
    );
}
