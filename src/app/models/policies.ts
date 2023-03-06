export class policy {
  policy_id !: string
  created_at !: string
  policy_type !: string
  inherits_from !: string
  assignee !: string
  assigner !: string
}

export class policyJson {
  permissions !: JSON
  prohibitions !: JSON
  duties !: JSON
  extensible_properties !: JSON
}
