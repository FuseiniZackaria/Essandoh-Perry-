// ---------------------------------------------------------------------------
// Single source of truth for site content. Components read from here so the
// site can be updated later without touching JSX/markup.
// ---------------------------------------------------------------------------

export const personal = {
  name: "Essandoh Perry",
  roles: ["Cybersecurity Professional", "AI Trainer", "SOC Analyst", "Public Speaker", "Mentor"],
  whatsappNumber: "233540638308",
};

export const nav = {
  links: [
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Projects", href: "#projects" },
    { label: "Speaking", href: "#speaking" },
    { label: "Contact", href: "#contact" },
  ],
  cta: "Let's Talk",
};

export const whatsapp = {
  general: "Hi Essandoh Perry, I'd like to discuss working with you.",
  speaking: "Hi Essandoh Perry, I'd like to invite you to speak at an event.",
  aiTraining: "Hi Essandoh Perry, I'm interested in AI training for my team/organization.",
  cybersecurity: "Hi Essandoh Perry, I'd like to discuss a cybersecurity project.",
  mentorship: "Hi Essandoh Perry, I'm interested in your coaching or mentorship.",
  project: "Hi Essandoh Perry, I saw your cybersecurity project and I'd like to discuss building something similar.",
};

export const social = {
  linkedin: "https://linkedin.com/in/perry-essandoh-cybersecurity-artificial-intelligence-public-speaking",
  tiktok: "https://www.tiktok.com/@_cyberperry",
};

export const hero = {
  eyebrow: "Cybersecurity · AI · Speaking",
  headlineLines: ["Securing people.", "Empowering organizations.", "Building with technology."],
  supporting:
    "Cybersecurity professional, AI trainer, SOC analyst and public speaker helping people and organizations navigate a rapidly changing digital world.",
  ctaPrimary: "Let's Talk on WhatsApp",
  ctaSecondary: "Explore My Work",
  portrait: {
    src: "/images/perry-portrait.jpg",
    srcWebp: "/images/perry-portrait.webp",
    alt: "A Essandoh Perry speaker addressing an audience during a presentation titled 'Driving Growth Through Innovation', gesturing mid-sentence in a brown jacket and tie.",
  },
  angles: [
    { audience: "For business owners", statement: "Cybersecurity protects people, money, reputation and continuity — not just computers." },
    { audience: "For learners", statement: "Essandoh Perry is a mentor and educator." },
    { audience: "For organizations", statement: "Essandoh Perry is a speaker and technology partner." },
  ],
};

export const about = {
  label: "Why I do this",
  paragraphs: [
    "My journey into cybersecurity was driven by a simple question: how many people are quietly losing everything because they don't understand the technology around them?",
    "Seeing stories of people falling victim to cybercrime made me think beyond computers and networks.",
    "Behind every attack is a person, a family, a business or an organization that can be affected.",
    "That pushed me toward cybersecurity — not simply as a technical career, but as a way to help people protect themselves in an increasingly digital world.",
    "Today, I'm also exploring the power of artificial intelligence and how organizations can use it responsibly to work smarter, solve problems and prepare for what comes next.",
  ],
  quote: "In this room, we cannot entertain ignorance.",
};

export interface ServiceItem {
  code: string;
  title: string;
  description: string;
}

export const expertise: ServiceItem[] = [
  {
    code: "SEC",
    title: "Cybersecurity",
    description:
      "Cybersecurity awareness, security assessments, SOC operations, security labs, vulnerability assessment and practical security guidance.",
  },
  {
    code: "AI",
    title: "AI Training & Adoption",
    description:
      "Helping individuals and organizations understand practical AI applications and integrate AI into their workflows.",
  },
  {
    code: "TLK",
    title: "Speaking",
    description:
      "Talks, seminars, workshops and educational sessions around cybersecurity, AI and technology.",
  },
  {
    code: "MTR",
    title: "Coaching & Mentorship",
    description:
      "Technical guidance, employee mentorship and practical technology education.",
  },
];

