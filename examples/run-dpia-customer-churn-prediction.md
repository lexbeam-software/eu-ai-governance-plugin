# Example: /run-dpia, Customer Churn Prediction Model

> This is a sample output showing what the `/run-dpia` command produces. The system, company, and details below are fictional.

---

# Data Protection Impact Assessment (DPIA), AI System

## 1. Administrative Information

| Field | Detail |
|-------|--------|
| System name | ChurnGuard, Customer Churn Prediction and Retention Targeting |
| Owner | Marketing & Customer Success (Business), Data Science Team (Technical) |
| DPIA date | February 2026 |
| Version | 1.0, Initial assessment |
| Reviewer(s) | Data Protection Officer, Head of Data Science, Legal Counsel |
| DPO consulted | Yes, February 10, 2026 (preliminary review) |
| AI Act role hypothesis | Deployer (in-house developed model) and Provider (if made available to subsidiary entities) |

## 2. Summary

| Field | Detail |
|-------|--------|
| Intended purpose | Predict which customers are likely to cancel their subscription in the next 90 days and trigger targeted retention campaigns (discounts, outreach, service upgrades) |
| Key decisions supported | Retention campaign targeting, discount eligibility, customer success team prioritization |
| Data subjects | ~180,000 active B2B and B2C customers across Germany, Austria, and the Netherlands |
| Personal data categories | Name, email, company, subscription tier, usage metrics, support ticket history, payment history, login frequency, feature adoption scores |
| Special categories involved | No |
| High-level risk rating before mitigations | Medium |
| High-level residual risk rating | Low-Medium |

## 3. Systematic Description of Processing (GDPR Art. 35(7)(a))

### Processing overview
ChurnGuard ingests customer behavioral data from the CRM (HubSpot), product analytics (Mixpanel), and billing system (Stripe). A gradient-boosted decision tree model (XGBoost) trained on historical churn data produces a churn probability score (0-100) for each customer monthly. Customers scoring above 70 are flagged for retention intervention.

### Data sources
- **CRM**: customer profile, contract details, support tickets, NPS scores
- **Product analytics**: login frequency, feature usage, session duration, API call volume
- **Billing**: payment history, plan changes, failed payments, invoice status
- **Generated data**: churn probability score, feature importance weights, risk segment label

### Data flow
1. **Extraction**: Nightly ETL from HubSpot, Mixpanel, Stripe into internal data warehouse (BigQuery, eu-west3)
2. **Feature engineering**: Aggregation and transformation in dbt pipeline
3. **Model training**: Monthly retraining on 24 months of historical data (BigQuery ML)
4. **Inference**: Monthly batch scoring; results written to CRM as custom field
5. **Action**: Customer success team reviews flagged accounts; marketing automation triggers email campaigns
6. **Retention**: Scores retained for 24 months; training data retained for 36 months; raw logs deleted after 12 months

### Model and pipeline
- **Model type**: XGBoost classifier (gradient boosted trees)
- **Training approach**: Supervised learning on historical churn labels
- **External APIs**: None, fully internal pipeline
- **Decision points**: Churn score > 70 triggers automated retention email sequence; score > 85 triggers manual customer success outreach

### Recipients
- Internal: Customer Success team, Marketing Automation (HubSpot workflows), Data Science team
- External: None, scores are not shared with third parties

### International transfers
- All processing within EEA (BigQuery eu-west3, HubSpot EU instance)
- Mixpanel: EU data residency enabled; sub-processors verified

### Retention
| Data type | Retention period |
|-----------|-----------------|
| Raw behavioral data | 12 months |
| Feature-engineered training data | 36 months |
| Churn scores | 24 months |
| Model artifacts | Indefinite (versioned) |
| Action logs (who was targeted, what offer) | 36 months |

## 4. Necessity and Proportionality (GDPR Art. 35(7)(b))

### Purpose limitation
The processing purpose is specific: predict churn risk to enable proactive retention. Scores are not used for pricing, credit decisions, or any purpose beyond retention targeting.

### Lawful basis
- **Feature data collection**: Legitimate interest (Art. 6(1)(f)), the organization has a legitimate interest in understanding and reducing customer churn; customers reasonably expect their usage data to inform service improvements
- **Profiling and scoring**: Legitimate interest (Art. 6(1)(f)), balanced against data subject rights through the measures below
- **Retention campaign targeting**: Legitimate interest (Art. 6(1)(f)), offers and outreach are beneficial to customers; opt-out available

