# Contributing

## Boundary Rules

Before adding an SDK abstraction or top-level claim, answer:

1. Is this package-local SDK surface, or a broader platform/SDK ownership claim?
2. Does another OpenSIN repo already own the canonical source of truth?

### Put it in `opensin_sdk` if:
- it improves the standalone SDK package surface
- it clarifies package-local SDK usage and integration

### Do NOT put it in `opensin_sdk` if:
- it claims product or control-plane ownership
- it implies this repo alone owns all OpenSIN SDK surfaces
