// Global jest mock for MutationObservers
const mutationObserverMock = jest.fn(function MutationObserver(callback) {
  this.observe = jest.fn();
  this.disconnect = jest.fn();
  this.trigger = (mockedMutationsList) => {
    callback(mockedMutationsList, this);
  };
});
global.MutationObserver = mutationObserverMock;