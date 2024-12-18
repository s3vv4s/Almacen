

class ManagerError extends Error {
  public code?: number;
  constructor(mesage: string,code?:number) {
    super(mesage);
    this.code = code;
    this.message = mesage;
    Object.setPrototypeOf(this, ManagerError.prototype);
  }
}

export default ManagerError;