# 最小 Agent Demo · 纯前端版

> 用 HTML + 原生 JS 实现的最小 Agent，Mock 大模型，零依赖，**双击 index.html 即可运行**。
>
> 目的：把《Agent 入门学习笔记》第七章「ReAct 循环」**可视化**，让你亲眼看到 `截断 → 解析 → 执行 → 回灌` 的每一步。

## 怎么跑

```bash
# 方式一：直接双击
open agent-lab/web-demo/index.html

# 方式二：终端打开
open agent-lab/web-demo/index.html
```

不需要 npm install，不需要 server，不需要 API Key。

## 你会看到什么

1. 顶部输入框输入问题（或点示例标签）
2. 下方按**轮次**展示：
   - 每一轮 LLM「续写」出的 `Thought / Action / Action Input`
   - 程序执行工具后填回的 `Observation`
   - 最后一轮的 `Final Answer`（绿色框）
3. 每一轮可展开 `查看本轮喂给 LLM 的完整 prompt` —— **亲眼看到「滚雪球」的历史**

## 试试这些问题

| 问题 | 体现什么 |
|------|----------|
| `北京今天天气怎么样？下雨就提醒我带伞` | 单工具 + 条件判断 |
| `现在几点了` | 单工具最简单流程 |
| `上海现在天气如何，顺便告诉我现在几点` | **多步规划**，连续调用两个工具 |

## 代码结构（全在一个 HTML 文件里，约 200 行）

| 模块 | 对应学习笔记的概念 |
|------|------|
| `tools = { get_weather, get_time }` | **Tool use**（工具/手脚） |
| `mockLLM(prompt)` | **LLM 大脑**，模拟自回归续写 |
| `parse(text)` | 把 LLM 文本输出解析成结构化 Action |
| `runAgent(...)` 中的 for 循环 | **ReAct 循环** |
| `history += llmOut + Observation` | **短期记忆 / scratchpad** 滚雪球 |
| Mock LLM 中遇到 Action Input 就 return | 模拟 **stop token 截断** |

## 与真实 LLM 的唯一差别

- 真实场景：把 `mockLLM(prompt)` 换成 `fetch("/openai-api", { stop: ["\nObservation:"] })`
- 其他逻辑（prompt 拼接、解析、工具执行、循环回灌）**100% 一致**

也就是说，这份代码就是工业级 Agent 的「骨架最小版」。
