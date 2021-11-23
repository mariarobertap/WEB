import { GunDTO } from "../../dataTransferObject/DTOs";
import AkInvernal from "../../images/guns/akInvernal.png";
import AkEmperatriz from "../../images/guns/akImperatriz.png";
import MDragaoChines from "../../images/guns/m4DragaoChines.png";
import SGCyrex from "../../images/guns/sgAsimov.png";
import AWPRaposa from "../../images/guns/awpRaposa.png";
import Ups02 from '../../images/guns/ups02.png'
import Awp02 from '../../images/guns/awp02.png'
import Ump02 from '../../images/guns/ump02.png'
import m1602 from '../../images/guns/m1602.png'
import Awp03 from '../../images/guns/awp03.png'
import Famas03  from '../../images/guns/famass_03.png'
import { ClassifiedRarity, ConsumerRarity, ConvertRarity } from "./GunRaritys";

export const GunArray01: GunDTO[] = [
  {
    description: "Ak-47 - Frontside Misty",
    gunImage: AkInvernal,
    gunValue: 240.0,
    gunRarity: ClassifiedRarity,
  },
  {
    description: "Ak-47 - The Empress",
    gunImage: AkEmperatriz,
    gunValue: 450.0,
    gunRarity: ConvertRarity,
  },
  {
    description: "M4A4 - 龍王 (Dragon King)",
    gunImage: MDragaoChines,
    gunValue: 100.0,
    gunRarity: ClassifiedRarity,
  },
  {
    description: "SG 553 - Cyrex",
    gunImage: SGCyrex,
    gunValue: 83.0,
    gunRarity: ClassifiedRarity,
  },
  {
    description: "Ak-47 Campo",
    gunImage: SGCyrex,
    gunValue: 13.0,
    gunRarity: ConsumerRarity,
  },
  {
    description: "AWP - Hyper Beast",
    gunImage: AWPRaposa,
    gunValue: 438.0,
    gunRarity: ConvertRarity,
  },
];

export const GunArray02: GunDTO[] = [
  {
    description: "Ups - Neon noir",
    gunImage: Ups02,
    gunValue: 232.0,
    gunRarity: ClassifiedRarity,
  },
  {
    description: "Awp - Atheris",
    gunImage: Awp02,
    gunValue: 650.0,
    gunRarity: ConvertRarity,
  },
  {
    description: "UMP-45 - Blaze",
    gunImage: Ump02,
    gunValue: 50.0,
    gunRarity: ClassifiedRarity,
  },
  {
    description: "M16 - Cyrex",
    gunImage: m1602,
    gunValue: 320.0,
    gunRarity: ClassifiedRarity,
  },
  {
    description: "Ak-47 Campo",
    gunImage: SGCyrex,
    gunValue: 13.0,
    gunRarity: ConsumerRarity,
  },
  {
    description: "AWP - Hyper Beast",
    gunImage: AWPRaposa,
    gunValue: 438.0,
    gunRarity: ConvertRarity,
  },
];

export const GunArray03: GunDTO[] = [
  {
    description: "Ak-47 - Frontside Misty",
    gunImage: AkInvernal,
    gunValue: 240.0,
    gunRarity: ClassifiedRarity,
  },
  {
    description: "Ak-47 - The Empress",
    gunImage: AkEmperatriz,
    gunValue: 450.0,
    gunRarity: ConvertRarity,
  },
  {
    description: "M4A4 - 龍王 (Dragon King)",
    gunImage: MDragaoChines,
    gunValue: 100.0,
    gunRarity: ClassifiedRarity,
  },
  {
    description: "SG 553 - Cyrex",
    gunImage: SGCyrex,
    gunValue: 13.0,
    gunRarity: ClassifiedRarity,
  },
  {
    description: "Famas - RainBow",
    gunImage: Famas03,
    gunValue: 150.0,
    gunRarity: ConsumerRarity,
  },
  {
    description: "AWP - Dragon Lore",
    gunImage: Awp03,
    gunValue: 1500.0,
    gunRarity: ConvertRarity,
  },
];
