// import { observable } from 'mobx';
import CounterStore from "./models/Counter/CounterStore";

class RootStore {
  constructor() {
    this.counter = new CounterStore(this);
  }
}

export default RootStore;
