---
title: 皮肤指令
icon: fluent:paint-brush-32-filled
createTime: 2026/03/21 17:58:38
permalink: /doc/command/skin
---
### **Mojang**

从有效的 ==**正版**== MC 用户名获取并应用皮肤。  
```minecraft
skin set mojang <用户名> [<目标玩家>]  
```
### **Ely.by**
从有效的 [ely.by](ely.by) 用户名获取并应用皮肤。  
```minecraft
skin set ely.by <用户名> [<目标玩家>]  
```
### **Web**
从任何图像 URL 获取并应用皮肤。  
- Steve（经典的，classic）皮肤模型  
- Alex（瘦手臂，slim）皮肤模型  
```minecraft
skin set web (classic|slim) "<URL>" [<目标玩家>]  
```
::: tip
如果你用Littleskin    
可以直接用Littleskin直链    
如“https://littleskin.cn/skinlib/show/640238”   Alex模型    
那么它的直链为“https://littleskin.cn/raw/640238”    
指令则为  
```minecraft
skin set web slim "https://littleskin.cn/raw/640238" [<目标玩家>]`   
```
::: 
### **其它**  
  
- `skin refresh [<目标玩家>]`  

重新获取并重新应用当前使用的皮肤。  

- `skin clear [<目标玩家>]`  

删除当前应用的皮肤。  

- `skin reset [<目标玩家>]`  

重置为默认皮肤或删除任何自定义皮肤。  
