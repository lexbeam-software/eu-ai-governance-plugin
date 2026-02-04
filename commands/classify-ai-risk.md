---
description: Classify an AI system under the EU AI Act (prohibited, high-risk, limited-risk, minimal-risk, and GPAI). Produces a regulator-ready obligations and evidence checklist with deadlines and responsibility split.
argument-hint: "<AI system description | file | URL>"
---

# /classify-ai-risk - EU AI Act Risk Classification (Flagship)

> If you see unfamiliar placeholders or need to check which tools are connected, see [CONNECTORS.md](../CONNECTORS.md).

Classify an AI system under Regulation (EU) 2024/1689 (EU AI Act) and produce a practical compliance plan.

This command is designed for in-house legal, compliance, security, privacy, and product teams. It supports:
- AI systems built in-house and deployed in the EU
- Vendor AI systems deployed by your organization (deployer obligations)
- General-purpose AI (GPAI) models and downstream applications

## Invocation

```
/classify-ai-risk
```

## Workflow

### Step 1 - Accept the System Description (any format)

Accept input as:
- **Pasted text**: a short narrative of the system and its use case
- **File upload**: product requirements, model cards, architecture docs, DPIAs, security assessments
- **URL**: link to internal documentation (wiki, ticket, vendor portal) or a public model/system card

If the user did not provide a description, ask for one. If a URL is provided but is not accessible, ask the user to paste relevant excerpts.

### Step 2 - Ask Clarifying Questions (only what is needed)

Ask targeted questions to resolve classification uncertainties. Prefer a short list of high-signal questions and state why each matters.

Minimum set (ask if not already answered):
1. **What does the system do?** What outputs does it produce, and what is the intended purpose?
2. **Who uses it and who is affected?** Employees, customers, children, patients, citizens, job applicants, students.
3. **What decisions does it influence?** Informing a human, recommending actions, ranking, approving, denying, or taking automated action.
4. **What data does it process?** Personal data, special categories, biometric data, location data, communications, behavioral signals, scraped data.
5. **Is it customer-facing or used in sensitive contexts?** Employment, education, healthcare, finance, housing, public services.

High-value follow-ups (ask when relevant):
- **Human involvement**: Is there meaningful human review before adverse outcomes? Can reviewers override and are they trained?
- **Biometrics**: Does it identify or verify people, infer attributes, or classify emotion or attention?
- **Real-time use**: Is any biometric identification used in publicly accessible spaces and in real time?
- **Vulnerability and manipulation**: Does it target children or other vulnerable groups, or use subliminal/manipulative techniques?
- **Role in the value chain**: Are you the provider (develop/put on market), deployer (use under your authority), importer, distributor, or authorized representative?
- **GPAI**: Is the system a general-purpose model (or built on one) that can be used for many downstream purposes?

### Step 3 - Determine Your Role and Scope

Before classifying risk, pin down the compliance role because obligations differ.

Ask and record:
- Are you placing the AI system or GPAI model on the market or putting it into service under your name or trademark? If yes, you are likely a **provider**.
- Are you using an AI system under your authority for internal or external purposes? If yes, you are likely a **deployer**.
- Are you bringing an AI system from outside the EU to the EU market? If yes, you are likely an **importer**.
- Are you making an AI system available in the supply chain without modifying it? If yes, you may be a **distributor**.

If unclear, proceed with assumptions and list them explicitly.

### Step 4 - Classification Gate 1: Prohibited Practices (Article 5)

Evaluate first whether the use case is prohibited. If any prohibited practice applies, stop and produce a mitigation and escalation plan.

Check for Article 5 triggers, including (non-exhaustive summary):
- **Manipulation and deception** that materially distorts behavior and causes or is likely to cause significant harm
- **Exploitation of vulnerabilities** due to age, disability, or socio-economic situation causing or likely causing significant harm
- **Social scoring** leading to detrimental or unfavorable treatment in unrelated contexts
- **Certain predictive policing** or profiling practices (assess against Article 5 specifics)
- **Untargeted scraping of facial images** from the internet or CCTV to build or expand facial recognition databases
- **Emotion recognition** in the workplace or educational institutions (with narrow exceptions)
- **Biometric categorisation** using sensitive attributes (and related prohibited categorisation practices)
- **Real-time remote biometric identification** in publicly accessible spaces for law enforcement (subject to narrow exceptions and strict conditions)

Output at this step:
- If prohibited: label as **PROHIBITED** and cite the relevant Article 5 point(s).
- If not prohibited: explain why not, and move to Gate 2.

### Step 5 - Classification Gate 2: High-Risk AI Systems

If not prohibited, assess whether the system is **high-risk**.

#### 5A - High-risk because it is a safety component of a regulated product (Annex I)

Ask whether the AI is:
- a safety component of a product covered by EU harmonisation legislation listed in Annex I, or
- itself a product covered by Annex I that must undergo third-party conformity assessment.

If yes, classify as **HIGH-RISK (Annex I)** and note that the full high-risk obligations apply, typically with sector product-law conformity assessment.

#### 5B - High-risk because it falls into an Annex III use case category

Assess Annex III categories and subcategories. If any apply, classify as **HIGH-RISK (Annex III)**.

Common categories to test explicitly:
- Biometrics (identification, verification, categorisation)
- Critical infrastructure (operation and safety)
- Education and vocational training (admissions, assessments)
- Employment, workers management, and access to self-employment (recruitment, promotion, termination, task allocation)
- Access to and enjoyment of essential private services and essential public services and benefits (creditworthiness, insurance, housing, welfare)
- Law enforcement (risk assessment, evidence analysis, profiling)
- Migration, asylum, and border control management
- Administration of justice and democratic processes

