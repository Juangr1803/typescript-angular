type CallBackError = Error | null;
type CallBack = (error: CallBackError, response: Object) => void;
type SendRequest = (cb: CallBack) => void;

const sedRequest: SendRequest = (cb: CallBack): void => {
  if (cb) {
    cb(null, { message: 'Successfull' });
  }
};
