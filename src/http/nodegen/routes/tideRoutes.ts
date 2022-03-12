import express from 'express';
import Router from 'express-promise-router';

import { celebrate } from 'celebrate';

import tideValidators from '../validators/tideValidators';
import TideDomain from '../../../domains/TideDomain';
import tideTransformOutputs from '../transformOutputs/tideTransformOutput';
import GenerateItExpressResponse from '@/http/nodegen/interfaces/GenerateItExpressResponse';

export default function () {
  const router = Router();

  /**
   * Operation ID: tideGet
   * Summary: weather search
   * Description: Search for weather objects
   */

  router.get(
    '/',

    celebrate(
      tideValidators.tideGet
    ) /* Validate the request data and return validation errors, options passed in via x-joi-options */,

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await TideDomain.tideGet(req.query),
        200,
        undefined,
        tideTransformOutputs.tideGet
      );
    }
  );

  return router;
}
