import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { existsSync } from 'fs';
import { dirname, join } from 'path';

const root = process.cwd();
const { main, module, types, dependencies = {}, peerDependencies = {} } = require(join(root, 'package.json'));
const src = join(root, 'src');
const dir = existsSync(src) ? src : root;
const input = join(dir, 'index.ts');

export default {
  input: existsSync(input) ? input : `${input}x`,
  output: [
    {
      file: join(root, main),
      format: 'cjs',
      sourcemap: true
    },
    {
      file: join(root, module),
      format: 'es',
      sourcemap: true
    }
  ],
  external: [
    ...Object.keys(dependencies),
    ...Object.keys(peerDependencies)
  ],
  plugins: [
    typescript({
      rootDir: dir,
      declarationDir: join(root, dirname(types))
    }),
    resolve()
  ]
};
