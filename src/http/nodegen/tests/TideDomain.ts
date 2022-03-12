import { baseUrl, request } from '@/http/nodegen/tests';
import * as supertest from 'supertest';

export class TestTideDomain {
  // tideGet
  //
  public static tideGetPath(root: string = baseUrl): string {
    return `${root}/tide`;
  }

  public static tideGet(root: string = baseUrl): supertest.Test {
    return request.get(this.tideGetPath(root));
  }
}
