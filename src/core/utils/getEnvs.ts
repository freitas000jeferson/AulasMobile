export const getEnv = (name: string): string => {
  const env = process.env[name];
  if (env) {
    console.log("ENV:", name, env)
    return env;
  }
  throw new Error(`não foi possivel encontrar a env selecionada [${name}]`);
};
