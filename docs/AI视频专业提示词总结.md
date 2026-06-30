# AI 视频专业提示词完全指南

> **版本**: v1.0 | **更新日期**: 2026-06-22
> **资料来源**: Runway 官方指南、Atlabs.ai 38种镜头运动、awesome-ai-video-prompts、MasterPrompting 多平台对比、Seedance 2.0 指南、550WAI Prompt 大全、27种电影级光影布光方案

---

## 目录

1. [核心理论与通用公式](#一核心理论与通用公式)
2. [镜头运动完整指南（38种）](#二镜头运动完整指南38种)
3. [景别系统](#三景别系统)
4. [机位角度与视角心理学](#四机位角度与视角心理学)
5. [光影氛围词汇库（27种布光方案）](#五光影氛围词汇库27种布光方案)
6. [转场技巧](#六转场技巧)
7. [多平台适配策略](#七多平台适配策略)
8. [场景化 Prompt 模板](#八场景化-prompt-模板)
9. [最佳实践与避坑指南](#九最佳实践与避坑指南)
10. [常用词汇速查表](#十常用词汇速查表)

---

## 一、核心理论与通用公式

### 1.1 万能四段式公式（Runway 官方）

> **[Camera Movement 镜头运动] + [Scene 场景设定] + [Action 主体动作] + [Details 细节补充]**

**示例**：
```
Slow dolly forward through misty forest (镜头). Ancient trees tower overhead (场景).
Figure in red coat walks away from camera (动作). Sunlight pierces through canopy (细节).
```
（缓慢前推穿过迷雾森林。古树高耸入云。穿红大衣的人背对镜头走远。阳光穿透树冠。）

### 1.2 五要素结构框架（550WAI / MasterPrompting）

| 要素 | 说明 | 示例 |
|------|------|------|
| **Subject 主体** | 谁/什么在画面中 | 一位25岁的中国女性，黑色长发 |
| **Action 动作** | 主体在做什么 | 自信地穿过繁忙的街道 |
| **Scene 场景** | 环境、光线、天气 | 霓虹灯闪烁的东京街头，雨后路面 |
| **Camera 镜头** | 景别、运动方式 | 中景，慢速正面跟拍 |
| **Style 风格** | 画面质感、色调 | 电影级浅景深，暖色调分级 |

### 1.3 Seedance 2.0 通用公式

`[模式定位] + [主体与动作] + [运动与节奏] + [镜头语言] + [风格与画质]`

**黄金法则**：上传参考图时，文字 Prompt 只负责描述**图片里没有的动态信息**，不要重复描述已有画面内容。

### 1.4 核心原则（所有平台通用）

| 原则 | 说明 |
|------|------|
| **正向描述最重要** | ✅ "平稳稳定的镜头" ❌ "不要晃动"（AI 可能聚焦于"晃动"）|
| **单一动作原则** | 每个 Prompt 只描述一个主要动作 |
| **避免时间连接词** | 不用"然后"、"接下来"，每个 Prompt 是独立瞬间 |
| **具体胜过抽象** | ❌ "美丽的女人" → ✅ "25岁，鹅蛋脸，柳叶眉，穿白色真丝衬衫" |
| **动词要有力** | ❌ "走" → ✅ "stride confidently" / "stumble forward" |
| **控制时长预期** | 5秒 = 一个动作；10秒 = 动作 + 反应 |

---

## 二、镜头运动完整指南（38种）

> 来源：[Atlabs.ai Ultimate Guide to AI Camera Moves](https://www.atlabs.ai/blog/ultimate-guide-ai-camera-moves-prompts)

**核心理念**：将 **相机提示词 (Camera Prompt)** 与 **主体提示词 (Subject Prompt)** 分离，可避免 AI 产生幻觉和变形。

---

### 类别 1：DOLLY 移动类（深度感）

适用于建立亲密感或介绍场景。

| # | 运镜名称 | 英文 | 描述 | 示例 Prompt |
|---|---------|------|------|------------|
| 1 | **慢速推镜** | Slow Dolly In | 相机物理向前移动，靠近主体 | `SLOW DOLLY IN (PUSH). The camera physically moves forward toward the subject.` |
| 2 | **慢速拉镜** | Slow Dolly Out | 相机向后移动，展示环境 | `SLOW DOLLY OUT (PULL). The camera moves backward, revealing more environment.` |
| 3 | **快速推镜/冲刺** | Fast Dolly In (The Rush) | 创造紧迫感或震惊感 | `FAST DOLLY IN / RUSH. The camera moves rapidly forward toward the subject's face.` |
| 4 | **变焦推拉/眩晕效应** | Dolly Zoom (Zolly) | 希区柯克效果：后移+变焦同时进行 | `DOLLY ZOOM (ZOOLLY). The camera moves BACKWARD while the lens Zooms IN. Background warps wildly.` |

---

### 类别 2：无限尺度连续性

适用于科幻、转场、展示细节。

| # | 运镜名称 | 英文 | 描述 | 示例 Prompt |
|---|---------|------|------|------------|
| 5 | **极端微距变焦** | Extreme Macro Zoom | 从面部到微观层面 | `EXTREME MACRO ZOOM. From portrait to skin pores, diving deep into iris and pupil.` |
| 6 | **宇宙超变焦** | Cosmic Hyper-Zoom | 从外太空到街道层面 | `COSMIC HYPER-ZOOM (SPACE TO STREET). From Earth orbit diving down between buildings.` |

---

### 类别 3：角色机位构图

适用于叙事和对话场景。

| # | 运镜名称 | 英文 | 描述 | 示例 Prompt |
|---|---------|------|------|------------|
| 7 | **过肩镜头** | Over-The-Shoulder (OTS) | 建立两个角色之间的关系 | `OVER THE SHOULDER SHOT. Behind a blurred foreground shoulder, looking at main subject.` |
| 8 | **鱼眼/猫眼镜头** | Fisheye / Peephole | 扭曲、窥视或恐怖氛围 | `FISHEYE LENS. Extreme wide-angle distortion, resembles security camera view.` |

---

### 类别 4：障碍物与环境互动

增加深度感和真实感。

| # | 运镜名称 | 英文 | 描述 | 示例 Prompt |
|---|---------|------|------|------------|
| 9 | **从后揭示/划像** | Reveal From Behind (Wipe) | 使用前景物体作为转场 | `SLIDING REVEAL. Starts blocked by wall/pillar, slides laterally to reveal subject.` |
| 10 | **穿透镜头** | Through Shot | 穿过固体物体（玻璃、窗户） | `FLY THROUGH. Physically flies through a window/gap to reveal subject behind.` |

---

### 类别 5：焦点与镜头操控

引导观众视线。

| # | 运镜名称 | 英文 | 描述 | 示例 Prompt |
|---|---------|------|------|------------|
| 11 | **模糊中揭示** | Reveal from Blur | 从散景开始逐渐对焦 | `FOCUS PULL REVEAL. Starts completely out of focus, slowly pulls focus to sharp.` |
| 12 | **变焦转移** | Rack Focus | 从前景转移到背景焦点 | `RACK FOCUS. Focus shifts: subject becomes blurry, background becomes sharp.` |

---

### 类别 6：三脚架移动（俯仰）

稳定的专业画面。

| # | 运镜名称 | 英文 | 描述 | 示例 Prompt |
|---|---------|------|------|------------|
| 13 | **向上倾斜** | Tilt Up | 从脚到头展示角色 | `SLOW TILT UP. Tilts vertically upward, starting at boots ending on face.` |
| 14 | **向下倾斜** | Tilt Down | 从头到脚展示 | `SLOW TILT DOWN. Tilts vertically downward, from face down to boots.` |

---

### 类别 7：滑轨移动（横向）

展示侧面轮廓或环境宽度。

| # | 运镜名称 | 英文 | 描述 | 示例 Prompt |
|---|---------|------|------|------------|
| 15 | **左侧横移** | Lateral Truck Left | 相机在轨道上向左滑动 | `TRUCK LEFT. Slides sideways left on track with strong parallax effect.` |
| 16 | **右侧横移** | Lateral Truck Right | 相机在轨道上向右滑动 | `TRUCK RIGHT. Slides sideways right on track with strong parallax effect.` |
| 19 | **缓慢电影弧线运镜** | Slow Cinematic Arc | 围绕主体的微妙曲线运动 | `SLOW ARC SHOT. Gentle wide curve around subject, revealing side profile slowly.` |

---

### 类别 8：环绕运动

英雄镜头、展示服装/盔甲。

| # | 运镜名称 | 英文 | 描述 | 示例 Prompt |
|---|---------|------|------|------------|
| 17 | **半圆环绕** | Orbit 180 (Half Circle) | 围绕主体 180 度运动 | `HALF ORBIT. Travels 180 degrees around subject, front to back view.` |
| 18 | **快速 360 环绕** | Fast 360 Orbit (Spin) | 连续绕主体一圈 | `FAST 360 ORBIT. Continuously circles subject in full loop, background spins rapidly.` |

---

### 类别 9：垂直移动（升降机/起重机）

改变视角高度。

| # | 运镜名称 | 英文 | 描述 | 示例 Prompt |
|---|---------|------|------|------------|
| 20 | **垂直下降** | Pedestal Down | 整个相机机身垂直下降 | `PEDESTAL DOWN. Camera body lowers vertically from eye level to waist level.` |
| 21 | **垂直上升** | Pedestal Up | 整个相机机身垂直上升 | `PEDESTAL UP. Camera body rises vertically from waist level to eye level.` |
| 22 | **起重机上升/高角度揭示** | Crane Up | 向上扫动至俯视角度 | `CRANE UP. Soars upward and backward on jib arm, ends in high-angle overhead shot.` |
| 23 | **起重机下降/降落** | Crane Down | 从高空平滑降至眼平高度 | `CRANE DOWN. Descends smoothly from bird's-eye view down to eye level.` |

---

### 类别 10：光学镜头效果（变焦）

改变视野但不移动相机。

| # | 运镜名称 | 英文 | 描述 | 示例 Prompt |
|---|---------|------|------|------------|
| 24 | **平滑光学变焦推进** | Smooth Optical Zoom In | 相机位置固定，增加焦距 | `SMOOTH LENS ZOOM IN. Position fixed, lens focal length increases gradually.` |
| 25 | **平滑光学变焦拉远** | Smooth Optical Zoom Out | 相机位置固定，减小焦距 | `SMOOTH LENS ZOOM OUT. Position fixed, zooms out to wide angle.` |
| 26 | **瞬间变焦/冲击变焦** | Snap Zoom (Crash Zoom) | 动作片或喜剧专用 | `SNAP ZOOM. Sudden extremely rapid zoom directly into eyes. High impact.` |

---

### 类别 11：无人机与航拍视图

建立镜头和史诗景观。

| # | 运镜名称 | 英文 | 描述 | 示例 Prompt |
|---|---------|------|------|------------|
| 27 | **无人机高空飞越** | Drone Flyover | 平稳的高空向前飞行 | `HIGH ALTITUDE DRONE FLYOVER. Smooth aerial shot moving forward over vast landscape.` |
| 28 | **史诗级无人机揭示** | Epic Drone Reveal | 从山脊后方升起并向下倾斜 | `EPIC DRONE REVEAL. Starts low behind ridge, rises while tilting down to reveal subject.` |
| 29 | **大规模无人机环绕** | Large Scale Drone Orbit | 大范围空中环绕 | `WIDE DRONE ORBIT. Massive sweeping aerial circle around subject.` |
| 30 | **俯视/上帝视角** | Top-Down (God's Eye View) | 正上方 90 度俯拍 | `TOP-DOWN DRONE SHOT (GOD'S EYE). Directly overhead at 90 degrees, slowly twisting.` |
| 31 | **FPV 无人机俯冲** | FPV Drone Dive | 攻击性快速下落运动 | `FPV DRONE DIVE. Fast aggressive dive down building side toward subject.` |

---

### 类别 12：风格化与动态运动

动作、恐怖或独立电影美学。

| # | 运镜名称 | 英文 | 描述 | 示例 Prompt |
|---|---------|------|------|------------|
| 32 | **手持拍摄** | Handheld | 有机的人类抖动感 | `HANDHELD CAMERA. Organic human jitters, slight instability, breathing motion.` |
| 33 | **急甩摇摄** | Whip Pan | 两点间的快速转场 | `WHIP PAN LEFT. Violent whip left with extreme directional motion blur.` |
| 34 | **荷兰角/倾斜镜头** | Dutch Angle (Roll) | 不安感的倾斜地平线 | `DUTCH ANGLE / CAMERA ROLL. Tilted sideways on Z-axis, diagonal horizon line.` |

---

### 类别 13：主体追踪

行走场景和跟拍动作。

| # | 运镜名称 | 英文 | 描述 | 示例 Prompt |
|---|---------|------|------|------------|
| 35 | **引导镜头/反向追踪** | Leading Shot | 主体走向相机，相机后退 | `LEADING SHOT. Subject walks forward, camera moves backward at same speed.` |
| 36 | **跟随镜头/正向追踪** | Following Shot | 主体远离，相机跟随 | `FOLLOWING SHOT. Subject walks away, camera follows behind at same speed.` |
| 37 | **侧面追踪/平行** | Side Tracking | 侧面平行跟随 | `SIDE TRACKING PARALLEL. Subject walks L to R, camera trucks alongside in profile.` |
| 38 | **第一人称行走视角** | POV Walk | 第一人称视角带轻微晃动 | `FIRST PERSON POV WALK. Forward motion with walking bobbing and swaying.` |

---

### 运镜使用建议

| 建议 | 说明 |
|------|------|
| **分离提示词** | 保持"主体/环境"提示与"相机"提示分开，防止 AI 混淆 |
| **迭代尝试** | AI 电影制作是概率游戏，效果不理想就重新生成 |
| **小心组合** | 可组合动作（Truck Left + Pan Right），但不要过度加载 Prompt |

---

## 三、景别系统

> 景别控制**观众与角色之间的距离**，不同景别传递的信息量和情绪强度差异很大。

### 3.1 景别分类表

| 景别类型 | 英文 | 画面范围 | 应用场景 | 情感表达 |
|----------|------|----------|----------|----------|
| **远景** | Long Shot / Extreme Wide Shot | 展示环境全貌、人物极小 | 交代地理背景、建立空间关系 | 宏大感、孤独感、渺小感 |
| **全景** | Full Shot / Wide Shot | 人物全身+周围环境 | 开场介绍角色位置、展示服装 | 客观呈现、信息量大 |
| **中景** | Medium Shot | 腰部以上 | 对话、动作展示、叙事推进 | 最常用叙事景别，平衡感 |
| **近景** | Medium Close-Up | 胸部以上 | 强调表情、情绪细节 | 增强情感连接 |
| **特写** | Close-Up | 头部或局部物体 | 眼神交流、关键物品、细微表情 | 最大情绪冲击力、戏剧张力 |
| **极特写** | Extreme Close-Up (ECU) | 眼睛/嘴唇/手指等极小范围 | 极致强调某个细节 | 极度紧张、象征意义 |

### 3.2 景别使用规则

**推荐序列**：
- ✅ **开场/情绪递进**：远景 → 中景 → 近景 → 特写（逐步拉近）
- ✅ **结尾/情绪释放**：特写 → 近景 → 中景 → 远景（逐渐留白）
- ❌ 不要连续使用同一种景别（单调乏味）
- ❌ 避免跳跃过大（特写直切远景 = 突兀断裂）

### 3.3 Prompt 中的景别关键词

```
extreme wide shot / establishing shot    （大远景/建立镜头）
full shot / wide shot                    （全景）
medium shot                              （中景）
medium close-up                          （近景）
close-up                                 （特写）
extreme close-up / ECU                   （极特写）
```

---

## 四、机位角度与视角心理学

> 角度影响观众对角色的**心理判断**，传递不同态度。

### 4.1 角度分类表

| 角度类型 | 英文 | 使用场景 | 心理效果 |
|----------|------|----------|----------|
| **平视** | Eye-level shot | 常规叙事、日常对话（**主视角**） | 平等、客观、真实感，建立信任 |
| **仰视** | Low angle | 英雄出场、展示力量/权威 | 高大、强大、威慑力、英雄气质 |
| **俯视** | High angle / Bird's eye view | 表现弱势、无助、被审视 | 渺小、脆弱、被动、受压迫 |
| **主观视角** | POV / First-person | 沉浸式体验、代入感 | 直接参与、身临其境 |
| **倾斜角度** | Dutch angle | 紧张场景、不安氛围 | 不稳定感、焦虑感、危险预兆 |
| **鸟瞰视角** | God's eye view | 全局展示、上帝视角 | 超然、全知、疏离感 |

### 4.2 角度使用规则

1. **以平视为主**作为基础拍摄角度
2. **在情绪转折点**使用俯视或仰视增强表现力
3. **不宜过于频繁变化**角度（造成眩晕）
4. **角度 + 景别配合**可暗示权力关系变化

---

## 五、光影氛围词汇库（27种布光方案）

> 来源：[Atlabs.ai 27 Cinematic Lighting Looks](https://www.atlabs.ai/blog/27-cinematic-lighting-looks-ai-prompts-guide)
>
> **核心理念**：从光线开始设计，情绪自然随之而来。（Start with the lighting. The emotion follows.）

### 5.1 自然与氛围光照（1-5）

| # | 名称 | 中文说明 | 色彩特征 | 适用场景 | Prompt 关键词 |
|---|------|----------|----------|----------|---------------|
| 1 | **Golden Hour** | 黄金时刻 | 金色、橙色、柔和黄色 | 浪漫、温暖、旅行内容 | `Golden Hour lighting, sun-drenched, warm orange haze, long shadows` |
| 2 | **Blue Hour** | 蓝色时刻 | 深蓝、冷青色、淡紫色 | 冷静、忧郁、悬疑 | `Blue Hour, twilight, cold tones, deep blue sky, melancholic` |
| 3 | **High Key** | 高调布光 | 白色、浅粉彩、通透灰色 | 广告、喜剧、清新 | `High key lighting, bright airy, low contrast, clean white tones` |
| 4 | **Silhouette** | 剪影 | 纯黑前景 vs 明亮背景 | 神秘、戏剧性开场 | `Silhouette style, backlit, high contrast, pitch black foreground` |
| 5 | **Nordic Noir** | 北欧黑色电影风 | 去饱和蓝灰、暗绿色调 | 犯罪剧、荒凉寒冷 | `Nordic noir, desaturated blue-grey, overcast, bleak atmosphere` |

### 5.2 经典胶片与复古风格（6-11）

| # | 名称 | 中文说明 | 色彩特征 | 适用场景 | Prompt 关键词 |
|---|------|----------|----------|----------|---------------|
| 6 | **Kodachrome** | 柯达克罗姆 | 浓郁红黄、深蓝色 | 怀旧、50-70年代国家地理 | `Kodachrome film, vintage, warm tones, archival footage` |
| 7 | **Technicolor** | 特艺彩色 | 超饱和原色(红/绿/蓝) | 老式好莱坞、《绿野仙踪》 | `Technicolor, 3-strip color, hyper-saturated, vintage cinema` |
| 8 | **Sepia** | 棕褐单色 | 棕色、棕褐色、米白色 | 西部片、早期摄影 | `Sepia color grading, monochromatic brown, Western aesthetic` |
| 9 | **Film Noir** | 黑色电影 | 纯黑白灰色系、高对比 | 40年代侦探片、戏剧性阴影 | `Film Noir, black and white, chiaroscuro, dramatic shadows` |
| 10 | **CineStill 800T** | 现代夜景胶片 | 钨丝灯平衡+红色高光 | 都市夜景、文艺青年 | `CineStill 800T, red halation, tungsten balance, cinematic night` |
| 11 | **Bleach Bypass** | 漂白旁路 | 金属灰、褪色色彩、深黑 | 战争片、《拯救大兵瑞恩》 | `Bleach Bypass, silver retention, desaturated, high contrast, gritty` |

### 5.3 风格化与美学流派（12-17）

| # | 名称 | 中文说明 | 色彩特征 | 适用场景 | Prompt 关键词 |
|---|------|----------|----------|----------|---------------|
| 12 | **Teal & Orange** | 青橙色调 | 青色阴影 + 橙色高光 | 好莱坞大片标配 | `Teal and orange color grading, blockbuster, cyan and orange` |
| 13 | **Wes Anderson** | 韦斯·安德森 | 粉彩粉红、薄荷绿、柔黄色 | 古怪精致、对称构图 | `Pastel palette, Wes Anderson style, flat lighting, symmetrical` |
| 14 | **Solarpunk** | 太阳朋克 | 明亮白、茂盛绿、柔金色阳光 | 乐观未来主义 | `Solarpunk, eco-futurism, lush greenery, bright sunlight` |
| 15 | **Cyberpunk** | 赛博朋克 | 霓虹粉/洋红/青色 + 深黑 | 未来都市、霓虹灯笼罩 | `Cyberpunk, neon lighting, magenta and cyan, wet texture` |
| 16 | **Steampunk** | 蒸汽朋克 | 黄铜/铜色、棕色皮革、蒸汽灰 | 维多利亚复古未来主义 | `Steampunk, brass and copper, Victorian industrial, golden steam` |
| 17 | **Matrix Green** | 矩阵绿 | 单色电脑绿色渐变 | 虚拟现实、反乌托邦 | `Green tint, fluorescent green, Matrix aesthetic, dystopian` |

### 5.4 低光与戏剧性照明（18-21）

| # | 名称 | 中文说明 | 色彩特征 | 适用场景 | Prompt 关键词 |
|---|------|----------|----------|----------|---------------|
| 18 | **Candlelight** | 烛光 | 暖橙深黑（明暗对照法） | 温馨亲密或诡异恐怖 | `Candlelight, fire lighting, warm glow, deep shadows, chiaroscuro` |
| 19 | **Sodium Vapor** | 钠蒸汽灯 | 病态橙、黄褐、黑色阴影 | 粗粝城市工业夜景 | `Sodium vapor lighting, orange streetlights, urban night, industrial` |
| 20 | **Bioluminescence** | 生物发光 | 发光蓝/电光绿 + 深暗背景 | 奇幻、《阿凡达》 | `Bioluminescence, glowing plants, deep blue night, magical atmosphere` |
| 21 | **Ultraviolet** | 紫外线/黑光灯 | 深紫背景 + 发光霓虹涂料 | 抽象视觉、超现实 | `Ultraviolet light, blacklight, fluorescent glow, deep purple` |

### 5.5 实验性与特效外观（22-27）

| # | 名称 | 中文说明 | 色彩特征 | 适用场景 | Prompt 关键词 |
|---|------|----------|----------|----------|---------------|
| 22 | **Infrared/Aerochrome** | 红外摄影 | 泡泡糖粉、白、深蓝天 | 梦幻超现实 | `Infrared photography, Kodak Aerochrome, pink trees, surreal colors` |
| 23 | **Thermal Imaging** | 热成像 | 彩虹渐变(红=热/蓝=冷) | 《铁血战士》视角 | `Thermal imaging, heat map, infrared camera, predator vision` |
| 24 | **Night Vision** | 夜视仪 | 单色亮绿+黑色 | 监控画面、军事题材 | `CCTV footage, night vision, monochromatic green, grainy, surveillance` |
| 25 | **Duotone** | 双色调 | 自定义双色(如红/蓝) | 波普艺术 | `Duotone, double color exposure, Red and Blue palette, pop art` |
| 26 | **Cross-Processed** | 交叉冲印 | 高对比+偏绿或偏黄 | LOMO风格 | `Cross-processed, color shift, unnatural colors, lomo style` |
| 27 | **Selective Color** | 选择性上色 | 灰度 + 一种鲜艳色 | 《罪恶之城》 | `Selective color, monochrome with red splash, Sin City style` |

### 5.6 光影描述补充词汇

| 类别 | 词汇示例 |
|------|----------|
| **光线方向** | backlighting（逆光）/ sidelighting（侧光）/ toplighting（顶光）/ underlighting（底光） |
| **光线质量** | soft diffused light（柔光）/ harsh direct light（硬光）/ volumetric light（体积光/丁达尔效应） |
| **光线效果** | lens flare（镜头光晕）/ anamorphic flare（变形镜头眩光）/ god rays（上帝之光）/ rim light（轮廓光） |
| **时间相关** | morning glow（晨光）/ golden hour（黄金时刻）/ magic hour（魔幻时刻）/ blue hour（蓝色时刻）/ twilight（暮光） |

---

## 六、转场技巧

### 6.1 AI 视频常用转场方式

| 转场类型 | 英文 | 描述 | Prompt 写法 |
|----------|------|------|------------|
| **匹配剪辑** | Match Cut | 利用形状/颜色/动作相似性衔接 | `transition matching shape from [A] to [B]` |
| **溶解过渡** | Dissolve / Crossfade | 画面 A 渐隐，画面 B 渐现 | `smooth dissolve transition, crossfade effect` |
| **划像转场** | Wipe | 画面滑动切换 | `wipe transition from left/right, sliding reveal` |
| **穿越转场** | Fly-through | 穿过物体进入新场景 | `camera flies through door/window into new scene` |
| **缩放转场** | Zoom Transition | 缩放到一个点再展开为新场景 | `zoom in to detail then zoom out revealing new location` |
| **模糊转场** | Blur Transition | 快速甩镜模糊后重新聚焦 | `whip pan with motion blur resolving into new scene` |
| **遮罩转场** | Mask Transition | 通过前景物体遮挡切换 | `revealed from behind object, wipe using foreground element` |

### 6.2 转场写作要点

- AI 视频生成中，**一个片段 = 一个连续镜头**，无法实现真正的剪辑切换
- 转场通常需要**后期合成**或在支持首尾帧的模式中使用
- Seedance 的**首尾帧模式**最适合做转场：明确指定起始帧、结束帧、保持不变的元素

---

## 七、多平台适配策略

### 7.1 平台特性对比矩阵

| 特性 | **Runway Gen-4** | **Sora 2** | **Kling (可灵)** | **Veo 3** | **Seedance 2.0** |
|------|------------------|------------|------------------|----------|-----------------|
| **核心优势** | 风格化/抽象、界面控制强 | 电影级画质、物理准确 | 物理模拟、中式内容 | 原生音频、自然表情 | 流畅动作、中文友好 |
| **最适合场景** | 艺术创作、实验影像 | 长镜头电影感叙事 | 自然/时尚/动作 | 对话剧情片 | 快节奏短视频 |
| **独特功能** | Motion Brush、图生视频 | 时间维度理解好 | 复杂物理效果 | 音频联合生成 | 多模态参考、音频驱动 |
| **语言偏好** | 英文更稳定 | 英文为主 | 中文优秀 | 英文为主 | **中文原生支持** |
| **时长上限** | 10 秒 | 60 秒 | 10 秒 | ~8 秒 | 10 秒 |
| **主要限制** | 角色跨段一致性弱 | 文字/手部长片段问题 | 需详细主体描述 | 平台较新生态少 | 避免重复描述参考图内容 |

### 7.2 各平台专属技巧

#### Runway Gen-4

```markdown
- 必须明确指定运动量级："subtle camera drift"、"slow gentle movement"
- 图生视频比纯文本生成更可控
- 强项：风格化内容（Impressionist painting、vintage 1970s film stock、anime style）
- 文本生成的角色一致性有限，需用图生视频+参考图
```

#### Sora 2

```markdown
- 使用电影制作术语："Shot on 35mm film, warm grain"
- 详细描述物理属性和光影
- 聚焦单一主要动作，避免多事件同时发生
- 明确描述时间变化过程（timelapse）
- ⚠️ 避免：手部特写为中心的提示、长片段(>10秒)、精确文字渲染
```

#### Kling (可灵)

```markdown
- 擅长水、布料、头发、火焰等复杂物理效果
- 中国文化内容表现优异（中式建筑、亚洲街景）
- 详细描述物理特性："Heavy rain falling in visible sheets"
- 最适用：自然景观、时尚面料、动作序列
```

#### Veo 3

```markdown
- 自带对话音频生成功能
- 可直接在 Prompt 中写对话内容
- 人物表情最自然
- 示例：
  "Two people sitting across from each other at a dimly lit restaurant table.
   The woman says 'I've been waiting for you' with a relieved smile."
```

#### Seedance 2.0

```markdown
- 输入职责分工：文字=怎么动，图片=画什么，视频=运动风格，音频=节奏速度
- ⚠️ 黄金法则：有参考图时，文字只描述动态信息，不重复图片已有内容
- 五大模式：文生视频 / 图生视频 / 首尾帧 / 参考生视频 / 音频驱动
- 推荐工作流：先测 5s 720p 低成本迭代 → 确认后出高清版
```

### 7.3 多片段一致性策略

| 策略 | 方法 |
|------|------|
| **角色一致性** | 使用图生视频功能，先生成参考图像再作为起始帧 |
| **色彩一致性** | 统一使用相同的色彩/光线语言（如 "Golden hour, warm tones, slight underexposure"）|
| **风格锚定** | 选择 2-3 个风格描述符并在所有 Prompt 中重复（如 "16mm film grain, cinematic, desaturated"）|
| **提示日志维护** | 记录所有产生良好输出的 Prompt，新片段基于已有成功 Prompt 修改 |

---

## 八、场景化 Prompt 模板

### 8.1 人物出场/登场

```
[Character description], making a dramatic entrance through [location],
[specific action], [lighting], [camera movement],
cinematic quality, [mood/atmosphere]

示例：
A young Chinese woman with long black hair flowing in the wind,
making a dramatic entrance through a grand ornate doorway,
pushing open heavy wooden doors with both hands, golden hour sunlight
streaming behind her creating silhouette, slow dolly forward,
cinematic quality, epic atmosphere, 4K
```

### 8.2 情感对峙/冲突

```
Two characters facing each other in [location],
[character A] showing [emotion], [character B] showing [emotion],
tension in the air, [lighting style], medium two-shot,
slight handheld camera movement, dramatic atmosphere

示例：
Two people facing each other in a rain-soaked alley at night,
woman showing anger with clenched fists, man showing regret looking down,
tension in the air, cold blue neon light from signage above,
medium two-shot, slight handheld camera movement,
dramatic atmosphere, shallow depth of field
```

### 8.3 环境空镜/转场

```
Establishing shot of [location] at [time of day],
[weather/atmosphere details], [specific visual elements],
slow [camera movement], [color grading style], no people,
ambient sound design, cinematic wide angle

示例：
Establishing shot of an ancient Chinese mountain temple complex at dawn,
thin mist rolling between pagodas, cherry blossoms drifting in wind,
slow drone ascent revealing valley below, warm golden color grading,
no people, ethereal atmosphere, cinematic wide angle
```

### 8.4 追逐/动作场景

```
[Character] running through [location], [running style],
[obstacles/environment interaction], dynamic camera following from [angle],
fast-paced editing feel, motion blur on background, urgent atmosphere

示例：
A young man sprinting through a crowded night market,
desperate running style, dodging between stalls and pedestrians,
dynamic low-angle tracking camera from behind, fast-paced feel,
motion blur on neon signs and crowd, urgent atmosphere
```

### 8.5 回忆/闪回

```
Soft dreamy flashback sequence, [younger character] in [past location],
[nostalgic action], warm golden color grading, slight overexposure,
gentle lens flare, slow motion, ethereal atmosphere, vintage film quality

示例：
Soft dreamy flashback sequence, a little girl in grandmother's garden,
chasing butterflies among sunflowers, warm golden color grading,
slight overexposure, gentle lens flare, slow motion, ethereal atmosphere,
vintage Super 8 film quality, 24fps
```

### 8.6 产品展示类

```
Smooth 360-degree orbit shot around a [product name], [product description],
rotating slowly on a clean surface, [lighting setup], crisp shadows,
commercial product photography style, 4K

示例：
Smooth 360-degree orbit shot around a luxury perfume bottle,
crystal glass with gold cap reflecting light,
rotating slowly on a black mirror surface, soft box lighting,
crisp reflections, commercial product photography style, 4K
```

### 8.7 自然风光类

```
Aerial drone shot gliding over [landscape type], [time of day],
[key visual elements — mountains/trees/water], [weather/atmosphere],
[color tones], nature documentary style

示例：
Aerial drone shot gliding over snow-capped mountain peaks at sunrise,
first light hitting summits creating pink alpenglow, eagles soaring below,
clear crisp atmosphere, warm-to-cool color gradient transition,
nature documentary style, 4K resolution
```

---

## 九、最佳实践与避坑指南

### 9.1 通用禁忌清单

| 禁忌类型 | 说明 | 替代方案 |
|----------|------|----------|
| **负面描述** | ❌ "不要晃动"、"没有噪点" | ✅ "平稳稳定的镜头"、"清晰干净的画质" |
| **复合动作** | ❌ "走到门口，开门，走进去，关门" | ✅ 拆分为多个独立 Prompt |
| **时间连接词** | ❌ "然后"、"接下来"、"之后" | ✅ 每个 Prompt 描述独立的瞬间 |
| **真人姓名** | 具体名人姓名 | ✅ 用外貌特征描述代替 |
| **复杂对话/口型同步** | 特定词语的唇形同步 | ✅ 仅描述说话状态，不指定具体台词内容（除非平台支持音频）|
| **超长复杂动作** | 30 秒编排舞蹈等 | ✅ 保持动作简单简短，控制在 5-10 秒内 |
| **抽象形容词** | "动态"、"有趣"、"好的节奏" | ✅ 具体描述：头发随风飘动、脚步轻快地踏步 |
| **重复描述参考图** | 有图时重述图中内容 | ✅ 只描述图里没有的**动态信息** |

### 9.2 优化技巧速查

| # | 技巧 | 示例对比 |
|---|------|----------|
| 1 | **具体胜于抽象** | ❌ "美丽的女人" → ✅ "25岁，鹅蛋脸，柳叶眉，穿白色真丝衬衫" |
| 2 | **动词要有力** | ❌ "走" → ✅ "stride confidently" / "stumble forward" / "sprint desperately" |
| 3 | **光线是灵魂** | 始终描述光线方向和质感 |
| 4 | **参考真实电影** | 加入 `directed by [导演名] aesthetic` 快速定义风格 |
| 5 | **控制时长预期** | 5 秒 = 一个动作；10 秒可有动作 + 反应 |
| 6 | **镜头优先原则** | 在句首指定镜头类型（如 Tracking shot），帮助 AI 正确构建画面 |
| 7 | **迭代思维** | 将第一次生成视为测试，通过修改完善 |
| 8 | **单变量调试** | 每次只改一个变量，对比效果找最优组合 |

### 9.3 Seedance 2.0 专属避坑

| 坑 | 说明 | 解决方案 |
|----|------|----------|
| **重复劳动** | 用文字描述图片已有的内容 | 文字只管动态，不管静态 |
| **定位啰嗦** | 模式定位写了长篇大论 | 一句话足矣 |
| **词汇抽象** | "动态"、"有趣"、"好的节奏" | 改为具体动作描述 |
| **遗忘时长** | Prompt 是慢动作但设成 5 秒 | 时长与动作匹配 |
| **音画失衡** | 只传音频不写画面 | 必须告诉模型看什么 |

---

## 十、常用词汇速查表

### 10.1 镜头运动词汇

| 分类 | 词汇 |
|------|------|
| **推** | dolly in / push in / move forward / tracking in |
| **拉** | dolly out / pull out / move backward / zoom out |
| **摇（水平）** | pan left / pan right / horizontal sweep |
| **摇（垂直）** | tilt up / tilt down / vertical tilt |
| **移** | truck left / truck right / lateral slide |
| **跟** | tracking shot / follow shot / steadicam / handheld follow |
| **环绕** | orbit / arc shot / circle around / 360 spin |
| **升降** | crane up / crane down / pedestal up / pedestal down / jib arm |
| **航拍** | drone shot / aerial view / flyover / bird's eye view |
| **固定** | static shot / locked off / fixed camera / tripod |
| **手持** | handheld / documentary style / natural shake |
| **特殊** | whip pan / snap zoom / dutch angle / rack focus / focus pull |

### 10.2 景别词汇

| 中文 | 英文 | 缩写 |
|------|------|------|
| 大远景 | Extreme Long Shot / Establishing Shot | ELS |
| 远景 | Long Shot / Wide Shot | LS / WS |
| 全景 | Full Shot | FS |
| 中全景 | Medium Long Shot / Cowboy Shot | MLS |
| 中景 | Medium Shot | MS |
| 中近景 | Medium Close-Up | MCU |
| 近景 | Close-Up | CU |
| 极特写 | Extreme Close-Up | ECU |

### 10.3 速度与节奏词汇

| 类型 | 词汇 |
|------|------|
| **慢动作** | slow motion / 50% speed / 10% speed / time-lapse reverse / bullet time |
| **正常速度** | normal pace / steady rhythm / natural timing |
| **快节奏** | fast-paced / dynamic / energetic / rapid / urgent |
| **变速** | ramping speed / starts slow then accelerates / sudden burst of motion |
| **延时摄影** | timelapse / time-lapse / accelerated motion / compressed time |
| **定格/静止** | frozen moment / stillness / pause / held frame |

### 10.4 质感与风格词汇

| 分类 | 词汇 |
|------|------|
| **画质** | 4K / 8K / ultra HD / cinema grade / broadcast quality |
| **胶片感** | film grain / 35mm / 16mm / Kodak Portra / cinematic film look / analog texture |
| **景深** | shallow depth of field / bokeh / deep focus / sharp throughout / f/1.8 / background blur |
| **色调** | warm tones / cool tones / desaturated / vibrant / muted / pastel / monochrome |
| **导演风格** | Wes Anderson / Wong Kar-wai / Christopher Nolan / Denis Villeneuve / Ridley Scott aesthetic |
| **流派** | film noir / documentary / music video / commercial / indie film / arthouse |

### 10.5 运动质感词汇

| 类型 | 词汇 | 效果 |
|------|------|------|
| 平滑滑行 | smooth glide / fluid motion / silky / dreamy | 空灵梦幻 |
| 手持抖动 | organic jitter / documentary shake / breathing motion | 写实紧迫 |
| 机械精准 | mechanical precision / robotic smoothness | 机器人/人造物 |
| 动态模糊 | motion blur / speed lines / directional streak | 纯粹速度感 |
| 弹性运动 | bouncy / springy / elastic | 卡通/活力 |

### 10.6 音频提示词（Veo 3 等支持音频的平台）

| 类别 | 写法 | 示例 |
|------|------|------|
| **对话** | Character says: "台词" | `She says: "I've been waiting for you"` |
| **环境音** | 描述声场环境 | `Wind whistling... distant thunder, rain pattering` |
| **音乐** | 指示风格和进程 | `Upbeat electronic music building with the action` |
| **音效设计** | Foley 描述 | `Footsteps echoing on concrete, door creaking, fabric rustling` |

---

## 附录：推荐资源链接

| 资源 | 链接 | 说明 |
|------|------|------|
| Runway 官方提示词指南 | https://runwayml.com/resources/ai-video-prompting-guide | 92 个即用型 Prompt |
| Atlabs 38 种运镜指南 | https://www.atlabs.ai/blog/ultimate-guide-ai-camera-moves-prompts | 38 种完整运镜 Prompt |
| Atlabs 27 种光影方案 | https://www.atlabs.ai/blog/27-cinematic-lighting-looks-ai-prompts-guide | 27 种布光方案 |
| awesome-ai-video-prompts | https://github.com/geekjourneyx/awesome-ai-video-prompts | 多平台综合知识库 |
| MasterPrompting 视频指南 | https://masterprompting.net/blog/video-generation-prompts-sora-runway-kling | 三平台差异化对比 |
| Seedance 2.0 Prompt 指南 | https://seedance2pro.io/zh/blog/seedance-2-prompt-guide | 五大模式模板与工作流 |
| 550WAI Prompt 大全 | https://www.550wai.cn/blog/ai-video-prompt-engineering.html | 四大平台 50+ 模板 |
| AI Video Stack 运镜大全 | https://www.aivideostack.net/zh/tutorial/cameramovements | 运镜可视化演示 |

---

*本文档持续更新中。最后更新：2026-06-22*
