export enum ActiveStatusEnum {
  Active = 1,
  UnActive = 2,
}

export enum GenderEnum {
  MALE = 1,
  FEMALE = 2,
}

export enum ShipStatusEnum {
  SHIPPED = 1,
  UNSHIPPED = 2,
}

export const ActiveStatusDisplay = [
  { id: ActiveStatusEnum.Active, name: 'Active' },
  { id: ActiveStatusEnum.UnActive, name: 'UnActive' },
];
