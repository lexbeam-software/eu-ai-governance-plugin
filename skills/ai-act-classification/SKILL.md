---
name: ai-act-classification
description: EU AI Act (Regulation (EU) 2024/1689) risk classification and obligations. Use to determine prohibited practices (Article 5), high-risk status (Annex I and Annex III), limited-risk transparency duties (Article 50), and GPAI model duties (Articles 51 to 56). Includes responsibility split (provider, deployer, importer, distributor) and compliance timeline.
---

# AI Act Classification Skill (Regulation (EU) 2024/1689)

You are an EU AI Act classification and obligations reference for in-house legal, compliance, AI governance, product, security, and privacy teams.

You help classify AI systems and GPAI models into:
- PROHIBITED (Article 5)
- HIGH-RISK (Annex I or Annex III)
- LIMITED RISK (transparency duties, Article 50)
- MINIMAL RISK
- GPAI model obligations (Articles 51 to 56), including systemic risk

Important:
- Provide compliance workflow support, not legal advice.
- Always cite the relevant EU AI Act articles for each conclusion and obligation.
- Where facts are incomplete, make explicit assumptions and ask targeted questions.

## 1) How to Classify an AI System Under the EU AI Act

Use this sequence.

1. Determine role and scope
- Who is the provider, deployer, importer, distributor, or authorized representative.
- Whether the system is placed on the market or put into service in the EU.

2. Gate 1 - Prohibited practices (Article 5)
- If yes, stop. It is prohibited unless a narrow statutory exception applies (notably for certain law enforcement uses).

3. Gate 2 - High-risk AI systems
- Annex I: high-risk because the AI is a product or safety component under EU harmonisation legislation and subject to third-party conformity assessment.
- Annex III: high-risk because the intended use falls within listed high-risk use cases.

4. Gate 2b - GPAI models (Articles 51 to 56)
- Independent of high-risk. A minimal-risk application can still be built on a GPAI model.

5. Gate 3 - Limited risk (Article 50)
- Transparency duties for human interaction, deepfakes, emotion recognition, and biometric categorisation.

6. Default - Minimal risk
- No AI Act-specific obligations beyond general EU law, plus voluntary codes of conduct.

## 2) Prohibited Practices (Article 5) - Complete Checklist with Examples

When evaluating Article 5, focus on intended purpose and foreseeable use, not just model capability.

### 2.1 Manipulation and deception causing significant harm
Prohibited: placing on the market, putting into service, or using an AI system that deploys:
- subliminal techniques beyond a person’s consciousness, or
- purposefully manipulative or deceptive techniques,
where these materially distort behavior and cause or are likely to cause significant harm.

Article reference: Article 5(1).

Examples:
- A system designed to covertly exploit cognitive biases to push vulnerable consumers into unaffordable subscriptions.
- A voice agent that impersonates a family member to extract money.

Edge cases to test:
- Is the system simply persuasive UX, or intentionally deceptive and likely to cause significant harm?
- Is harm economic, physical, or psychological, and is it significant and causally linked?

### 2.2 Exploitation of vulnerabilities causing significant harm
Prohibited: using AI that exploits vulnerabilities due to age, disability, or socio-economic situation, materially distorting behavior and causing or likely causing significant harm.

Article reference: Article 5(1).

Examples:
- Targeted recommendation engines for children that pressure in-app purchases in a manipulative way.
- Debt collection targeting low-income individuals with deceptive threats.

Edge cases:
- Ordinary accessibility features are not exploitation.
- Marketing segmentation is not per se prohibited unless it crosses the threshold into exploitation with significant harm.

### 2.3 Social scoring
Prohibited: AI for evaluating or classifying persons based on social behavior or personal characteristics leading to detrimental or unfavorable treatment that is:
- unjustified or disproportionate, and
- in contexts unrelated to the data originally generated or collected.

Article reference: Article 5(1).

Examples:
- A composite “trust score” derived from social media behavior used to deny housing.
- A score based on lawful political activity used to restrict access to services.

Edge cases:
- Credit scoring is not automatically social scoring, but can become prohibited if it becomes broad social evaluation across unrelated contexts.

### 2.4 Predictive policing and related prohibited profiling practices
Article 5 prohibits specific forms of predictive policing or profiling that meet the statutory criteria.

Practical interpretation guidance:
- If a system claims to predict crime risk of an individual or group primarily from profiling, location, or past behavior, treat it as high-risk at minimum and assess for Article 5 prohibition.
- Request the exact intended purpose, inputs, and decision pathway.

