import {Injectable, Logger} from '@nestjs/common';

@Injectable()
export class GithubDataService {

  async saveToDB(postBody) {
    Logger.log(postBody)
    const result = await Promise.resolve('omg')
    return result
  }
}