export type ProjectType = "LAB" | "CLIENT";

export interface ProjectDetail {
  slug: string;
  fileRef: string; // case-file style reference, grounded in SOC/incident-report conventions
  title: string;
  type: ProjectType;
  summary: string;
  tags: string[];
  overview: string;
  objective: string;
  environment: string[];
  methodology: string[];
  outcomes: string[];
  skills: string[];
  relevance: string;
  interview: {
    beginner: string[];
    intermediate: string[];
    advanced: string[];
    scenarios: string[];
  };
  documentation: string[];
}

export const projects: ProjectDetail[] = [
  {
    slug: "fintech-incident-response-plan",
    fileRef: "IR-01",
    title: "FinTech Cyber Incident Response Plan",
    type: "LAB",
    summary: "Incident response planning, financial-sector security, response procedures and preparedness.",
    tags: ["NIST 800-61", "Playbook Design", "Tabletop Exercise"],
    overview:
      "A structured incident response plan built around a hypothetical financial-services organization, covering the full lifecycle from detection through post-incident review.",
    objective:
      "To design a response framework that a financial-sector security team could realistically operate under — one that accounts for regulatory pressure, customer trust, and the speed at which fraud and account-compromise incidents typically escalate.",
    environment: ["NIST SP 800-61 framework", "Documentation built in Markdown / Notion", "Tabletop-exercise format for validation"],
    methodology: [
      "Mapped the incident lifecycle: preparation, detection & analysis, containment, eradication, recovery, and lessons learned.",
      "Defined severity tiers and escalation paths appropriate to a financial-sector environment.",
      "Drafted role-specific playbooks (SOC analyst, incident commander, communications) for common scenarios such as account takeover and payment fraud.",
      "Ran a tabletop walkthrough of the plan against a simulated incident to surface gaps in the procedures.",
    ],
    outcomes: [
      "A documented, role-based playbook rather than a single generic checklist.",
      "Clear escalation and communication paths for scenarios with regulatory or customer-trust implications.",
      "Gaps identified during the tabletop walkthrough were folded back into the plan before it was considered complete.",
    ],
    skills: ["Incident response planning", "Playbook design", "Regulatory awareness in financial security", "Cross-functional communication under pressure"],
    relevance:
      "Financial organizations are judged on how fast and how cleanly they respond to an incident, not just whether one happens. A response plan that fits the sector's regulatory and reputational realities is what separates a contained incident from a public one.",
    interview: {
      beginner: [
        "What are the six phases of the NIST incident response lifecycle?",
        "What's the difference between containment and eradication?",
        "Why does an incident response plan need defined severity tiers?",
      ],
      intermediate: [
        "How would you adapt a generic IR plan for a regulated financial-services environment?",
        "Who should be in the room during the first 30 minutes of a suspected account-takeover incident, and why?",
        "What makes a tabletop exercise useful versus a box-checking exercise?",
      ],
      advanced: [
        "How do you balance rapid containment against preserving forensic evidence in a fraud-related incident?",
        "How would you design escalation paths that satisfy both internal leadership and external regulators without slowing response time?",
        "What's your approach to post-incident review when the root cause involves a third-party vendor?",
      ],
      scenarios: [
        "A customer reports unauthorized transfers from their account at 11pm. Walk through your first hour of response.",
        "Your incident response plan assumes the SOC lead is available 24/7 — they're unreachable during a live incident. What now?",
      ],
    },
    documentation: ["Incident response playbook (role-based)", "Severity & escalation matrix", "Tabletop exercise notes"],
  },
  {
    slug: "active-directory-attack-lab",
    fileRef: "AD-02",
    title: "Active Directory Attack Lab",
    type: "LAB",
    summary: "AD security, attack paths, authentication weaknesses and defensive analysis.",
    tags: ["Active Directory", "BloodHound", "Mimikatz", "Kerberos"],
    overview:
      "A self-hosted Active Directory environment built to study common misconfigurations and authentication weaknesses from both the attacker's and defender's side.",
    objective:
      "To understand, hands-on, how a foothold in a Windows domain typically escalates to domain-level compromise — and what defensive controls actually interrupt that chain.",
    environment: ["Windows Server domain controller (virtualized)", "Windows 10/11 domain-joined clients", "BloodHound for attack-path mapping", "Mimikatz, Kerbrute for credential/authentication testing"],
    methodology: [
      "Built a small multi-machine domain with deliberately realistic (not artificially broken) misconfigurations.",
      "Used BloodHound to map attack paths from a standard user account toward Domain Admin.",
      "Tested credential-based techniques including Kerberoasting and password-spraying against service accounts.",
      "Documented each technique alongside the specific misconfiguration or policy gap that enabled it.",
      "Reversed the exercise: for each attack path found, identified the defensive control (policy, monitoring rule, or configuration change) that would have closed it.",
    ],
    outcomes: [
      "A mapped set of attack paths from low-privilege access to domain compromise, tied to specific misconfigurations rather than generic theory.",
      "A paired list of attack technique → defensive control, useful as a hardening reference.",
      "First-hand familiarity with the tooling defenders need to recognize (BloodHound output, Kerberoasting traffic patterns) when reviewing SOC alerts.",
    ],
    skills: ["Active Directory security", "Attack path analysis", "Kerberos authentication internals", "Defensive hardening recommendations"],
    relevance:
      "Active Directory is still the backbone of identity in most enterprise networks, and most real-world breaches involve some form of AD privilege escalation. Understanding the attacker's path is what makes SOC alerts about it meaningful instead of noise.",
    interview: {
      beginner: [
        "What is Kerberoasting and why does it work?",
        "What's the difference between a Domain Admin and a local administrator?",
        "Why is password-spraying harder to detect than brute-forcing a single account?",
      ],
      intermediate: [
        "How would you use BloodHound output to prioritize which attack path to remediate first?",
        "What logging would you need in place to detect Kerberoasting in a live environment?",
        "What's the risk of overly broad group nesting in Active Directory?",
      ],
      advanced: [
        "How would you design a tiered administration model to contain lateral movement in a compromised domain?",
        "Walk through how you'd detect and respond to a Golden Ticket attack after the fact.",
        "What trade-offs would you weigh before disabling NTLM authentication domain-wide?",
      ],
      scenarios: [
        "BloodHound shows an unprivileged marketing account has a viable path to Domain Admin through group nesting. What's your remediation order of operations?",
        "You suspect a service account's Kerberos ticket has been cracked offline. What do you check first?",
      ],
    },
    documentation: ["Lab build notes and network diagram", "Attack-path → control mapping reference"],
  },
  {
    slug: "soc-monitoring-lab",
    fileRef: "SOC-03",
    title: "SOC Monitoring Lab",
    type: "LAB",
    summary: "Security monitoring, alert investigation, log analysis and SOC workflows.",
    tags: ["Wazuh", "SIEM", "Log Analysis", "Alert Triage"],
    overview:
      "A home-lab SOC environment built around Wazuh to practice the day-to-day workflow of a security operations center: ingesting logs, tuning alerts, and triaging what actually matters.",
    objective:
      "To build practical fluency in the SOC analyst workflow — not just reading about detections, but generating real telemetry, triaging it, and refining rules against false positives.",
    environment: ["Wazuh SIEM (self-hosted)", "Windows and Linux endpoints as log sources", "Simulated attack traffic for detection testing"],
    methodology: [
      "Deployed Wazuh agents across a small mixed Windows/Linux endpoint set.",
      "Generated realistic attack telemetry (brute-force attempts, suspicious process execution, file-integrity changes) to validate detections.",
      "Triaged the resulting alerts end to end: initial classification, investigation, and disposition.",
      "Tuned detection rules to reduce noisy false positives without suppressing genuine signal.",
    ],
    outcomes: [
      "A working set of tuned detection rules with documented reasoning for each adjustment.",
      "A repeatable triage workflow, from alert to disposition, that mirrors how a SOC analyst actually spends a shift.",
      "A clearer sense of where default SIEM rules generate noise versus where they catch something real.",
    ],
    skills: ["SIEM administration", "Log analysis", "Alert triage and disposition", "Detection rule tuning"],
    relevance:
      "Most SOC work isn't dramatic incident response — it's disciplined, repeatable triage. Being able to separate signal from noise, quickly and consistently, is the actual day-to-day value of a SOC analyst.",
    interview: {
      beginner: [
        "What's the difference between a log, an alert, and an incident?",
        "Why is alert fatigue a real operational risk for a SOC?",
        "What fields would you expect in a well-formed security log entry?",
      ],
      intermediate: [
        "How would you approach tuning a detection rule that's generating too many false positives?",
        "What's your triage process when an alert first lands in your queue?",
        "How do you decide when an alert warrants escalation versus closing as benign?",
      ],
      advanced: [
        "How would you design a detection strategy for an environment with limited log retention budget?",
        "What's your approach to correlating low-severity alerts that might indicate a coordinated, slow-moving attack?",
        "How do you measure whether a SOC's detection coverage is actually improving over time?",
      ],
      scenarios: [
        "You're seeing a spike in failed logins from a single internal host outside business hours. Walk through your investigation.",
        "A detection rule you tuned last week just missed a real test case. What's your process for revisiting it?",
      ],
    },
    documentation: ["Wazuh deployment notes", "Detection rule tuning log"],
  },
  {
    slug: "malware-analysis-sandbox",
    fileRef: "MAL-04",
    title: "Malware Analysis Sandbox",
    type: "LAB",
    summary: "Safe malware analysis environment, behavioral analysis and security investigation.",
    tags: ["Isolated VM", "Wireshark", "Behavioral Analysis"],
    overview:
      "An isolated, network-segmented sandbox for safely observing how sample malware behaves — file system changes, network calls, and persistence mechanisms — without risk to a production environment.",
    objective:
      "To build the discipline and tooling needed to analyze suspicious files safely, and to understand behavioral indicators well enough to recognize them in a live SOC context.",
    environment: ["Isolated, host-only virtual network", "Snapshot-based VMs for safe rollback", "Wireshark for network behavior capture", "Process and file-system monitoring tools"],
    methodology: [
      "Built an air-gapped analysis environment with strict network isolation and VM snapshotting before each run.",
      "Executed samples in a controlled manner while capturing process activity, file system changes, and outbound network attempts.",
      "Documented behavioral indicators (persistence mechanisms, command-and-control attempts, file drops) for each sample.",
      "Cross-referenced observed behavior against known indicator patterns to build a personal reference library.",
    ],
    outcomes: [
      "A documented set of behavioral indicators observed across sample runs, organized by technique rather than by sample.",
      "A repeatable, safe analysis process that can be applied to new samples without rebuilding the environment each time.",
      "Practical familiarity with the difference between static indicators and behavior that only shows up at runtime.",
    ],
    skills: ["Safe malware handling and containment", "Behavioral analysis", "Network traffic analysis", "Documentation for investigative handoff"],
    relevance:
      "Recognizing malicious behavior — not just matching a signature — is what lets an analyst respond to something new. This lab builds the instinct for what 'suspicious' actually looks like at the process and network level.",
    interview: {
      beginner: [
        "What's the difference between static and dynamic malware analysis?",
        "Why is network isolation critical before running an unknown sample?",
        "What's a persistence mechanism, and why do attackers rely on them?",
      ],
      intermediate: [
        "How would you set up an environment to safely analyze a sample you suspect calls out to a command-and-control server?",
        "What tools would you use to capture process-level behavior during execution?",
        "How do you tell the difference between benign and malicious use of a legitimate system tool?",
      ],
      advanced: [
        "How would you approach analyzing a sample that appears to detect it's running in a VM?",
        "What's your process for safely extracting and documenting indicators of compromise for a broader team?",
        "How do you balance analysis depth against turnaround time when a live incident is waiting on your findings?",
      ],
      scenarios: [
        "A suspicious attachment was reported by an employee. Walk through your process from receipt to verdict.",
        "Your sandbox shows a sample making a single outbound DNS request and then going quiet. What's your next step?",
      ],
    },
    documentation: ["Sandbox build and isolation notes", "Behavioral indicator reference log"],
  },
  {
    slug: "web-application-attack-lab",
    fileRef: "WEB-05",
    title: "Web Application Attack Lab",
    type: "LAB",
    summary: "Web application vulnerabilities, attack simulation and defensive understanding.",
    tags: ["OWASP Top 10", "Burp Suite", "SQLi", "XSS"],
    overview:
      "A deliberately vulnerable web application environment used to study the OWASP Top 10 hands-on, from discovery through exploitation to remediation.",
    objective:
      "To move beyond memorizing the OWASP Top 10 as a list, and actually understand how each vulnerability class is discovered, exploited, and fixed at the code level.",
    environment: ["Deliberately vulnerable web app (isolated local instance)", "Burp Suite for request interception and testing", "Browser developer tools for client-side analysis"],
    methodology: [
      "Worked through vulnerability classes systematically: injection, broken authentication, XSS, insecure direct object references, and security misconfiguration.",
      "Used Burp Suite to intercept and manipulate requests, testing input validation and session handling.",
      "For each vulnerability found, traced it back to the specific coding pattern or missing control that caused it.",
      "Documented remediation for each — not just 'sanitize input', but the specific fix appropriate to the vulnerability class.",
    ],
    outcomes: [
      "A working set of proof-of-concept exploits mapped to specific OWASP Top 10 categories.",
      "A remediation note for each finding, written at the level a developer could actually act on.",
      "A clearer sense of which vulnerability classes tend to cluster together in poorly-structured applications.",
    ],
    skills: ["Web application security testing", "Manual exploitation technique", "Secure coding remediation guidance", "Use of intercepting proxies"],
    relevance:
      "Web applications remain one of the most common entry points into an organization. Being able to explain a vulnerability in terms a developer can act on — not just flag it — is what makes security guidance actually get fixed.",
    interview: {
      beginner: [
        "What's the difference between reflected and stored XSS?",
        "Why is input validation alone not sufficient to prevent SQL injection?",
        "What does an intercepting proxy like Burp Suite actually let you do?",
      ],
      intermediate: [
        "How would you test for an insecure direct object reference vulnerability?",
        "What's the difference between authentication and authorization flaws, and why do they get confused?",
        "How would you explain a stored XSS finding to a developer who says 'but we sanitize on output'?",
      ],
      advanced: [
        "How would you chain a lower-severity information disclosure bug with another finding to demonstrate real impact?",
        "What's your approach to testing an application's session management for fixation or hijacking risks?",
        "How do you prioritize remediation across a report with a dozen mixed-severity findings?",
      ],
      scenarios: [
        "A login form appears to behave differently for valid versus invalid usernames. What are you testing for, and how?",
        "You find a parameter that reflects user input directly into the page. Walk through how you'd confirm exploitability responsibly.",
      ],
    },
    documentation: ["Testing methodology notes", "Findings and remediation log"],
  },
  {
    slug: "vulnerability-assessment-reporting-lab",
    fileRef: "VA-06",
    title: "Vulnerability Assessment & Reporting Lab",
    type: "LAB",
    summary: "Vulnerability discovery, assessment, prioritization and professional reporting.",
    tags: ["Nmap", "Nessus", "CVSS", "Reporting"],
    overview:
      "An end-to-end vulnerability assessment exercise against a lab network — scanning, validating, prioritizing, and writing the finding up the way it would need to land in front of a non-technical stakeholder.",
    objective:
      "To practice the full assessment lifecycle, with particular attention to the part most technical people underinvest in: communicating risk clearly enough that someone will actually act on it.",
    environment: ["Lab network of mixed OS/service targets", "Nmap for discovery and service enumeration", "Nessus for vulnerability scanning", "CVSS v3.1 for scoring and prioritization"],
    methodology: [
      "Ran discovery and service enumeration with Nmap to map the attack surface before scanning.",
      "Performed vulnerability scanning with Nessus, then manually validated a sample of findings to filter out false positives.",
      "Scored validated findings using CVSS v3.1 and layered in business-context prioritization (exposure, exploitability, asset value).",
      "Wrote the findings into a structured report: executive summary, technical detail per finding, and prioritized remediation guidance.",
    ],
    outcomes: [
      "A validated (not just scanner-raw) findings list, with false positives filtered before reporting.",
      "A prioritized remediation order that accounts for business context, not just CVSS score alone.",
      "A two-layer report structure — executive summary plus technical appendix — built for two different audiences.",
    ],
    skills: ["Vulnerability scanning and validation", "CVSS scoring and risk prioritization", "Professional security reporting", "Communicating technical risk to non-technical stakeholders"],
    relevance:
      "A vulnerability assessment only creates value if the report gets acted on. Scoring correctly matters less than writing the finding so a business owner understands why it's worth fixing this quarter, not next year.",
    interview: {
      beginner: [
        "What's the difference between a vulnerability scan and a penetration test?",
        "What does a CVSS score actually represent?",
        "Why do vulnerability scanners produce false positives?",
      ],
      intermediate: [
        "How would you validate a scanner finding before including it in a report?",
        "How do you prioritize findings when CVSS score and business impact don't agree?",
        "What belongs in an executive summary that doesn't belong in the technical appendix?",
      ],
      advanced: [
        "How would you build a remediation timeline for a report with limited IT resourcing to act on it?",
        "How do you handle a finding you believe is high-risk but the client's environment context suggests otherwise?",
        "What's your approach to re-testing after remediation to confirm a finding is actually closed?",
      ],
      scenarios: [
        "Your scan returns 40 findings, but the client only has capacity to fix five this month. Walk through how you'd choose.",
        "A stakeholder pushes back on a 'critical' finding, saying the affected system isn't internet-facing. How do you respond?",
      ],
    },
    documentation: ["Assessment methodology", "Sample report structure (executive summary + technical appendix)"],
  },
];

