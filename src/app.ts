import { init, service } from './service';
import { writeToDBImpl } from './dependency';

init(writeToDBImpl);
service();