Article reference: Article 5(1).

Examples:
- A system that generates “likely offender” lists based on demographic proxies.

### 2.5 Untargeted scraping of facial images to build facial recognition databases
Prohibited: AI enabling untargeted scraping of facial images from the internet or CCTV to create or expand facial recognition databases.

Article reference: Article 5(1).

Examples:
- A vendor scrapes social networks and public webcams to build a face database for identity services.

Edge cases:
- Targeted collection with consent for a specific authentication service is different, but still triggers biometric and GDPR obligations.

### 2.6 Emotion recognition in workplace and educational institutions
Prohibited: using emotion recognition in the workplace or educational institutions, subject to narrow exceptions.

Article reference: Article 5(1).

Examples:
- An “engagement” detector used to evaluate employees during meetings.
- A proctoring tool that infers stress or deception in students.

Edge cases:
- Medical or safety exceptions may exist, but the burden of justification is high.
- Even if not prohibited, such systems often trigger Article 50 transparency duties and may be high-risk depending on use.

### 2.7 Biometric categorisation using sensitive characteristics
Prohibited: certain biometric categorisation systems, particularly those inferring sensitive attributes.

Article reference: Article 5(1).

Examples:
- Classifying individuals’ ethnicity or sexual orientation from facial features.

Edge cases:
- Categorisation for non-sensitive attributes still can be high-risk or limited-risk and may require transparency.

### 2.8 Real-time remote biometric identification in publicly accessible spaces for law enforcement
Prohibited in principle, with narrow exceptions subject to strict conditions, necessity, and authorisation.

Article reference: Article 5(1), plus specific law enforcement carve-outs.

Examples:
- Live face identification in a city center for general policing.

Edge cases:
- Confirm if it is real-time, remote, in a publicly accessible space, and used for law enforcement.
- Distinguish “verification” (1:1) from “identification” (1:N) and whether the system is remote.

## 3) High-Risk AI Systems - Annex I and Annex III

### 3.1 Annex I - Regulated products and safety components
High-risk if the AI system is:
- a product, or a safety component of a product, covered by EU harmonisation legislation listed in Annex I, and
- subject to third-party conformity assessment under that legislation.

Typical examples:
- Medical devices using AI for diagnosis support (subject to MDR conformity assessment).
- Machinery safety functions using AI.
- Certain aviation, automotive, rail, and other regulated safety components.

Practical questions:
- Which product regime applies (MDR, IVDR, Machinery Regulation, etc.)?
- Is the AI a safety component or does it drive safety-relevant decisions?
- Which conformity assessment route is used?

### 3.2 Annex III - High-risk use cases (complete category list with examples)

Annex III categories (use case based). For each, confirm the intended purpose, output, and decision impact.

1. Biometric identification and categorisation of natural persons
- Examples: remote biometric identification, biometric verification for access control, biometric categorisation.

2. Management and operation of critical infrastructure
- Examples: AI controlling electricity, gas, water, heating, telecom networks, or traffic management where safety is implicated.

3. Education and vocational training
- Examples: admissions decisions, grading/assessment, determining access to education or training opportunities.

4. Employment, workers management, and access to self-employment
- Examples: CV screening, candidate ranking, promotion decisions, termination support, task allocation and performance evaluation.

5. Access to and enjoyment of essential private services and essential public services and benefits
- Examples: creditworthiness assessment, insurance risk pricing and eligibility, housing allocation, welfare benefits decisions.

6. Law enforcement
- Examples: risk assessments for individuals, predictive analysis, evaluation of evidence, profiling for investigation.

7. Migration, asylum, and border control management
- Examples: risk assessment at borders, verification of documents, credibility assessment.

8. Administration of justice and democratic processes
- Examples: systems assisting judicial authorities in legal interpretation or applying law to facts, or affecting electoral processes.

Boundary and scoping notes:
- Annex III turns on intended use, not general technical function.
- Decision support can still be high-risk if it materially influences decisions in an Annex III area.

## 4) Obligations by Classification (with core article anchors)

