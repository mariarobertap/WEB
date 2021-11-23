export interface GunRarity {
    description: string,
    color: string,
}

export interface GunDTO {
    description: string,
    gunImage: string,
    gunValue: number,
    gunRarity: GunRarity,
}

export interface CaseDTO {
    description: string,
    caseImage: string,
    caseValue: number,
    caseGuns: GunDTO[],
}