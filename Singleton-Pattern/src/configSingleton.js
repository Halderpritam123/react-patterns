let instance = null;

function createConfig() {
  return {
    appName: "MyApp",
    theme: "dark",
  };
}

export function getConfig() {
  if (!instance) {
    instance = createConfig();
  }
  return instance;
}
