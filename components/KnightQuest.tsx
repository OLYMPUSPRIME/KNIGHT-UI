"use client";

import { useState } from "react";
import { Shield, Terminal, Trophy, Swords, ChevronRight, RotateCcw, Code2 } from "lucide-react";

type Mission={id:number;title:string;tool:string;description:string;challenge:string;choices:string[];answer:number;output:string[];explanation:string;xp:number};

const missions:Mission[]=[
{id:1,title:"Clean the Code",tool:"terraform fmt",description:"Standardize Terraform configuration before validation.",challenge:"Badly formatted HCL was pushed. Which command should run first?",choices:["terraform fmt","terraform apply","terraform destroy","terraform output"],answer:0,output:["$ terraform fmt","main.tf","variables.tf","✓ Files formatted successfully."],explanation:"terraform fmt applies Terraform's canonical formatting so reviews and diffs stay consistent.",xp:50},
{id:2,title:"Initialize the Fortress",tool:"terraform init",description:"Prepare the working directory and dependencies.",challenge:"This is a fresh clone. Providers and the backend are not initialized. What comes next?",choices:["terraform init","terraform validate","terraform plan","terraform show"],answer:0,output:["$ terraform init","Initializing the backend...","Initializing provider plugins...","✓ Terraform has been successfully initialized!"],explanation:"terraform init prepares the working directory, backend, providers and modules.",xp:50},
{id:3,title:"Validate the Configuration",tool:"terraform validate",description:"Catch configuration errors before planning.",challenge:"Initialization succeeded. You want a fast configuration check without changing infrastructure.",choices:["terraform validate","terraform apply","terraform destroy","terraform refresh"],answer:0,output:["$ terraform validate","Success! The configuration is valid."],explanation:"validate checks configuration syntax and internal consistency without deploying resources.",xp:75},
{id:4,title:"Defeat the Security Gate",tool:"tfsec · Checkov · Terrascan",description:"Find insecure infrastructure before deployment.",challenge:"An S3 bucket allows public access. What belongs in the security stage?",choices:["Run security scanners and remediate the finding","Skip scanning because plan is enough","Run terraform apply immediately","Delete the Terraform files"],answer:0,output:["$ tfsec .","CRITICAL  aws-s3-enable-bucket-public-access","$ checkov -d .","FAILED  CKV_AWS_53","$ terrascan scan","Violation: S3 public access"],explanation:"Security scanners provide defense in depth and should act as pre-deployment gates.",xp:150},
{id:5,title:"Pass the Policy Council",tool:"OPA · Conftest",description:"Enforce organization-specific infrastructure rules.",challenge:"Every S3 bucket must have an Owner tag. Which approach enforces that rule as policy-as-code?",choices:["OPA / Conftest policy gate","terraform fmt","terraform output","terraform console"],answer:0,output:["$ terraform show -json tfplan > plan.json","$ conftest test plan.json","FAIL  required tag 'Owner' missing","Policy gate: BLOCKED"],explanation:"OPA and Conftest express organizational rules as code and can block promotion.",xp:150},
{id:6,title:"Read the Future",tool:"terraform plan",description:"Preview infrastructure changes before applying them.",challenge:"All gates are green. You need to know exactly what Terraform intends to change.",choices:["terraform plan","terraform apply","terraform fmt","terraform init -upgrade"],answer:0,output:["$ terraform plan","Plan: 2 to add, 0 to change, 0 to destroy.","+ aws_s3_bucket.secure","+ aws_s3_bucket_public_access_block.secure"],explanation:"terraform plan shows proposed additions, changes and destructions before apply.",xp:100},
{id:7,title:"Deploy with Confidence",tool:"terraform apply",description:"Execute an approved infrastructure plan.",challenge:"The plan was reviewed and approved. Which command actually changes infrastructure?",choices:["terraform apply","terraform plan","terraform validate","terraform fmt"],answer:0,output:["$ terraform apply","Apply this plan?","Enter a value: yes","aws_s3_bucket.secure: Creation complete","Apply complete! Resources: 2 added, 0 changed, 0 destroyed."],explanation:"terraform apply executes approved changes. Production pipelines should protect it with approvals, least privilege and policy gates.",xp:200}
];

function rank(xp:number){if(xp>=800)return "Security Guardian";if(xp>=500)return "Infrastructure Knight";if(xp>=300)return "Terraform Initiate";return "Apprentice"}

