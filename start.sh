#!/bin/bash
cd /var/www
composer install
npm install
npm run dev
cp .env.local .env -f
while ! nc -z db 5432; do sleep 1; done
php artisan migrate
service apache2 start
tail -f /var/log/apache2/error.log
