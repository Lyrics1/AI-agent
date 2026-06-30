# Agent 实战学习记录

> 从零手写一个 Agent 的全程学习笔记。每节课记录：**目标 → 原理 → 动手 → 收获 → 给分享用的金句**。
> 配套代码在仓库根目录的 `agent-lab/`。

## 教学路线总览

| 课 | 目标 | 代码文件 | 状态 |
| --- | --- | --- | --- |
| 第 1 课 | 调通 LLM（大脑），理解 messages | `lesson1-chat.ts` | 进行中 |
| 第 2 课 | Function Calling（让模型决定调工具） | `lesson2-tool.ts` | 待开始 |
| 第 3 课 | Agent Loop（核心！循环干活） | `lesson3-agent.ts` | 待开始 |
| 第 4 课 | 多工具 → 命令行文件助手 Agent | `lesson4-file-agent.ts` | 待开始 |
| 第 5 课 | 工程化增强 + 分享总结 | 文档 | 待开始 |

技术栈：**TypeScript + Node.js + 原生 fetch**，入门阶段刻意不用任何 Agent 框架，目的是看清本质。

---

## 第 1 课：调通 LLM —— 给 Agent 装上「大脑」

### 目标

- 用原生 `fetch` 调通 LLM 的 chat completions 接口
- 理解 `messages` 数组结构和 `role` 的含义
- 建立认知：**Agent 的「思考」本质就是一次次调用这个接口**

### 原理

一次最基础的 LLM 调用，就是把一个 `messages` 数组发过去，拿回一条回复。

```
你的程序  ──(messages 数组)──>  LLM 接口  ──(一条回复)──>  你的程序
```

`messages` 是对话历史，每条消息有一个 `role`：

| role | 含义 | 谁产生的 |
| --- | --- | --- |
| `system` | 系统设定，定义 AI 的角色、规则 | 开发者 |
| `user` | 用户说的话 | 用户 |
| `assistant` | AI 的回复 | 模型 |
| `tool` | 工具执行结果（第 2 课会用到） | 你的程序 |

关键认知：**LLM 接口是「无状态」的**。它不记得上一次说过什么，所谓「多轮对话」，其实是你每次都把完整历史 `messages` 重新发过去。这一点是后面 Agent Loop 的基础。

### 动手

代码见 `agent-lab/src/lesson1-chat.ts`，核心就三步：

1. 准备 `messages` 数组
2. `fetch` POST 到接口，带上 `Authorization` 头
3. 从 `data.choices[0].message.content` 取回复

运行步骤：

```bash
cd agent-lab
pnpm install
cp .env.example .env      # 然后把 .env 里的 key 换成你的
pnpm lesson1
```

预期输出：模型用一句话介绍自己，并打印本次 token 用量。

### 收获 / 易踩的坑

- （跑通后在这里补充你的笔记）

### 给分享用的金句

> LLM 接口是无状态的——模型并不"记得"你，是你的程序每次都把完整对话历史重新喂给它。所谓"记忆"，是工程做出来的，不是模型自带的。

---
