import program from 'commander';
import { Version } from './utils/constants';
import init from './utils/install'

program.command('init')                            //加命令 
  .description('init template')
  .alias('i')
  .action(() => {
    init()
  })

program.version(Version, '-v --version').parse(process.argv);  //加 option