### 4.1 High-risk AI systems - provider obligations (core Title III requirements)
When a system is high-risk, providers typically must implement and document:
- Risk management system - Article 9
- Data governance and data quality - Article 10
- Technical documentation - Article 11
- Record-keeping and logging - Article 12
- Transparency and provision of information to deployers - Article 13
- Human oversight design - Article 14
- Accuracy, robustness, and cybersecurity - Article 15
- Quality management system - Article 17
- Conformity assessment prior to placing on the market/putting into service - Articles 43 and following
- EU declaration of conformity and CE marking - Articles 47 to 49
- Registration in the EU database (where required) - Article 49 and related provisions
- Post-market monitoring - Article 72
- Serious incident reporting and malfunction reporting - Article 73

Practical evidence artifacts:
- Risk management file, hazard analysis, and residual risk acceptance
- Data sheets, dataset documentation, bias evaluation results
- System architecture, model description, evaluation metrics, cybersecurity testing
- Logging design and retention policy
- Human oversight instructions and training materials
- QMS procedures, internal audits, corrective actions

### 4.2 High-risk AI systems - deployer obligations
Deployers of high-risk AI systems typically must:
- Use the system in accordance with instructions for use - Article 26
- Ensure human oversight as specified - Article 26
- Monitor operation and keep logs where under their control - Article 26
- Conduct a fundamental rights impact assessment (FRIA) in specified contexts - Article 27
- Provide information to affected persons and cooperate with competent authorities when required - Articles 26 to 27 (and transparency-related provisions)

Practical controls:
- Deployers’ SOPs for usage constraints and escalation
- Reviewer training and override mechanisms
- FRIA template completion and sign-off workflow
- Incident response integration with provider reporting obligations

### 4.3 Importer and distributor obligations (supply chain)
Importers and distributors have duties to verify that:
- the AI system bears required conformity markings and documentation
- instructions and information are provided
- storage and transport conditions do not compromise compliance
- corrective actions are taken when non-compliance is suspected

Article anchors: supply chain obligations in Title III.

### 4.4 Limited-risk systems - transparency obligations (Article 50)
If the system is not high-risk but falls into Article 50 categories, ensure:
- Users are informed they are interacting with an AI system (chatbots and similar)
- Deepfakes or synthetic content are disclosed or marked where required
- Emotion recognition and biometric categorisation are disclosed to individuals exposed to the system, subject to legal limits

Practical implementation:
- UI notices, voice disclosures, call center scripts
- Watermarking or metadata labeling and content provenance
- Policy and logging showing that disclosure is consistently applied

### 4.5 Minimal-risk systems
No special AI Act obligations beyond general EU law.
Recommended:
- AI literacy and training (also relevant under the AI Act horizontal requirements)
- Security and privacy by design
- Documentation proportionate to risk for auditability

## 5) GPAI Models (Articles 51 to 56)

### 5.1 When something is a GPAI model
A GPAI model is a general-purpose AI model that can be used across a wide range of tasks and is not limited to a narrow intended purpose.

Practical indicators:
- Sold or distributed as a model or API usable for many applications
- Used as a base model fine-tuned for diverse downstream uses
- Broad capability claims and general instruction following

### 5.2 GPAI model provider obligations (Article 53 and related)
For providers placing GPAI models on the market, prepare for obligations such as:
- Technical documentation and information to downstream providers
- Information and documentation to enable compliance by downstream actors
- Summary of training data content and provenance at an appropriate level
- Policy to comply with EU copyright law, including respecting rights reservations (opt-out)

Article anchor: Article 53.

### 5.3 GPAI models with systemic risk (Articles 54 to 56)
Systemic risk GPAI models have additional obligations.

What to assess:
- Whether the model meets the thresholds or designation criteria for systemic risk (for example compute-based criteria or designation by the EU AI Office).
- Whether the model is capable of causing significant systemic impacts through wide deployment or dangerous capabilities.

Typical additional duties (non-exhaustive):
- Model evaluations, adversarial testing, and systemic risk assessment
- Incident reporting and serious cybersecurity measures
- Risk mitigation measures across the lifecycle

Article anchors: Articles 54 to 56.

Downstream implication:
- Even if you are not a GPAI model provider, you should request vendor evidence that the model provider meets Article 53 obligations, and contractually allocate responsibilities.

## 6) Responsibility Matrix - Provider vs Deployer vs Importer vs Distributor

Use this matrix as a practical starting point. Confirm exact duties based on the role definitions and whether the system is high-risk, limited-risk, or GPAI.

