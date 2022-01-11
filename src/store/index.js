import { createStore } from "vuex";
import state from "./state";
import actions from "./actions";
import mutation from "./mutation";
export default createStore({
  state: state,
  actions: actions,
  mutations: mutation,
});