export default function KnightQuest(){
 const [current,setCurrent]=useState<number|null>(null);
 const [xp,setXp]=useState(0);
 const [completed,setCompleted]=useState<number[]>([]);
 const [selected,setSelected]=useState<number|null>(null);
 const [attempt,setAttempt]=useState(0);
 const mission=current===null?null:missions[current];
 const choose=(i:number)=>{if(!mission)return;setSelected(i);setAttempt(v=>v+1);if(i===mission.answer&&!completed.includes(mission.id)){setCompleted(v=>[...v,mission.id]);setXp(v=>v+mission.xp)}};
 const open=(i:number)=>{setCurrent(i);setSelected(null)};
 const reset=()=>{setCurrent(null);setXp(0);setCompleted([]);setSelected(null);setAttempt(0)};
 const progress=Math.round(completed.length/missions.length*100);
 return <div className="shell">
  <aside className="sidebar">
   <div className="brand"><div className="crest">⚔</div><div><strong>KNIGHT</strong><span>Terraform Quest</span></div></div>
   <button className={`navItem ${current===null?"active":""}`} onClick={()=>setCurrent(null)}>🏰 Command Center</button>
   <div className="navLabel">CAMPAIGN</div>
   {missions.map((m,i)=><button key={m.id} className={`navItem ${current===i?"active":""}`} onClick={()=>open(i)}><span>{completed.includes(m.id)?"✓":String(m.id).padStart(2,"0")}</span><span>{m.title}</span></button>)}
   <div className="sideProgress"><div className="muted">CAMPAIGN PROGRESS</div><div className="progressTrack"><i style={{width:`${progress}%`}}/></div><div className="progressMeta"><span>{rank(xp)}</span><b>{xp} XP</b></div></div>
  </aside>
  <main className="content">
   {current===null?<><header className="hero"><div><div className="eyebrow">INTERACTIVE DEVSECOPS TRAINING</div><h1>Terraform Quest ⚔️</h1><p>Don&apos;t just read KNIGHT. <b>Use KNIGHT.</b> Make decisions, execute simulated commands, defeat security gates and earn XP.</p></div><div className="stats"><div><b>{Math.max(1,Math.floor(xp/250)+1)}</b><span>LEVEL</span></div><div><b>{completed.length}/{missions.length}</b><span>MISSIONS</span></div><div><b>{xp}</b><span>XP</span></div></div></header>
    <section className="grid"><div className="panel"><div className="panelHeader"><Code2 className="cyan" size={19}/><div><h2>Campaign Map</h2><p>Code → Quality → Security → Policy → Plan → Deploy</p></div></div><div className="missionGrid">{missions.map((m,i)=><button key={m.id} className={`missionCard ${completed.includes(m.id)?"done":""}`} onClick={()=>open(i)}><div>{completed.includes(m.id)?"✓":"○"}</div><div className="missionInfo"><small>MISSION {String(m.id).padStart(2,"0")}</small><strong>{m.title}</strong><span>{m.tool}</span></div><div className="reward">+{m.xp} XP <ChevronRight size={15}/></div></button>)}</div></div>
    <div className="panel"><div className="panelHeader"><Shield className="green" size={19}/><div><h2>Security Fortress</h2><p>Where insecure infrastructure gets stopped.</p></div></div><div className="boss"><div className="bossBadge">BOSS BATTLE</div><h3>🪣 Public S3 Bucket</h3><p>A storage resource is configured with public access. Your security gate must catch it before deployment.</p><div className="bossFlow"><span>Terraform</span><b>→</b><span>Scanner</span><b>→</b><span className="danger">❌ BLOCK</span></div></div></div></section></>:
    <section><button className="back" onClick={()=>setCurrent(null)}>← Campaign Map</button><header className="missionHero"><div><div className="eyebrow">MISSION {String(mission!.id).padStart(2,"0")} · {mission!.tool}</div><h1>{mission!.title}</h1><p>{mission!.description}</p></div><div className="xpBadge">+{mission!.xp} XP</div></header>
    <div className="gameGrid"><div className="panel"><div className="challengeBadge"><Swords size={15}/> CHALLENGE</div><h2>{mission!.challenge}</h2><div className="choices">{mission!.choices.map((c,i)=><button key={c} onClick={()=>choose(i)} className={`choice ${selected===i?(i===mission!.answer?"correct":"wrong"):""}`}><span>{String.fromCharCode(65+i)}</span>{c}</button>)}</div></div>
    <div className="panel terminalPanel"><div className="terminalHeader"><Terminal size={15}/> KNIGHT TERMINAL <span>SAFE SIMULATION</span></div><pre>{(selected===mission!.answer?mission!.output:["$ waiting for your decision..."]).map((line,i)=><div key={i}>{line}</div>)}</pre><div className={`terminalStatus ${selected===mission!.answer?"passed":""}`}>{selected===mission!.answer?"✓ GATE PASSED":"● AWAITING DECISION"}</div></div></div>
    {selected===mission!.answer&&<div className="successPanel"><div><div className="eyebrow">MISSION COMPLETE · +{mission!.xp} XP</div><h2><Trophy size={18}/> Gate cleared.</h2><p><b>Why this matters:</b> {mission!.explanation}</p></div><button className="nextButton" onClick={()=>current<missions.length-1?open(current+1):setCurrent(null)}>{current<missions.length-1?"Next Mission":"Return to Command Center"} <ChevronRight size={17}/></button></div>}
    {selected!==null&&selected!==mission!.answer&&<div className="errorPanel"><b>❌ Wrong move.</b> Review the tool purpose and try again. Attempt #{attempt}.</div>}
    </section>}
   <footer><span>⚔️ KNIGHT · Terraform + DevSecOps Learning Simulator</span><button onClick={reset}><RotateCcw size={13}/> Reset Progress</button></footer>
  </main>
 </div>
}
