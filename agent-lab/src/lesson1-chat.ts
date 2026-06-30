/**
 * 第 1 课：调通 LLM —— 给 Agent 装上「大脑」
 *
 * 目标：
 *   1. 用原生 fetch 调用「OpenAI 兼容」的 chat completions 接口
 *   2. 理解 messages 数组结构 和 role（system / user / assistant）
 *   3. 这是后面一切的基础：Agent 的「思考」全靠这个接口
 *
 * 关键认知：DeepSeek / 智谱 / 通义 / 本地 Ollama 都是 OpenAI 兼容接口，
 *          切换平台只需改 .env 里的 3 个配置，业务代码完全不用动。
 *
 * 运行：
 *   1. 在 agent-lab 目录执行 `pnpm install`
 *   2. 复制 .env.example 为 .env 并填入配置
 *   3. 执行 `pnpm lesson1`
 */

import { readFileSync } from "node:fs";

// --- 简易读取 .env（不引第三方库，保持纯粹） ---
function loadEnv() {
  try {
    const raw = readFileSync(new URL("../.env", import.meta.url), "utf-8");
    for (const line of raw.split("\n")) {
      if (line.trim().startsWith("#")) continue;
      const m = line.match(/^\s*([\w.-]+)\s*=\s*(.*)\s*$/);
      if (m) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  } catch {
    // 没有 .env 文件就忽略，依赖系统环境变量
  }
}
loadEnv();

// --- 三个配置：换平台只改这里（.env 里） ---
const API_KEY = process.env.LLM_API_KEY ?? "";
const BASE_URL = process.env.LLM_BASE_URL ?? "https://api.deepseek.com";
const MODEL = process.env.LLM_MODEL ?? "deepseek-chat";

if (!API_KEY) {
  console.error("缺少 LLM_API_KEY，请先在 .env 里配置（本地 Ollama 可随便填如 ollama）");
  process.exit(1);
}
// 占位符 / 非 ASCII 校验：HTTP 头只允许 ASCII，含中文会让 fetch 直接崩
if (API_KEY.includes("你的") || /[^\x00-\x7F]/.test(API_KEY)) {
  console.error("LLM_API_KEY 看起来还是占位符或含中文字符，请换成真实的 key");
  process.exit(1);
}

// messages 是对话历史。每条消息都有一个 role：
//   - system:    系统设定，定义 AI 的角色和规则
//   - user:      用户说的话
//   - assistant: AI 的回复（多轮对话时会把它也加回来）
const messages = [
  { role: "system", content: "你是一个乐于助人的助手，回答简洁。" },
  { role: "user", content: "你好，请用一句话介绍一下你自己。" },
];

async function main() {
  const res = await fetch(`${BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      messages,
      stream: false,
    }),
  });

  if (!res.ok) {
    console.error("请求失败：", res.status, await res.text());
    return;
  }

  const data = await res.json();
  // 模型的回复藏在 choices[0].message.content
  const reply = data.choices[0].message.content;

  console.log(`===== 模型回复（${MODEL}）=====`);
  console.log(reply);
  console.log("====================");
  console.log("\n本次用量：", data.usage);
}

main();
