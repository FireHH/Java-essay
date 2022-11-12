#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e


push_addr=git@github.com:FireHH/Java-essay.git # git提交地址，也可以手动设置，比如：push_addr=git@github.com:xugaoyi/vuepress-theme-vdoing.git
commit_info=`git describe --all --always --long`
dist_path=docs/.vuepress/dist # 打包生成的文件夹路径
deploy_branch=gh-pages # 推送的分支

# 生成静态文件
npm run build

# 进入生成的文件夹
cd $dist_path

#发布到自定义域名
echo 'javaessay.cn' > CNAME

git init
git config --global user.email "m18388461281@163.com"
git config --global user.name "FireHH"
git add -A

git commit -m "deploy, $commit_info"
remote_addr=https://FireHH:${{secrets.ACCESS_TOKEN}}@${remote_addr}
git remote add origin ${remote_addr}
git push origin HEAD:$deploy_branch --force # 推送到github $deploy_branch分支

cd -
rm -rf $dist_path