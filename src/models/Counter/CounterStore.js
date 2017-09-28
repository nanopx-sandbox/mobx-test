import { observable, action } from 'mobx';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class CounterStore {
  @observable
  count = 0;

  @observable
  isLoading = false;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action.bound
  onIncrement() {
    this.count += 1;
  }

  @action.bound
  onDecrement() {
    this.count -= 1;
  }

  @action.bound
  async onAsyncIncrement(ms = 1000) {
    this.isLoading = true;
    await wait(ms);
    this.onIncrement();
    this.isLoading = false;
  }
}

export default CounterStore;
