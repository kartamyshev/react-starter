class EventManager {

  private listeners: any = {};

  public subscribe(eventName: string, callback: (data: any) => void) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(callback);
  }

  public publish(eventName: string, payload: any) {
    if (this.listeners[eventName]) {
      this.listeners[eventName].forEach((cb: (payload: any) => {}) => {
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
