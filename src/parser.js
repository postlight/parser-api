import Parser from '@postlight/parser';

import {
  corsSuccessResponse,
  corsErrorResponse,
  runWarm,
} from './utils/index.ts';

const parser = async ({ queryStringParameters }, context, cb) => {
  const { url } = queryStringParameters;

  const result = await Parser.parse(url);

  return cb(
    null,
    result
      ? corsSuccessResponse(result)
      : corsErrorResponse({ message: 'There was an error parsing that URL.' })
  );
};

export default runWarm(parser);
