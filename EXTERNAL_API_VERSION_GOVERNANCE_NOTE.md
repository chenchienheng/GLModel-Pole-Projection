# External API Version Governance Note

> Durable note for handling external API versions in the XLEN / Xuanling repository weave.
> Purpose: prevent silent reliance on outdated defaults when a newer supported version already exists.

---

## 0. Core Rule

External interface versions must be:
- verified against the current upstream source
- explicitly pinned when possible
- reviewed for breaking changes before upgrade
- treated as external interface constraints, not internal sovereignty fields

---

## 1. Governance Principle

### 1.1 Never assume the default is the target
A platform default may remain available for compatibility, but it should not automatically be treated as the preferred operating version.

### 1.2 Verify before pinning
Before adopting or retaining an API version, verify:
- currently supported versions
- default fallback behavior
- breaking-change notes
- upgrade path

### 1.3 Separate interface-version fields from internal system fields
External API versions belong to interface governance.
They do not define the XLEN / Xuanling upper-order runtime sovereignty.

---

## 2. Practical Operating Rule

For every external connector or API-sensitive integration:
1. verify upstream supported versions
2. verify whether current integration is using a default or explicit pin
3. if a newer supported version exists, evaluate upgrade readiness
4. record the chosen version and rationale in durable notes
5. monitor breaking changes as part of periodic maintenance

---

## 3. Handling Rule

### preserve current version
Use when:
- newer version exists
- but upgrade has not yet been validated against runtime impact

### pin newer version
Use when:
- newer supported version is verified
- breaking changes are understood
- integration path is ready

### isolate legacy version
Use when:
- old behavior is needed temporarily for compatibility
- but should not remain the invisible default forever

---

## 4. Immediate Effect

This note establishes a repository-side policy:
- do not rely blindly on old external defaults
- do not upgrade blindly either
- verify, pin, compare, then adopt

---

## 5. Suggested Next Artifact

- `EXTERNAL_INTERFACE_VERSION_REGISTER.md`

Suggested schema:
- interface_name
- current_supported_versions
- default_version_behavior
- target_version
- pin_status
- breaking_change_reviewed
- last_verified_time

---

## 6. Status

- api_version_governance_started: true
- explicit_pin_rule_established: true
- register_pending: true
- return_to_00: true
