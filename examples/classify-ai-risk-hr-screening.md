# Example: /classify-ai-risk, HR Resume Screening AI

> This is a sample output showing what the `/classify-ai-risk` command produces. The system, company, and details below are fictional.

---

## EU AI Act Classification, Result

**System**: TalentScreen AI, Automated Resume Screening and Shortlisting
**Your role(s)**: Deployer
**Deployment context**: EU (Germany, Austria), internal HR use, employment sector

### Classification Badge

**HIGH-RISK (Annex III)**

---

## 1) Facts Used and Assumptions

- **Inputs reviewed**: Product datasheet (vendor), DPA excerpt, internal use case description
- **Key facts**:
  - TalentScreen AI receives job applications (CVs, cover letters) and scores candidates on a 1-100 fit scale
  - Scores are used by HR recruiters to shortlist candidates; candidates below 40 are auto-rejected without human review
  - System processes name, education, work history, age (inferred from dates), nationality (inferred from language and location)
  - Vendor is a US-based SaaS provider; inference runs on AWS eu-central-1 (Frankfurt)
  - 12,000 applications processed per year across 3 entities
- **Assumptions**:
  - The vendor is the AI Act **provider** (develops and markets the system)
  - Your organization is the **deployer** (uses the system under your authority for recruitment)
  - No biometric data is processed
  - The auto-rejection threshold (score < 40) constitutes a decision with significant effect on individuals
- **Open questions**:
  - Does the vendor use applicant data for model training or improvement? (not addressed in current DPA)
  - What bias testing has the vendor performed on EU applicant populations?

---

## 2) Prohibited Practices Check (Article 5)

- **Determination**: Not prohibited
- **Relevant Article 5 points**: None triggered
- **Rationale**: The system does not use subliminal techniques, exploit vulnerabilities of specific groups, perform social scoring, or involve biometric identification. It is a recruitment tool with a legitimate purpose. However, if the scoring mechanism were found to systematically exploit socio-economic vulnerability to cause significant harm, this determination should be revisited.

---

## 3) High-Risk Check

### Annex I (regulated products)
- **Determination**: No
- **Why**: Resume screening software is not a safety component of a product covered by EU harmonisation legislation in Annex I.

### Annex III (high-risk use cases)
- **Applicable category**: **Category 4, Employment, workers management, and access to self-employment**
  - Specifically: AI systems intended to be used for recruitment or selection of natural persons, in particular to place targeted job advertisements, to analyse and filter job applications, and to evaluate candidates
- **Why it matches**: TalentScreen AI filters and scores job applications. It directly influences which candidates proceed to interviews and which are rejected. This falls squarely within Annex III, point 4(a).
- **Boundary notes**: Even if the system were positioned as "decision support" only, the auto-rejection of candidates below score 40 means the system is making or materially influencing employment decisions. Removing the auto-rejection threshold and requiring human review for all candidates would not change the classification (the system still filters applications), but would improve the human oversight posture.

---

## 4) GPAI Model Check (Articles 51-56)

- **Is it a GPAI model?**: Unknown, the vendor markets it as a specialized recruitment AI, but the underlying model architecture is not disclosed.
- **Systemic risk?**: Unlikely at this stage.
- **Provider obligations implicated**: If the vendor uses a GPAI foundation model internally, the GPAI provider has separate obligations under Articles 53-55. As deployer, you should request confirmation.
- **Downstream actions needed**:
  - Request vendor disclosure on whether a GPAI model underpins the system
  - If yes, request the GPAI technical documentation summary and copyright compliance evidence
  - Include a contractual right to receive GPAI-related documentation updates

---

## 5) Applicable Obligations and Who Owns Them

### Provider obligations (high-risk systems)
- Risk management system, Article 9, Owner: Vendor (Provider)
- Data governance and data quality, Article 10, Owner: Vendor (Provider)
- Technical documentation, Article 11, Owner: Vendor (Provider)
- Record-keeping and logging, Article 12, Owner: Vendor (Provider)
- Transparency and provision of information to deployers, Article 13, Owner: Vendor (Provider)
- Human oversight design, Article 14, Owner: Vendor (Provider)
- Accuracy, robustness, and cybersecurity, Article 15, Owner: Vendor (Provider)
- EU declaration of conformity, Article 47, Owner: Vendor (Provider)
- CE marking, Article 48, Owner: Vendor (Provider)
- Post-market monitoring, Article 72, Owner: Vendor (Provider)
- Serious incident reporting to authorities, Article 73, Owner: Vendor (Provider)

