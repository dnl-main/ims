.PHONY: help up down build rebuild logs clean

help:
	@echo "Available commands:"
	@echo "  make up        Start all services"
	@echo "  make down      Stop all services"
	@echo "  make build     Build images"
	@echo "  make rebuild   Rebuild images (no cache)"
	@echo "  make logs      View logs"
	@echo "  make clean     Remove containers, volumes, images"

up:
	docker compose up -d

down:
	docker compose down

build:
	docker compose build

rebuild:
	docker compose build --no-cache

logs:
	docker compose logs -f

clean:
	docker compose down -v --rmi all --remove-orphans
