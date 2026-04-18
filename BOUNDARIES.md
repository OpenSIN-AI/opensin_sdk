# opensin_sdk Boundaries

## Role
`opensin_sdk` is a standalone SDK package surface for OpenSIN integrations.

Short version:

- **This repo = package/SDK surface**
- **Not this repo = sole owner of core runtime, product shell, or full control-plane behavior**

---

## Canonical Ownership

| Concern | Canonical Repo |
|---|---|
| Standalone SDK package surface | `opensin_sdk` |
| Free/open runtime core | `OpenSIN` |
| Product web app | `OpenSIN-WebApp` |
| Internal ops control plane | `ai-agent-system` |
| Official documentation | `OpenSIN-documentation` |

---

## Hard rules

- Keep ownership claims scoped to the package/SDK surface.
- Do not imply this repo alone owns the whole OpenSIN SDK story if core or app/control-plane repos also define SDK surfaces.
- Do not redefine product, ops, docs, or runtime canon from here.