### Deployer obligations
- Use the system in accordance with instructions for use, Article 26(1), Owner: Your organization
- Assign competent persons for human oversight, Article 26(2), Owner: Your organization
- Ensure input data is relevant and representative, Article 26(4), Owner: Your organization
- Monitor operation and report malfunctions to provider, Article 26(5), Owner: Your organization
- Conduct a fundamental rights impact assessment, Article 27, Owner: Your organization
- Inform affected persons that they are subject to a high-risk AI system, Article 26(11), Owner: Your organization
- Inform workers' representatives and affected workers, Article 26(7), Owner: Your organization
- **Works council notification (Germany-specific)**: Inform and consult the Betriebsrat under BetrVG §87(1) No. 6 (technical monitoring) and potentially §95 (selection guidelines), Owner: Your organization + HR

---

## 6) Evidence and Documentation Checklist

| # | Artifact | Status | Owner |
|---|----------|--------|-------|
| 1 | Technical documentation and instructions for use (Arts. 11, 13) | Request from vendor | Vendor |
| 2 | Risk management file and hazard analysis (Art. 9) | Request from vendor | Vendor |
| 3 | Data governance and data quality documentation (Art. 10) | Request from vendor | Vendor |
| 4 | Logging and record-keeping design (Art. 12) | Verify access to logs | Vendor + You |
| 5 | Human oversight plan (Art. 14) | Draft internally, align with vendor design | You |
| 6 | Accuracy, robustness, cybersecurity evidence (Art. 15) | Request test reports | Vendor |
| 7 | Fundamental rights impact assessment (Art. 27) | Conduct internally | You |
| 8 | Works council consultation documentation | Initiate with HR/legal | You |
| 9 | Transparency notice to affected job applicants | Draft and publish | You |
| 10 | Post-market monitoring plan (Art. 72) | Request from vendor | Vendor |
| 11 | Serious incident reporting process (Art. 73) | Align internal process with vendor pathway | Both |

---

## 7) Timeline and Enforcement Dates

| Date | Milestone | Relevance to TalentScreen AI |
|------|-----------|------------------------------|
| Feb 2, 2025 | Prohibited practices ban + AI literacy | Not prohibited; AI literacy training for HR recruiters should be in place |
| Aug 2, 2025 | GPAI obligations apply | Request GPAI disclosure from vendor |
| **Aug 2, 2026** | **Annex III high-risk obligations apply** | **Full deployer compliance required by this date** |
| Aug 2, 2027 | Annex I high-risk (regulated products) | Not applicable |

---

## 8) Practical Next Steps (30/60/90 Days)

### 0-30 days (triage)
- [ ] Notify vendor that you require high-risk system documentation per Articles 11-15
- [ ] Remove or review the auto-rejection threshold (score < 40), ensure meaningful human review for all rejections
- [ ] Brief the Betriebsrat and initiate consultation under BetrVG §87(1) No. 6
- [ ] Draft a transparency notice for job applicants informing them that AI is used in the screening process

### 30-60 days (documentation and controls)
- [ ] Conduct fundamental rights impact assessment (Article 27)
- [ ] Assign a named human oversight officer for the recruitment AI
- [ ] Review vendor DPA for AI-specific gaps (training data use, audit rights, incident reporting)
- [ ] Establish an internal incident reporting path for recruiter-flagged issues (bias, errors, unexplainable rejections)

### 60-90 days (conformity readiness)
- [ ] Validate vendor-provided technical documentation against Article 11 requirements
- [ ] Implement logging review process, periodic spot-checks of scoring decisions
- [ ] Complete AI literacy training for all HR recruiters and hiring managers using TalentScreen AI
- [ ] Assemble initial evidence pack for this system (link: `/generate-evidence-pack --systems TalentScreen`)

---

## 9) Escalations

- **Works council**: Immediate consultation required. Deployment without Betriebsrat involvement in Germany risks injunctive relief and operational disruption.
- **Vendor cooperation**: If the vendor cannot provide Article 11-15 documentation, escalate to procurement and legal. Consider whether to continue the vendor relationship or seek alternatives.
- **Auto-rejection**: The auto-rejection threshold represents the highest-risk design choice in this system. If it cannot be removed, build a working appeal path and a human review step with clear criteria.

---

## Disclaimer

This output supports compliance workflows and does not constitute legal advice. Validate conclusions against the final text of Regulation (EU) 2024/1689, implementing acts, harmonised standards, and guidance from the EU AI Office and national competent authorities.
