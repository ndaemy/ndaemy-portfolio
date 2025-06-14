export async function copyToClipboard(
  text: string,
  { onCopy, onError }: { onCopy?: () => void; onError?: () => void } = {},
) {
  try {
    await navigator.clipboard.writeText(text);
    onCopy?.();
  } catch (e) {
    console.error(e);
    onError?.();
  }
}
