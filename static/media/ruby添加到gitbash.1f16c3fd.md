# ruby 添加到 gitbash 环境变量

%HOMEDRIVE%%HOMEPATH%
这个是 windows home 的地址
然后新建一个文件叫.bashrc

```
################################## Construct PATH variable ##################################

winpath=$(echo $MSYS2_WINPATH | tr ";" "\n" | sed -e 's/\\/\\\\/g' | xargs -I {} cygpath -u {})
unixpath=''

# Set delimiter to new line
IFS=$'\n'

for pth in $winpath; do unixpath+=$(echo $pth)":"; done

export PATH=$(echo $PATH:$unixpath | sed -e 's/:$//g')
unset IFS
unset unixpath
unset winpath

################################# Constructed PATH variable #################################
```

里面加上这么一段话，重启一下计算机就好了
