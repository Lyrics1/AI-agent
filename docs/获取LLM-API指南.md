# 获取 LLM API 指南（零成本 / 低成本起步）

> 没有 LLM API 也能开始学 Agent。下面三种方案，从最省事到最自由排序。
> 关键点：以下平台基本都是 **OpenAI 兼容接口**，代码只需更换 `baseURL` 和 `apiKey` 即可互相切换。

---

## 方案一：用云端免费 / 低价额度（推荐新手起步）

| 平台 | 免费情况 | 备注 |
| --- | --- | --- |
| **DeepSeek** | 价格极低（充 1 元能调很多次），当前主力为 V4 | 国内直连、无需翻墙、OpenAI 兼容，**首选** |
| **智谱 GLM** | 有完全免费模型 `glm-4-flash-250414` | 国内直连，OpenAI 兼容 |
| **通义千问** | 新用户有免费 token 额度 | 阿里云百炼平台 |
| **硅基流动 SiliconFlow** | 注册送额度，聚合多种开源模型 | 一个 key 调多种模型 |

**操作步骤：**

1. 去对应平台官网注册并实名
2. 进入控制台 → 创建 API Key
3. 复制 Key 备用（注意保密，不要提交到 git）

**最省心组合：** 智谱 `glm-4-flash-250414`（免费）+ 备一点 DeepSeek 余额。

> 注意：智谱原来的裸名 `glm-4-flash` 已升级为带日期版本号 `glm-4-flash-250414`，
> 用旧名调用可能报「模型不存在」。免费档另有更快的 `glm-4-flashx-250414`。

### 官网与注册入口

| 平台 | 注册 / 控制台 | 文档 |
| --- | --- | --- |
| DeepSeek | `https://platform.deepseek.com` | `https://api-docs.deepseek.com` |
| 智谱 GLM | `https://bigmodel.cn`（或 `https://z.ai`） | `https://docs.bigmodel.cn` |
| 硅基流动 | `https://siliconflow.cn` | `https://docs.siliconflow.cn` |
| 通义（百炼） | `https://bailian.console.aliyun.com` | 阿里云百炼文档 |
| Ollama（本地） | `https://ollama.com` | `https://ollama.com/library` |

### 常用接入信息（OpenAI 兼容）

| 平台 | baseURL | 示例模型 |
| --- | --- | --- |
| DeepSeek | `https://api.deepseek.com` | `deepseek-chat`（指向 V4 非思考模式）、`deepseek-reasoner`（思考模式） |
| 智谱 GLM | `https://open.bigmodel.cn/api/paas/v4` | `glm-4-flash-250414`（免费）、`glm-4.5` |
| 硅基流动 | `https://api.siliconflow.cn/v1` | 多种开源模型 |
| 通义（百炼） | `https://dashscope.aliyuncs.com/compatible-mode/v1` | `qwen-plus` 等 |

> 数据更新于 2026-06。模型名和价格变化较快，调用前以各平台「模型列表 / 文档」页面为准。

---

## 方案二：本地跑模型（零成本、无需联网、最自由）

适合不想花钱、电脑配置还行（建议 16G 内存以上）的情况。

1. 安装 **[Ollama](https://ollama.com)**（Mac 一键安装）
2. 终端运行：

   ```bash
   ollama run qwen2.5:7b
   # 或 ollama run llama3.1:8b
   ```

3. Ollama 会在本地 `http://localhost:11434` 启动一个 **OpenAI 兼容服务**

接入信息：

| 项 | 值 |
| --- | --- |
| baseURL | `http://localhost:11434/v1` |
| apiKey | 任意字符串（如 `ollama`，本地不校验） |
| 模型 | `qwen2.5:7b` / `llama3.1:8b` 等 |

优点：完全免费、断网可用、随便折腾不怕调爆余额。
缺点：小模型能力弱一些，但**学原理足够了**。

---

## 方案三：白嫖网关 / 中转（不推荐新手）

各种 OpenAI 兼容中转站存在，但稳定性和安全性参差不齐，容易踩坑或泄露 Key，**新手不建议**。

---

## 推荐起步路径

1. 先用 **Ollama 本地跑 `qwen2.5:7b`** —— 零成本、随便折腾、不怕调爆余额
2. 同时注册 **智谱**，用免费的 `glm-4-flash` 做对比 —— 体验真正云端大模型的工具调用能力
3. 等阶段 2 想要更强效果，再充 1 元 **DeepSeek**

三者均为 OpenAI 兼容格式，**代码完全复用，只换配置**。

---

## 安全提醒

- API Key 不要硬编码进代码，用环境变量（如 `.env` + `process.env`）
- `.env` 加入 `.gitignore`，不要提交到仓库