export const speaking = {
  headline: "I speak about what technology is becoming.",
  intro:
    "Essandoh Perry helps audiences understand where technology is heading and how people and organizations should respond — grounded in real SOC and AI-adoption experience, not hype.",
  topics: [
    "Cybersecurity awareness",
    "Cybersecurity for everyday people",
    "AI adoption",
    "AI for organizations",
    "Future of work",
    "Technology and digital responsibility",
    "Cybersecurity careers",
    "Building a security-conscious culture",
  ],
  cta: "Invite Us to Speak",
};

export const whyPerry = {
  heading: "Why Essandoh Perry?",
  pillars: [
    { title: "Practical", statement: "Technology should solve real problems." },
    { title: "Human", statement: "Cybersecurity is ultimately about protecting people." },
    { title: "Forward-thinking", statement: "AI and cybersecurity are evolving rapidly. Organizations must evolve too." },
    { title: "Educational", statement: "Understanding technology is becoming a necessity, not a luxury." },
  ],
};

export const currently = {
  label: "Currently",
  text: "Exploring cybersecurity, AI adoption, security operations and practical technology education.",
};

export const finalCta = {
  headline: "Let's build something that matters.",
  supporting:
    "Whether you need cybersecurity guidance, AI training, a speaker for your next event, or help turning a technical idea into something practical — let's talk.",
  primary: "Talk on WhatsApp",
  secondary: "Invite Me to Speak",
};

export const footer = {
  tagline: "Cybersecurity · AI · Speaking",
  copyright: `© ${new Date().getFullYear()} Essandoh Perry. All rights reserved.`,
};
