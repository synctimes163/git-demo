# git-demo
git demo test

常见命令：

git add

git checkout exampele

git commit exampele

git push origin master


git pull origin master

git branch 


it checkout -b example/git checkout example

git merge example



如何生成SSH密钥？

打开命令行终端输入以下命令按Enter：

ssh-keygen -t rsa -C "youremail@example.com"

Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/dir/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
出现以上界面后连续点击Enter即可。

成功后显示如下信息：

Your identification has been saved in /c/Users/dir/.ssh/id_rsa.
Your public key has been saved in /c/Users/dir/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:wp3oeluctx4VLy9PPbCzCPA7rnNoHHVRDZZbdU0Nj4Y your_email@example.com


如何添加SSH密钥？

查看你的 public key，并把他添加到 github.com

在命令行终端输入：

cat ~/.ssh/id_rsa.pub
以下为显示的密钥（示例）：

ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDDxi0FE/QMSjVSLKmHC0gNkVqjt59LdTkL1+18yii8d8e2vw0RulPnwE3mZHrSaedv4uig6QYw4hZFmAssrX239nmHG6YgeTrIH+hGBBe2K88wNfeiEhpwj9FPh1laXKEsY8MW4IF1zYJmKdLrYIc/tbve/Ft1MwGYLB0Y/jjv6l+ZBWf2TocmbnozVfl42CfzN0niRRsBMOw+gVW0Qh6Ak/HuJbGmAevinl062/UR6tDHpakee46rldL8R5P63BMRhg7RVdt your_email@example.com


示例调试命令：
git clone git@github.com:synctimes163/git-demo.git

cd git-demo


git bransh 查看主分支

git status  常看状态
 
git diff 对比修改

git log 提交记录

git show  fed8be7ee6d71b76e920b1ec058ce780ee6fe992 当前提交内容 commit fed8be7ee6d71b76e920b1ec058ce780ee6fe992 (HEAD -> main, origin/main, origin/HEAD)

<!-- gengxin -->



 git checkout -b feature-login  

 git branch
 
git checkout master   
git branch
  feature-login
  main
* master


 git push origin master
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 4 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 490 bytes | 490.00 KiB/s, done.
Total 4 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
remote:
remote: Create a pull request for 'master' on GitHub by visiting:
remote:      https://github.com/synctimes163/git-demo/pull/new/master
remote:
To github.com:synctimes163/git-demo.git
 * [new branch]      master -> master