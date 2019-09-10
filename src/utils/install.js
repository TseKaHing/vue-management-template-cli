import ora from 'ora';   //ora 一个命令行loading效果
import inquirer from 'inquirer'  //命令行交互
import downLoadGit from 'download-git-repo';  //github api用来下载github的模板

let init = async () => {
  // 下载模板 
  let loading = ora('fetching template......');
  let answer = await inquirer.prompt([
    {
      type: 'input',
      name: 'ProjectName',
      message: '项目名称：',
      default: 'vue-management-template-cli'
    }
  ]);
  // 项目名字
  let project = answer.ProjectName;
  loading.start();
  downLoadGit('jazzyXie/integrated_pro', process.cwd() + '/' + project, (err) => {
    if (err) {
      // console.log(err)
      return;
    }
    // console.log(process.cwd() + '/' + project)
    loading.succeed();
  });
}
export default init;