# Visual Identity Anchor Specification

> Durable anchor specification to ensure visual consistency for the
> ChatGPT_Image_2 external node.

## 0. Purpose

Addresses the identity consistency gap identified in the ChatGPT_Image_2
node validation (Issue #38). Defines explicit anchors for identity tracking
during the review step, ensuring the model's generation remains bound to a
verifiable reference rather than intrinsic memory.

## 1. Scope

### Face Anchor
- **Reference**: Standard Qin-Yi identity reference image.
- **Key Features**: Consistent facial structure, eye shape, and jawline.

### Temperament Anchor
- **Reference**: Calm, focused, and composed demeanor.
- **Key Features**: Avoid exaggerated expressions, overly dramatic
  lighting, or inconsistent stylistic flares that contradict the core persona.

### Variation Tolerance
- **Acceptable Variations**: Changes in lighting direction, environment, and
  clothing style that do not alter the core facial structure or temperament.
- **Unacceptable Variations**: Significant alterations to facial proportions,
  character age, or introduction of out-of-character expressions.

## 2. Failure Cases

- **Failure Case 1 (Identity Drift)**: The generated image features a face
  that cannot be definitively identified as Qin-Yi based on the reference
  anchor.
- **Failure Case 2 (Temperament Mismatch)**: The generated image exhibits
  an exaggerated or out-of-character expression (e.g., overly dramatic,
  comical, or aggressive) that contradicts the temperament anchor.
- **Failure Case 3 (Style Override)**: The requested style constraints
  overpower the identity anchor, resulting in a caricature or abstract
  representation that loses the core identity.

## 3. Review Checklist

Before accepting an output from the ChatGPT_Image_2 node, the Review Chain
(AXIS-05) must verify:

- [ ] Does the face match the structure defined in the face anchor?
- [ ] Is the temperament consistent with the established anchor?
- [ ] Are any variations within the defined tolerance limits?
- [ ] Does the overall composition respect the core identity without
      being overpowered by stylistic requests?

If any check fails, the output must be marked `return_failed` and routed
back for regeneration.
