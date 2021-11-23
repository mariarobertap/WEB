import { CaseDTO } from "../../dataTransferObject/DTOs";
import { GunArray01, GunArray02, GunArray03 } from "./Guns";
import ShineCase from "../../images/cases/case.png";

export function SeedCases() {
  let cases: CaseDTO[] = [
    {
      description: "Duelist",
      caseImage: ShineCase,
      caseValue: 0.00,
      caseGuns: GunArray01,
    },
    {
      description: "Sun Case",
      caseImage: ShineCase,
      caseValue: 350.0,
      caseGuns: GunArray02,
    },
    {
      description: "Dream",
      caseImage: ShineCase,
      caseValue: 550.0,
      caseGuns: GunArray03,
    },
  ];

  return cases;
}
