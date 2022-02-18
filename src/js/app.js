// TODO: write your code here
export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const checkSymbol = /^[^0-9_-][A-za-z0-9-_]*[^0-9_-]$/.test(this.name);
    const checkNumber = /\d{3,}/.test(this.name);
    if (checkSymbol && !checkNumber) {
      return true;
    }
    return false;
  }
}
