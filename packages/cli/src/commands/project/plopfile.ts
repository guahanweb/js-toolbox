import { NodePlopAPI } from 'node-plop';
import { generator } from './plop-templates/package';

export default function (plop: NodePlopAPI) {
    plop.setGenerator('project', generator);
}
