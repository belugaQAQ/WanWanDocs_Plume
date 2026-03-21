---
title: FakePlayer
icon: fluent:people-settings-20-filled
createTime: 2026/03/21 19:40:25
permalink: /doc/command/fakeplayer
---
- `/player <name> spawn`: 在当前位置生成具有给定名称的假人玩家。
  - `... [in] <gamemode>`：在当前位置生成指定游戏模式的玩家。
  - `... [at] <position>`：在指定位置生成具有给定名称的假人玩家。
    - `... [facing] [facing]`：在指定位置生成具有给定名称，指定朝向的假人玩家。
      - `... [in] <dimension>`：在指定维度的指定位置生成具有指定名称，指定朝向的假人玩家。
        - `... [in] <gamemode>`：在指定维度的指定位置生成具有指定名称、指定朝向，指定游戏模式的假人玩家。  
  
- `/player <name> rejoin`: 玩家重新生成到上次的位置与视角  
  
- `/player <name> attack [continuous | interval <ticks> | once]`: 控制玩家持续、间隔一定时间（ticks）或单次左击。  

- `/player <name> use [continuous | interval <ticks> | once]`: 控制玩家持续、间隔一定时间（ticks）或单次右击。  

- `/player <name> mount [anything]`: 玩家骑乘附近可骑乘的东西。  

- `/player <name> dismount`: 玩家从骑乘的实体上下来。  

- `/player <name> drop`: 玩家丢弃他们当前持有的物品。  

- `/player <name> dropStack`: 玩家丢弃成组的物品。  

- `/player <name> jump`: 玩家执行跳跃动作。  

- `/player <name> kill`: 杀死玩家。  

- `/player <name> look <up | down | north | south | east | west | at <x y z>>`: 玩家看向给定的方向或坐标。  

- `/player <name> move <backward | forward | left | right>`: 玩家向给定的方向移动。  

- `/player <name> shadow`: 使用服务器上的假玩家替换您，仅适用于服务器（不适用于单人游戏）。  

- `/player <name> sneak`: 玩家执行蹲下动作。  

- `player <name> unsneak`: 玩家取消蹲下动作。  

- `/player <name> sprint`: 玩家开始疾跑。  

- `/player <name> unsprint`: 玩家停止疾跑。  

- `/player <name> stop`: 玩家停止移动并取消正在执行的所有操作。  

- `/player <name> swapHands`: 玩家交换主副手的物品。  

- `/player <name> turn`: 玩家转动。  

