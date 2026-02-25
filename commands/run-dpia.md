---
description: Run a Data Protection Impact Assessment (DPIA) tailored for AI systems. Covers GDPR Art. 35 and adds AI Act aligned checks.
argument-hint: "<AI system description or link> [--lang de]"
---

# /run-dpia -- DPIA for AI Systems (GDPR plus AI Act)

> If you see unfamiliar placeholders or need to check which tools are connected, see [CONNECTORS.md](../CONNECTORS.md).

Conduct a Data Protection Impact Assessment (DPIA) tailored for AI systems. This workflow covers GDPR Article 35 requirements and adds AI specific sections that align with EU AI Act governance expectations.

**Important**: This command supports compliance work but does not provide legal advice. The resulting DPIA must be reviewed and approved by your Data Protection Officer (DPO) or qualified counsel.

## Invocation

```
/run-dpia
/run-dpia <short description>
/run-dpia --lang de
```

If `--lang de` is provided, ask questions and generate the DPIA document in German.

## Workflow

### Step 1: Intake and Scope

Ask for the minimum context needed to scope the DPIA:

1. **AI system name and owner** (product team, business unit)
2. **AI system description** (what it does, model type, key components)
3. **Intended purpose** (business objective, user value)
4. **Deployment context** (internal tool, customer facing, workplace, public sector, regulated sector)
5. **Geography** (EU/EEA countries, cross border use)
6. **Data types processed**
   - Personal data categories
   - Special categories (health, biometrics, ethnicity, political views, etc.)
   - Criminal offense data
   - Children data
7. **Data subjects** (customers, employees, applicants, patients, students, citizens)
8. **Lifecycle**
   - Training or fine tuning
   - Validation and testing
   - Inference and monitoring
9. **Main actors and roles**
   - Controller(s), joint controller(s), processor(s)
   - AI Act role hypothesis: provider, deployer, importer, distributor
10. **Links and attachments** (architecture diagram, data flow, model card, DPA, vendor docs)

If the user cannot provide all items, proceed with assumptions and list them explicitly.

### Step 2: Systematic Description of Processing (GDPR Art. 35(7)(a))

Produce a structured description that is specific enough for DPO review:

- **Processing overview**: what is processed, by whom, and for what outputs
- **Data sources**: direct collection, third parties, public sources, generated data
- **Data flow**: collection, ingestion, storage, training, inference, sharing, deletion
- **Model and pipeline**
  - Model type (rules, ML, LLM, recommender, biometric system, etc.)
  - Training approach (from scratch, fine tuning, RAG, prompt only)
  - Use of external APIs or hosted models
- **Decision points**: where the system influences or makes decisions
- **Recipients**: internal users, customers, vendors, authorities
- **International transfers**: where data and model operations occur
- **Retention**: retention schedule for inputs, logs, labels, and outputs

### Step 3: Necessity and Proportionality (GDPR Art. 35(7)(b))

Assess whether the processing is necessary and proportionate to the stated purpose:

1. **Purpose limitation**: is the purpose specific and documented?
2. **Lawful basis**: identify and justify lawful basis per processing stage
3. **Data minimization**: can you reduce categories, granularity, retention, or access?
4. **Special category handling**: additional safeguards and justification
5. **Transparency**
   - Notice to data subjects
   - Meaningful information about logic where applicable
6. **Data subject rights**: access, rectification, erasure, objection, restriction, portability
7. **Security and confidentiality**: TOMs under GDPR Art. 32
8. **Vendor and processor governance**: Art. 28 terms, sub processors, audit rights

### Step 4: Risk Assessment for Data Subjects (GDPR Art. 35(7)(c))

Identify and evaluate risks to rights and freedoms of natural persons.

Use a simple matrix and keep it consistent:

- **Likelihood**: Low / Medium / High
- **Severity**: Low / Medium / High
- **Risk rating**: combine likelihood and severity

Cover baseline privacy risks plus AI specific risks:

#### Baseline GDPR risk areas
- Unlawful access or disclosure
- Excessive collection or secondary use
- Inaccurate data leading to harm
- Unfair denial of rights or lack of transparency
- Cross border transfer risks and government access

#### AI specific risk areas
- **Bias and discrimination**: disparate impact, proxy variables, historical bias
- **Opacity and lack of explainability**: inability to provide meaningful explanations
- **Automation bias**: humans over rely on system outputs
- **Automated decision making impacts**: significant effects on individuals
- **Model errors and hallucinations**: false statements, harmful recommendations
- **Profiling and inference**: sensitive attribute inference
- **Data leakage**: memorization, prompt injection, training data extraction
- **Security threats**: model inversion, membership inference, poisoning
- **Feedback loops**: self reinforcing outcomes, drift that increases harm
- **Emergent behavior**: unexpected capabilities, misuse pathways

### Step 5: AI Specific Additions (Beyond Standard DPIA)

#### 5A. Training Data Assessment
Ask and document:
- Training and fine tuning dataset sources and licensing
- Representativeness of affected populations
- Labeling process and quality controls
- Bias testing methods and results
- Data lineage and documentation
- Use of synthetic data and rationale

#### 5B. Transparency and Explainability Evaluation
Document:
- What explanations can be provided to different audiences (user, data subject, regulator)
- Model documentation available (model card, system card)
- Known limitations, confidence signaling, and uncertainty communication
- Logging and traceability for decisions and outputs

#### 5C. Automated Decision Making Assessment (GDPR Art. 22)
Determine whether the system involves solely automated decision making with legal or similarly significant effects.

