import spawn from "cross-spawn";

export async function init() {
    spawn.sync('eslint', { stdio: 'inherit' });
}
