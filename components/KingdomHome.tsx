"use client";

import Link from "next/link";
import { Castle, Crown, ScrollText, Shield, Swords, Hammer, Map, Sparkles } from "lucide-react";

const commands = [
  { slug: "fmt", title: "The Blacksmith's Forge", command: "terraform fmt", icon: Hammer, lore: "Forge your HCL into the kingdom's standard form.", kind: "Sort the forging steps" },
  { slug: "init", title: "The Castle Gate", command: "terraform init", icon: Castle, lore: "Prepare the realm, providers, backend and modules.", kind: "Assemble the gate" },
  { slug: "validate", title: "The Royal Scribe", command: "terraform validate", icon: ScrollText, lore: "Prove that the configuration is structurally sound.", kind: "Inspect the scroll" },
  { slug: "plan", title: "The War Table", command: "terraform plan", icon: Map, lore: "Read the battle plan before a single resource moves.", kind: "Place the change runes" },
  { slug: "apply", title: "The Royal Decree", command: "terraform apply", icon: Crown, lore: "Execute an approved plan and build the kingdom.", kind: "Seal the decree" },
];

export default function KingdomHome() {
  return <main className="kingdom-shell">
    <header className="topbar">
      <Link href="/" className="brand-mark"><Shield size={22}/><span>KNIGHT</span></Link>
      <div className="topbar-note">THE TERRAFORM KINGDOM · DEVSECOPS ACADEMY</div>
      <div className="rank-chip"><Crown size={16}/> Apprentice Knight</div>
    </header>
    <section className="hero-castle">
      <div className="hero-copy">
        <div className="eyebrow"><Sparkles size={14}/> DARK FANTASY INFRASTRUCTURE ACADEMY</div>
        <h1>The Kingdom of <span>KNIGHT</span></h1>
        <p>Master Terraform by entering each chamber, understanding the command, and completing a hands-on trial. No multiple-choice quizzes. <strong>Learn. Place. Execute.</strong></p>
        <div className="hero-actions"><a href="#kingdom-map" className="royal-button">Enter the Kingdom <Swords size={17}/></a><a href="#how-it-works" className="ghost-button">Read the Codex</a></div>
      </div>
      <div className="castle-emblem"><div className="moon">☾</div><div className="castle">♜</div><div className="banner">KNIGHT</div></div>
    </section>
    <section id="kingdom-map" className="kingdom-map">
      <div className="section-heading"><div><div className="eyebrow">THE ROYAL ROAD</div><h2>Five Chambers of Terraform</h2></div><span className="map-status">⚔ 0 / 5 trials mastered</span></div>
      <div className="road">{commands.map((item,index)=>{const Icon=item.icon;return <div className="road-stop" key={item.slug}><div className="road-line"/><Link href={"/terraform/"+item.slug} className="chamber-card"><div className="chamber-number">0{index+1}</div><div className="chamber-icon"><Icon size={25}/></div><div className="chamber-copy"><div className="chamber-lore">{item.title}</div><h3>{item.command}</h3><p>{item.lore}</p><span className="trial-tag">⚔ {item.kind}</span></div></Link></div>})}</div>
    </section>
    <section id="how-it-works" className="codex"><div className="codex-card"><div className="codex-seal">📜</div><div><div className="eyebrow">THE KNIGHT'S CODEX</div><h2>How the Kingdom teaches</h2><p>Every command has its own chamber. First understand <strong>what it is</strong>, <strong>when it is used</strong>, <strong>what it changes</strong>, and <strong>what it does not do</strong>. Then prove your understanding through a different interactive trial.</p></div></div><div className="pillars"><span>⚒ Forge knowledge</span><span>🧭 Understand workflow</span><span>🛡 Recognize risk</span><span>⚔ Complete the trial</span></div></section>
    <footer className="kingdom-footer">⚔ KNIGHT · Terraform + DevSecOps Learning Kingdom · Built for infrastructure knights</footer>
  </main>;
}
