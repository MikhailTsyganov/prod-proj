cd ~/prod-proj
git pull
npm run build:prod

rm -rf ~/../var/www/prod-proj/html
mv ~/prod-proj/build ~/../var/www/prod-proj/html