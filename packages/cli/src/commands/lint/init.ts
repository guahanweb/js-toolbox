import spawn from "cross-spawn";

export async function init() {
    spawn.sync('eslint', ['--ext', '.ts,.tsx,.js', '--fix', './src/**/*.{ts,tsx,js,json}'], { stdio: 'inherit' });
}