### Data minimization analysis
- Location data: Not collected. Adequate.
- Demographic data: Not used as features (name, email used only for identification, not model input). Adequate.
- Support ticket content: Only ticket count and category are used, not free-text content. Adequate.
- Payment data: Only payment status and plan tier, not payment method details. Adequate.
- **Recommendation**: Review whether session duration and login timestamps can be aggregated further (daily counts rather than per-session).

### Transparency and notices
- Privacy policy mentions "analytics to improve our service", **insufficient**. Does not specifically mention AI-based profiling or churn prediction.
- **Recommendation**: Update privacy policy to include: (a) use of automated profiling for retention purposes, (b) right to object to profiling, (c) meaningful information about the logic involved.

### Data subject rights
| Right | Implementation |
|-------|---------------|
| Access (Art. 15) | Customer can request their churn score and the factors that contributed to it via support ticket |
| Rectification (Art. 16) | Underlying data can be corrected in CRM; score recalculated in next monthly run |
| Erasure (Art. 17) | Full deletion pipeline exists; model retrained without erased data in next cycle |
| Objection to profiling (Art. 21) | Not currently implemented, **GAP** |
| Restriction (Art. 18) | Can be flagged in CRM to exclude from scoring |

### Processor governance (Art. 28)
- HubSpot: DPA in place, EU hosting, SCCs for limited US access
- Mixpanel: DPA in place, EU data residency
- Google BigQuery: DPA in place, eu-west3 region lock
- No additional sub-processors for the ML pipeline (fully internal)

## 5. Risk Assessment (GDPR Art. 35(7)(c))

### 5.1 Risk Matrix

| | Low Severity | Medium Severity | High Severity |
|---|---|---|---|
| **High Likelihood** | Medium | High | High |
| **Medium Likelihood** | Low | Medium | High |
| **Low Likelihood** | Low | Low | Medium |

### 5.2 Identified Risks

| # | Risk | Affected subjects | Likelihood | Severity | Rating | Existing controls | Residual risk |
|---|------|--------------------|-----------|----------|--------|-------------------|---------------|
| R1 | Inaccurate churn prediction leads to unwanted retention outreach (nuisance) | Customers | Medium | Low | Low | Human review for score > 85; email unsubscribe | Low |
| R2 | Model bias disadvantages specific customer segments (e.g., smaller accounts deprioritized) | SME customers | Medium | Medium | Medium | None currently | Medium |
| R3 | Feature drift causes model degradation; scores become unreliable | All customers | Low | Medium | Low | Monthly retraining | Low |
| R4 | Unauthorized internal access to churn scores used for purposes beyond retention (e.g., pricing, contract negotiation) | Customers | Low | High | Medium | Role-based access in CRM | Low-Medium |
| R5 | Lack of transparency, customers unaware of AI profiling | All customers | High | Medium | High | Privacy policy (insufficient) | High |
| R6 | No objection mechanism, customers cannot opt out of profiling | All customers | High | Medium | High | None | High |
| R7 | Score leakage to unauthorized recipients via CRM export | Customers | Low | Medium | Low | CRM export controls | Low |

## 6. AI-Specific Assessment

### 6.1 Training Data Assessment
- **Datasets**: 24 months of historical customer data (~180,000 customers, ~12,000 churn events)
- **Representativeness**: Training data covers all customer segments (B2B and B2C), all geographies (DE, AT, NL). Potential underrepresentation of recently acquired customer segments.
- **Bias testing**: Not formally conducted, **GAP**. Recommend fairness audit across customer size segments, geography, and acquisition channel.
- **Data lineage**: Documented in dbt lineage graph. Source systems are production databases.
- **Synthetic data**: Not used.

### 6.2 Transparency and Explainability
- **Documentation**: Internal model card exists (Data Science team wiki). Not shared with business stakeholders.
- **Explanation to data subjects**: Feature importance (SHAP values) can be generated per prediction. Not currently exposed to customers or customer success team.
- **Known limitations**: Model performs poorly on customers with < 3 months of history. Cold-start customers are excluded from scoring.
- **Logging**: All scores logged with timestamp, model version, and top-5 contributing features.

### 6.3 Automated Decision Making (GDPR Art. 22)
- **Solely automated decisions with significant effects**: Partially, the email retention campaign is triggered automatically for scores > 70. However, the effects (receiving a retention offer) are generally **beneficial** to the customer, not adverse.
- **Assessment**: Does not likely constitute a decision with legal or similarly significant effects under Art. 22. However, if churn scores were used to reduce service levels or deny benefits, this assessment would change.
- **Safeguards**: Human review exists for high-score accounts (> 85). Email campaigns include unsubscribe option.

