import bus from '../utils/bus';

const EVENT_NAME = 'modal:toggle';

export default function useModal() {
  function open(payload = {}) {
    bus.emit(EVENT_NAME, {
      ...payload,
      status: true,
    });
  }

  function close(payload = {}) {
    bus.emit(EVENT_NAME, {
      ...payload,
      status: false,
    });
  }

  function listen(callback) {
    bus.on(EVENT_NAME, callback);
  }

  function off(callback) {
    bus.on(EVENT_NAME, callback);
  }

  return {
    open, close, listen, off,
  };
}
