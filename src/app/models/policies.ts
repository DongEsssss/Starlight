import { ObjectLoader } from "../utils/objectloader";

export class policyList extends ObjectLoader {
  createdAt ?: string;
  id ?: string;
  permission ?: string;
  obligations ?: string; 
  extensibleProperties ?: string;
  prohibitions ?: string; 
  inheritsFrom ?: string;
  assigner ?: string;
  assignee ?: string;
  target ?: string;
  type ?: string;
  value: any;
}

export class policy extends ObjectLoader{
  prohibitions ?: string;
  obligations ?: string; 
  extensibleProperties ?: string;
  inheritsFrom ?: string;
  assigner ?: string;
  assignee ?: string;
  target ?: string;
  type ?: string;
  policylist ?: Array<policyList>
}

export class permissions extends ObjectLoader{
  edctype: string;
  uid : string;
  target : string;
  action : string;
  assignee  : string;
  assigner  : string;
  contraints : JSON;
  duties : JSON;
  policylist ?: Array<policyList>
}

export class action extends ObjectLoader{
  type : string;
  includeIn  : string; 
  constraint  : string;
  permissionList ?: Array<permissions>
  policylist ?: Array<policyList>
}

// export class policyList extends ObjectLoader{
//   createdAt: string;
//   id ?: string;
//   policy ?: {
//       permissions: [
//           {
//               edctype ?: string;
//               uid ?: string;
//               target ?: string;
//               action ?: {
//                   type ?: string;
//                   includedIn ?: string;
//                   constraint ?: string;
//               },
//               assignee ?: string
//               assigner ?: string
//               constraints ?: string
//               duties ?: string
//           }
//       ],
//       prohibitions ?: string
//       obligations ?: string
//       extensibleProperties ?: string
//       inheritsFrom ?: string
//       assigner ?: string
//       assignee ?: string
//       target ?: string
//       type ?: {
//           policytype ?: string
//       }
//   }
// }