import { randomBytes } from 'crypto'

const generateRandomId = () => {
  return randomBytes(4).toString('hex');
}

export default generateRandomId;
