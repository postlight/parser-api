import Mercury from '@postlight/mercury-parser';
import { isURLBlacklisted, EMPTY_MERCURY_RESPONSE } from './blacklist';

import {
  corsSuccessResponse,
  corsErrorResponse,
  lambdaResponse,
  runWarm,
} from './utils';

const mercuryParser = async (
  { queryStringParameters, headers },
  context,
  cb
) => {
  const { url } = queryStringParameters;
  const secretToken = 'F794A060-946C-4317-A01B-A50CD5EA8D3C';

  if (!headers['x-api-key'].includes(secretToken)) {
    return lambdaResponse({
      json: {},
      statusCode: 401,
    });
  }

  // Blacklist

  if (isURLBlacklisted(url)) {
    return cb(null, corsSuccessResponse(EMPTY_MERCURY_RESPONSE));
  }

  // ---

  const result = await Mercury.parse(url);

  return cb(
    null,
    result
      ? corsSuccessResponse(result)
      : corsErrorResponse({ message: 'There was an error parsing that URL.' })
  );
};

export default runWarm(mercuryParser);
