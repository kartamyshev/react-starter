interface IListeners {
  [ key: string ]: Array<unknown>;
}

class EventManager {

  private listeners: IListeners = {};

  public subscribe(eventName: string, callback: (data: unknown) => void) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(callback);
  }

  public publish(eventName: string, payload: unknown) {
    if (this.listeners[eventName]) {
      this.listeners[eventName].forEach((cb: (payload: unknown) => {}) => {
        cb(payload);
      });
    }
  }

  public getListeners = function() {
    return this.listeners;
  };

  public getListenersByEvent = function(eventName: string) {
    return this.listeners[eventName];
  };
}

export const eventManager = new EventManager();