If yes or uncertain, document:
- Where the decision is made and what the effects are
- Human involvement and whether it is meaningful
- Contestability and appeal process
- Legal basis or explicit consent where required
- Safeguards: right to obtain human intervention, express viewpoint, challenge decision

#### 5D. Fundamental Rights Impact Considerations (AI Act aligned)
Assess impacts on fundamental rights, including:
- Human dignity
- Non discrimination and equality
- Privacy and data protection
- Freedom of expression and information
- Workers rights and workplace surveillance concerns
- Rights of the child (if applicable)

#### 5E. Feedback Loops and Emergent Behavior
Document:
- Monitoring plan for drift and bias over time
- Human feedback channels and incident reporting
- Change management for model updates and prompts
- Abuse and misuse monitoring, red teaming practices

### Step 6: Risk Mitigation Measures (GDPR Art. 35(7)(d))

For each material risk, propose specific mitigations. Separate technical and organizational controls.

#### Technical measures (examples)
- Data minimization, pseudonymization, encryption, access controls
- Differential privacy or privacy preserving training where feasible
- Output filtering, policy enforcement, safety classifiers
- Explainability tools and decision logging
- Model cards, dataset documentation, evaluation reports
- Security testing: red teaming, adversarial testing, prompt injection defenses

#### Organizational measures (examples)
- Clear roles and accountability, RACI
- Human oversight design, second pair of eyes for high impact cases
- Review and escalation paths for complaints and incidents
- Training and AI literacy for users and operators
- Supplier due diligence and contractual safeguards
- Audit trail retention and evidence pack readiness

Residual risk should be reassessed after mitigations.

### Step 7: Consultation and Sign Off Requirements

Determine which consultations are required or recommended:

- **DPO**: consult the DPO and record recommendations
- **Security**: security review and threat modeling
- **Legal and compliance**: confirm lawful basis, Art. 22 safeguards, transparency
- **Works council (Germany)**: if employee monitoring, performance management, or workplace AI is involved, flag consultation and co determination requirements under BetrVG
- **Supervisory authority prior consultation (GDPR Art. 36)**: if high residual risk remains and cannot be mitigated, prepare prior consultation package

### Step 8: Produce the DPIA Document (Ready for DPO Review)

Generate a DPIA document using the output structure below. If information is missing, include a clear TODO list.

## Output Format

Provide the completed DPIA as a structured document:

```
# Data Protection Impact Assessment (DPIA) - AI System

## 1. Administrative Information
- System name:
- Owner:
- DPIA date:
- Version:
- Reviewer(s):
- DPO consulted: Yes/No (date, notes)
- AI Act role hypothesis: Provider/Deployer/Other

## 2. Summary
- Intended purpose:
- Key decisions supported:
- Data subjects:
- Personal data categories:
- Special categories involved: Yes/No
- High level risk rating before mitigations:
- High level residual risk rating:

## 3. Systematic Description of Processing (GDPR Art. 35(7)(a))
- What data is processed:
- Sources:
- Data flow:
- Storage locations:
- Recipients:
- International transfers:
- Retention:
- Security controls in place:

## 4. Necessity and Proportionality (GDPR Art. 35(7)(b))
- Purpose limitation:
- Lawful basis by processing stage:
- Data minimization analysis:
- Transparency and notices:
- Data subject rights handling:
- Processor governance (Art. 28):

## 5. Risk Assessment (GDPR Art. 35(7)(c))
### 5.1 Risk Matrix
- Likelihood scale:
- Severity scale:

### 5.2 Identified Risks
For each risk:
- Risk description:
- Affected data subjects:
- Likelihood (L/M/H):
- Severity (L/M/H):
- Risk rating:
- Existing controls:
- Residual risk:

## 6. AI Specific Assessment (AI aligned DPIA extensions)
### 6.1 Training Data Assessment
- Datasets and sources:
- Representativeness:
- Bias testing:
- Data lineage:

### 6.2 Transparency and Explainability
- Documentation available:
- Explanation to data subjects:
- Known limitations:

### 6.3 Automated Decision Making (GDPR Art. 22)
- Solely automated decisions with significant effects: Yes/No/Unclear
- Safeguards and human intervention:

### 6.4 Fundamental Rights Considerations
- Dignity:
- Non discrimination:
- Privacy:
- Freedom of expression and information:
- Workplace and workers rights:

### 6.5 Feedback Loops and Emergent Behavior
- Monitoring plan:
- Incident reporting:
- Change management:

## 7. Mitigation Measures (GDPR Art. 35(7)(d))
- Technical measures:
- Organizational measures:
- Implementation owners and due dates:

## 8. Residual Risk and Decision
- Residual risk assessment:
- Go/no go recommendation:
- Conditions for deployment:

## 9. Consultation and Approvals
- DPO opinion and date:
- Works council consultation needed: Yes/No
- Prior consultation with supervisory authority needed: Yes/No

## 10. Open Items and Evidence
- TODO list:
- Evidence and references (links, attachments):
```

## Notes

- If the system may be high risk under the EU AI Act, recommend running `/classify-ai-risk` and linking the results into the DPIA.
- If cross border transfers are involved, flag the need for a transfer impact assessment and vendor review.
- Always separate what is known from assumptions.

---

**Important:** This assessment is an orientation tool, not legal advice. Classifications must be validated by qualified legal counsel before compliance decisions. Regulatory content last reviewed February 2026.
