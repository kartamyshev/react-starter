function EventEmitter() {

  const listeners = {};

  this.sub = function(eventName, callback) {
    listeners[eventName] = listeners[eventName] || [];
    listeners[eventName].push(callback);
  };

  this.pub = function(eventName, payload) {
    if (listeners[eventName]) {
      listeners[eventName].forEach(cb => {
        cb(payload);
      });
    }
  };

  this.getListeners = function() {
    return listeners;
  };

  this.getListenersByEvent = function(eventName) {
    return listeners[eventName];
  };
}

export const eventEmitter = new EventEmitter();
