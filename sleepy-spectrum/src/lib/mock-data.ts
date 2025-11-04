type ConvertedResult = {
  id: string;
  name: string;
  converted: string;
  tokens: number;
  cost: number;
  date: string;
};
export async function mockConvertFile(file: File): Promise<ConvertedResult> {
  const name = file.name || "unknown-file";
  let text = "";
  try {
    const raw = await file.text();
    text = raw.slice(0, 2000);
  } catch (err) {
    text = "(binary or unreadable file)";
  }

  const converted =
    `# Converted: ${name}\n\n` +
    (text ? `> Preview of original file:\n\n${text}\n\n` : "") +
    `---\nConverted markdown content (mock).`;
  const tokens = Math.max(50, Math.round(converted.length / 4));
  const cost = Number((tokens * 0.000014).toFixed(6));
  await new Promise((res) => setTimeout(res, 600 + Math.random() * 800));

  return {
    id: String(Date.now()) + "-" + Math.random().toString(36).slice(2, 8),
    name,
    converted,
    tokens,
    cost,
    date: new Date().toISOString(),
  };
}
export const mockHistory: ConvertedResult[] = [];
