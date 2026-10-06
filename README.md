# ⚔️ KNIGHT-UI

> Interactive Terraform & DevSecOps learning experience powered by Next.js.

## 🎯 Purpose

KNIGHT-UI is the frontend companion to the KNIGHT Infrastructure-as-Code demonstration. It turns Terraform and DevSecOps workflows into an interactive, game-style learning experience.

## 🧭 Learning Path

`terraform fmt` → `terraform init` → `terraform validate` → Security Scanners → Policy-as-Code → `terraform plan` → `terraform apply`

## 🛠️ Stack

- Next.js
- React
- TypeScript
- CSS
- Lucide React
- Vercel-ready deployment

## 🌿 Branch Strategy

| Branch | Purpose |
|---|---|
| `main` | Project documentation and stable baseline |
| `Mark_1` | First working KNIGHT Terraform Quest application |

## 🔐 Security Principle

The browser UI simulates Terraform execution for learning purposes. Production Terraform or AWS commands should run in controlled CI/CD runners with least-privilege credentials, approval gates, and destructive-operation safeguards.

## 🚀 Local Development

After checking out `Mark_1`:

```bash
npm install
npm run dev
```

## ☁️ Deployment

The application is designed for deployment on Vercel using the Next.js framework preset.

---

**KNIGHT-UI — Learn Infrastructure by doing. ⚔️**