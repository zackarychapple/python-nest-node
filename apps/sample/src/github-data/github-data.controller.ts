import {Body, Controller, Get, Logger, Post} from '@nestjs/common';
import {GithubDataService} from "./github-data.service";
import {spawn} from "child_process";
const path = require('path');

@Controller('github-data')
export class GithubDataController {

  constructor(private readonly githubDataService: GithubDataService) {
  }

  @Get('commit-hook')
  callPythonScript() {
    const filePath = path.join(__dirname,'../../../omg.py')
    console.log(filePath)
    let dataToSend
    const python = spawn('python3', [filePath, 'test']);
    python.stdout.on('data', (data) => {
      dataToSend = data.toString();
    })

    python.stderr.on('data', (data)=>{
      Logger.error('data error', data)
    })
    python.on('exit', (code)=>{
      Logger.log('data: ' + dataToSend);
      Logger.log('exited '+ code);
    })
  }

  @Post()
  async postGitHubData(@Body() postBody) {
    const result = await this.githubDataService.saveToDB(postBody)
    return result
  }
}
