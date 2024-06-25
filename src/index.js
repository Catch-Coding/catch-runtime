import Ctch from "catch-functions";

export default class Runtime {
  constructor(sandbox) {
    this.sandbox = sandbox;
  }

  sandboxRun(code) {
    this.sandbox.contentWindow.ctch = Ctch;
    this.sandbox.contentWindow.eval(code); // literally just eval the code.
    // will add more sandbox things later, including the catch-functions
  }
}