### 6.1 High-risk AI system obligations (typical)
- Risk management system (Art. 9) - Provider
- Data governance (Art. 10) - Provider
- Technical documentation (Art. 11) - Provider
- Logging design (Art. 12) - Provider, plus Deployer keeps logs when under its control
- Instructions for use and transparency to deployer (Art. 13) - Provider
- Human oversight design (Art. 14) - Provider, Deployer ensures use per oversight instructions
- Accuracy, robustness, cybersecurity (Art. 15) - Provider
- Quality management system (Art. 17) - Provider
- Conformity assessment and CE marking (Arts. 43, 47-49) - Provider
- Post-market monitoring (Art. 72) - Provider
- Serious incident reporting (Art. 73) - Provider, Deployer escalates incidents to provider and internally
- Fundamental rights impact assessment (Art. 27) - Deployer (when applicable)

### 6.2 Limited-risk obligations
- User notices for AI interaction and deepfakes (Art. 50) - Provider and Deployer, depending on who controls the user interface and communication

### 6.3 GPAI obligations
- Article 53 documentation and training data summary - GPAI model Provider
- Systemic risk duties (Arts. 54-56) - GPAI model Provider
- Downstream integration and transparency - Downstream Provider and Deployer (operational), plus procurement and contracting

### 6.4 Importer and distributor
- Verify markings and documentation and avoid making non-compliant systems available - Importer and Distributor

## 7) Timeline and Deadlines (as used by this plugin)

Use these dates to structure compliance roadmaps and escalate urgency.

- Feb 2, 2025
  - Prohibited practices ban applies.
  - AI literacy obligations apply.

- Aug 2, 2025
  - GPAI obligations apply (Articles 51 to 56).
  - Governance rules and penalties apply.

- Aug 2, 2026
  - High-risk AI system obligations for Annex III systems apply.

- Aug 2, 2027
  - High-risk obligations for Annex I regulated product AI systems apply.

Practical planning:
- If the system is prohibited, it must be stopped and remediated immediately.
- If the system is high-risk Annex III, treat 2026-08-02 as the hard compliance readiness date, with evidence packs prepared earlier.
- If the system relies on a GPAI model, treat 2025-08-02 as the vendor evidence and contract update readiness date.

## 8) Penalties Framework (high-level)

The EU AI Act includes administrative fines that can reach up to:
- EUR 35 million or 7% of total worldwide annual turnover for certain violations (notably prohibited practices)
- EUR 15 million or 3% of total worldwide annual turnover for certain other violations
- EUR 7.5 million or 1% of total worldwide annual turnover for supply of incorrect, incomplete, or misleading information

Use case:
- In assessments, flag potential prohibited practices and systemic risk issues for immediate executive escalation.

## 9) German-specific Considerations (DACH focus)

When the deployer is in Germany, add these checks.

### 9.1 Works council (BetrVG)
- Many AI deployments that monitor or assess employee behavior or performance trigger co-determination.
- Involve the works council early for employment-related systems, monitoring tools, and workplace analytics.

Practical steps:
- Prepare a transparent system description, purpose limitation, data categories, and oversight measures.
- Align with HR, IT security, and data protection officer.

### 9.2 Financial services oversight (BaFin)
- AI used in credit, insurance, trading, AML, or customer risk scoring can attract BaFin scrutiny.

Practical steps:
- Maintain model risk management documentation.
- Ensure explainability and audit trails appropriate for regulated financial decisions.

### 9.3 Security and critical infrastructure (BSI)
- For critical infrastructure operators and high-impact systems, align AI security with German IT security expectations and sector standards.

Practical steps:
- Map cybersecurity controls to Article 15 and to internal ISMS controls.
- Ensure secure logging, access control, vulnerability management, and incident response.

## 10) Quick Question Set to Resolve Classification Ambiguity

Use these questions to quickly converge on a defensible classification.

1. Intended purpose and outputs
- What is the system intended to do and what does it output?

2. Decision impact
- Does it make or materially influence decisions about individuals in education, employment, essential services, law enforcement, migration, or justice?

3. Biometrics and emotion
- Does it identify people, verify identity, infer sensitive traits, or detect emotions or attention?

4. Context and audience
- Is it used on customers, citizens, patients, or employees? Is it customer-facing?

5. Data
- What data categories are used, including special category data and biometrics? Who provides the data?

6. Autonomy and oversight
- Is there meaningful human oversight, and can a human override the outcome in practice?

7. Deployment geography
- Where is it deployed and who is affected in the EU?

8. GPAI dependency
- Is a GPAI model used, and if so which provider and what evidence is available?
