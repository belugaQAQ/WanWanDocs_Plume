---
title: image2map
icon: fluent:box-checkmark-16-filled
createTime: 2026/03/21 20:51:33
permalink: /doc/command/image2map
---
::: warning 请注意
该功能需要在客户端安装[image2map](https://modrinth.com/mod/image2map) Mod  
否则无法正常使用功能
:::
::: info 关于"URL"
URL必须为==直链==  
并且图片格式须为 ==PNG== (否则可能无法识别)
:::
### **默认情况下命令**
- `/image2map create <WIDTH> <HEIGHT> <[dither/none]> <URL>` - 使用提供的图像创建指定大小（以像素为单位，单张地图为 128x128）的地图，有/无抖动；  

- `/image2map create <[dither/none]> <URL>` - 使用提供的图像创建有/无抖动的地图；  

- `/image2map preview <URL>` - 在将地图保存为物品之前创建动态预览。  


### **预览模式下的命令**

- `/dither <[dither/none]>` - 更改抖动模式；  

- `/size` - 显示当前大小；  

- `/size <WIDTH> <HEIGHT>` - 将地图大小更改为指定大小（以像素为单位，单张地图为 128x128）；  

- `/grid` - 切换地图网格的可见性；  

- `/save` - 退出预览并将地图保存为物品；  

- `/exit` - 退出预览，但不保存。  
