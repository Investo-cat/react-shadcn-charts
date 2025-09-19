import "@testing-library/jest-dom";

// Mock ResizeObserver since jsdom doesn't support it
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

(globalThis as any).ResizeObserver = ResizeObserver;

if (!globalThis.requestAnimationFrame) {
  (globalThis as any).requestAnimationFrame = (cb: FrameRequestCallback) =>
    setTimeout(cb, 0);
  (globalThis as any).cancelAnimationFrame = (id: any) => clearTimeout(id);
}
