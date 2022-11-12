#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

dist_path=docs/.vuepress/dist # 打包生成的文件夹路径
deploy_branch=gh-pages # 推送的分支

# 生成静态文件
npm run build

# 进入生成的文件夹
cd $dist_path

#发布到自定义域名
echo 'javaessay.cn' > CNAME
if [ -z "$GITHUB_TOKEN" ]; then  # -z 字符串 长度为0则为true；$GITHUB_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
  msg='deploy'
  githubUrl=git@github.com:FireHH/Java-essay.git
else
  msg='deploy'
  githubUrl=https://FireHH:${GITHUB_TOKEN}@git@github.com:FireHH/Java-essay.git

git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:$deploy_branch # 推送到github

cd -
rm -rf $dist_path