If on the boundary, explain what additional facts would move it into or out of Annex III.

### Step 6 - Classification Gate 2b: GPAI Model Status (Articles 51 to 56)

Independently from high-risk, evaluate whether the artifact is a **general-purpose AI (GPAI) model** and whether it is a **GPAI model with systemic risk**.

Do this even if the immediate application is minimal-risk, because GPAI model obligations can apply at the model provider level and can flow down contractually.

For GPAI, capture:
- Model type (foundation model, LLM, multimodal model)
- How it is offered (API, on-prem, open weights)
- Intended uses and reasonably foreseeable misuse
- Training data provenance and rights
- Whether it triggers systemic risk criteria (if known)

Output:
- If the user is the GPAI model provider: list Articles 53 to 55 obligations.
- If the user is a downstream provider/deployer using a third-party GPAI model: list the operational steps to meet downstream transparency and integration requirements and the vendor evidence to request.

### Step 7 - Classification Gate 3: Limited-Risk (Transparency) Systems

If not prohibited and not high-risk, test whether transparency obligations apply.

Check common limited-risk cases:
- **AI systems intended to interact with natural persons** (chatbots, voice agents) - transparency to inform users they are interacting with AI (Article 50)
- **Emotion recognition or biometric categorisation systems** - transparency and specific constraints (Article 50, plus any relevant prohibitions)
- **Deepfakes and synthetic content generation** - disclosure or marking requirements (Article 50)
- **AI-generated or manipulated text that is published to inform the public** - disclose where required (Article 50)

If a transparency category applies, classify as **LIMITED RISK** and list exact duties and where to implement them.

### Step 8 - Default: Minimal-Risk

If none of the above apply, classify as **MINIMAL RISK**.

Explain that the EU AI Act imposes no additional mandatory requirements for minimal-risk systems beyond horizontal law (for example GDPR, consumer law, product safety, copyright, cybersecurity), and that voluntary codes of conduct and good practice still matter.

## Output Format

Produce a structured assessment that a compliance professional can use immediately.

Use this structure:

```
## EU AI Act Classification - Result

**System**: <name / short identifier>
**Your role(s)**: <provider | deployer | importer | distributor | authorized representative>
**Deployment context**: <EU Member States, internal vs external, sector>

### Classification Badge
<PROHIBITED | HIGH-RISK | LIMITED | MINIMAL | GPAI>

## 1) Facts Used and Assumptions
- Inputs reviewed: <files/URLs/excerpts>
- Key facts: <bullet list>
- Assumptions: <bullet list>
- Open questions: <bullet list>

## 2) Prohibited Practices Check (Article 5)
- Determination: <not prohibited | potentially prohibited | prohibited>
- Relevant Article 5 points: <citations>
- Rationale: <short>

## 3) High-Risk Check
### Annex I (regulated products)
- Determination: <yes/no/unknown>
- Why: <short>

### Annex III (high-risk use cases)
- Applicable category: <if any>
- Why it matches: <short>
- Boundary notes: <what would change the conclusion>

## 4) GPAI Model Check (Articles 51 to 56)
- Is it a GPAI model?: <yes/no>
- Systemic risk?: <yes/no/unknown>
- Provider obligations implicated: <articles>
- Downstream actions needed: <bullets>

## 5) Applicable Obligations and Who Owns Them
### Provider obligations (high-risk systems)
- <obligation> - <Article reference> - Owner: Provider

### Deployer obligations
- <obligation> - <Article reference> - Owner: Deployer

### Importer and distributor obligations (if relevant)
- <obligation> - <Article reference> - Owner: Importer/Distributor

## 6) Evidence and Documentation Checklist
- Technical documentation and instructions for use (high-risk) - Articles 11, 13
- Risk management file - Article 9
- Data governance and data quality documentation - Article 10
- Logging and record-keeping design - Article 12
- Human oversight plan - Article 14
- Accuracy, robustness, cybersecurity evidence - Article 15
- Post-market monitoring plan (providers) - Article 72
- Serious incident reporting process (providers) - Article 73
- Fundamental rights impact assessment (deployers of high-risk) - Article 27
- Transparency notices, labeling, and user disclosures (limited-risk) - Article 50
- GPAI technical documentation, training data summary, and policy to comply with EU copyright opt-out - Article 53

## 7) Timeline and Enforcement Dates
- Feb 2, 2025 - prohibited practices ban applies; AI literacy obligations apply
- Aug 2, 2025 - GPAI model obligations apply; governance rules and penalties apply
- Aug 2, 2026 - Annex III high-risk obligations apply
- Aug 2, 2027 - Annex I high-risk obligations apply

## 8) Practical Next Steps (30/60/90 days)
- 0 to 30 days: <triage actions>
- 30 to 60 days: <documentation and control implementation>
- 60 to 90 days: <conformity assessment readiness, vendor contract updates, monitoring>

## 9) Escalations
- If potential prohibited practice: escalate to legal and executive sponsor immediately
- If high-risk: confirm conformity assessment pathway and resource plan
- If GPAI: confirm whether you are a model provider and obtain required evidence from vendors

## Disclaimer
This output supports compliance workflows and does not constitute legal advice. Validate conclusions against the final text of Regulation (EU) 2024/1689, implementing acts, harmonised standards, and guidance from the EU AI Office and national competent authorities.
```

## Notes and Quality Bar

- Always prefer the strictest plausible classification when facts are uncertain, and list what evidence would de-risk the conclusion.
- Cite article numbers for every obligation. Use recital references when they clarify edge cases.
- Avoid generic advice. Provide implementable controls and concrete evidence artifacts.
