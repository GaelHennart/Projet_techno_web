export class CreateAuthorDto {
    firstName: string;
    lastName: string;
    biography?: string;
  }

export class UpdateAuthorDto {
    firstName?: string;
    lastName?: string;
    biography?: string;
  }
  