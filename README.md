# ⚔️ KNIGHT-UI — Mark_3

## The Terraform Kingdom

Mark_3 is the full KNIGHT learning experience: dark-fantasy medieval strategy + professional Terraform and DevSecOps documentation.

### Coverage

- Terraform: fmt, init, validate, plan, apply, destroy
- Security: TFLint, tfsec, Checkov, Terrascan
- Policy: Open Policy Agent (OPA), Conftest
- Engineering: terraform-docs, pre-commit
- Orchestration: Terragrunt

### Every chamber

Each command/tool has its own medieval identity and a different interactive trial. The player can:

1. Learn what it is.
2. Learn when it is used.
3. Inspect command variations.
4. Drag or select a variation into the chamber.
5. Complete a unique game mechanic.
6. Only after completion see whether the selection was correct.
7. If wrong, see the correct variation.
8. Read the backend explanation.
9. See representative output.

### Global views

- Kingdom home
- Overall Terraform + DevSecOps workflow
- Command/tool comparison matrix

### Command variations

The chambers expose useful CLI variations such as -check, -upgrade, -json, -out, -destroy, -refresh-only, --framework, --policy, and run --all, then turn selection into gameplay.

### Logo

The UI looks for the user's existing Knight logo at public/knight-logo.png. The current connected repository does not contain that image asset, so a temporary shield fallback is rendered until the real logo file is added.

### Routes

The home page is /. Individual chambers are available under /lab/<tool>.

### Sources

Terraform command semantics are aligned with official Terraform CLI documentation. OPA command behavior is aligned with official OPA CLI documentation. Security/policy CLI examples are based on the respective official tool documentation.

### Stack

Next.js + TypeScript + lucide-react + CSS, Vercel-ready.
