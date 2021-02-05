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