import Mercury from '@postlight/mercury-parser';

import { corsSuccessResponse, corsErrorResponse, runWarm } from './utils';

const mercuryParser = async ({ queryStringParameters }, context, cb) => {
  if (!queryStringParameters) {
    return cb(
      null,
      corsErrorResponse({
        message: 'Provide an URL in the query string: ?url=',
      })
    );
  }

  const { url } = queryStringParameters;

  const result = await Mercury.parse(url);

  return cb(
    null,
    result
      ? corsSuccessResponse(result)
      : corsErrorResponse({ message: 'There was an error parsing that URL.' })
  );
};

export default runWarm(mercuryParser);