### 6.4 Fundamental Rights Considerations
- **Dignity**: No impact, retention offers do not affect human dignity.
- **Non-discrimination**: Medium concern, if model systematically deprioritizes SME customers for retention, this could create unequal service quality. Requires bias audit.
- **Privacy**: Primary concern, profiling of customer behavior. Mitigated by data minimization and purpose limitation.
- **Freedom of expression**: No impact.
- **Workers' rights**: Not applicable (customer-facing system, not employee-facing).

### 6.5 Feedback Loops and Emergent Behavior
- **Monitoring plan**: Monthly model performance review (AUC, precision, recall). Quarterly business review of retention campaign effectiveness.
- **Feedback loop risk**: If retained customers change behavior (e.g., become more engaged due to intervention), the model may learn to score "successfully retained" customers as low-risk, masking the intervention effect. **Recommendation**: Track intervention as a feature or use causal inference methods.
- **Change management**: Model changes require Data Science lead approval and documentation in model registry.
- **Abuse monitoring**: Low risk, internal system with limited attack surface.

## 7. Mitigation Measures (GDPR Art. 35(7)(d))

### Technical measures
| # | Measure | Addresses risk | Owner | Due date |
|---|---------|----------------|-------|----------|
| T1 | Implement SHAP-based explainability dashboard for Customer Success team | R2, R5 | Data Science | Q2 2026 |
| T2 | Add fairness metrics to model evaluation pipeline (demographic parity across customer segments) | R2 | Data Science | Q2 2026 |
| T3 | Implement profiling opt-out flag in CRM; exclude flagged customers from scoring | R6 | Engineering | Q1 2026 |
| T4 | Add access audit logging for churn score field in CRM | R4 | IT Security | Q1 2026 |
| T5 | Implement intervention tracking to detect feedback loop effects | R3 | Data Science | Q3 2026 |

### Organizational measures
| # | Measure | Addresses risk | Owner | Due date |
|---|---------|----------------|-------|----------|
| O1 | Update privacy policy with AI profiling disclosure and Art. 21 objection right | R5, R6 | Legal/DPO | Q1 2026 |
| O2 | Publish internal acceptable use policy, churn scores may only be used for retention, not pricing or contract negotiation | R4 | Legal | Q1 2026 |
| O3 | Conduct formal bias audit before next model retraining | R2 | Data Science + DPO | Q2 2026 |
| O4 | Train Customer Success team on score interpretation, limitations, and escalation | R1, R2 | Data Science | Q1 2026 |
| O5 | Annual DPIA review and update | All | DPO | Q1 2027 |

## 8. Residual Risk and Decision

**Residual risk assessment**: Low-Medium after mitigations. The two highest risks (R5: transparency gap, R6: no objection mechanism) are addressed by measures O1 and T3, both targeted for Q1 2026. Bias risk (R2) requires ongoing monitoring.

**Go/no-go recommendation**: **Proceed with conditions**, implement Q1 2026 measures (privacy policy update, opt-out mechanism, acceptable use policy) before expanding the system to additional customer segments or geographies.

**Conditions for deployment**:
1. Privacy policy updated with profiling disclosure (O1), before next campaign cycle
2. Opt-out mechanism operational (T3), before next campaign cycle
3. Bias audit completed (O3), before next model retraining

## 9. Consultation and Approvals

| Consultation | Required | Status |
|-------------|----------|--------|
| DPO opinion | Yes | Preliminary review completed Feb 10, 2026. Final review pending after mitigations committed. |
| Works council consultation | No, system profiles customers, not employees | N/A |
| Prior consultation with supervisory authority (Art. 36) | No, residual risk can be mitigated to acceptable level | N/A |

## 10. Open Items and Evidence

### Open items
- [ ] Negotiate privacy policy update timeline with Marketing team
- [ ] Confirm Mixpanel data residency configuration with Engineering
- [ ] Schedule bias audit with external fairness consultant
- [ ] Confirm SHAP integration feasibility with current XGBoost pipeline version

### Evidence and references
- Model card: Data Science wiki (internal link)
- dbt lineage graph: Analytics repository
- HubSpot DPA: Legal drive, vendor contracts folder
- BigQuery DPA: Google Cloud console, compliance section
- Privacy policy (current version): Website footer link

---

## Disclaimer

This DPIA supports compliance workflows and does not constitute legal advice. The resulting assessment must be reviewed and approved by your Data Protection Officer and qualified counsel.
