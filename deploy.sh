#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

#发布到自定义域名
echo 'javaessay.cn' > CNAME

git init
git add -A
git commit -m 'message'

# 如果发布到 https://<FireHH>.github.io
#git remote add origin git@github.com:FireHH/Java-essay.git
git push -f git@github.com:FireHH/firehh.github.io.git master

cd ../ && rm -rf dist