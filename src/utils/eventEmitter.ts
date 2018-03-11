class EventEmitter {

  listeners: any = {};

  subscribe(eventName: string, callback: Function) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(callback);
  };

  publish(eventName: string, payload: any) {
    if (this.listeners[eventName]) {
      this.listeners[eventName].forEach((cb: Function) => {
        cb(payload);
      });
    }
  };

  getListeners = function() {
    return this.listeners;
  };

  getListenersByEvent = function(eventName: string) {
    return this.listeners[eventName];
  };
}

export const eventEmitter = new EventEmitter();
