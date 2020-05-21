export function updateTrace(trace: number[], value: number) {
  const last = trace[trace.length - 1];

  if (last !== value) {
    trace.push(value);
  }

  return trace;
}
