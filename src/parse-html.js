import Mercury from '@postlight/mercury-parser';

import {
  corsSuccessResponse,
  corsErrorResponse,
  lambdaResponse,
  runWarm,
} from './utils';

const parseHtml = async ({ body, headers }, context, cb) => {
  const { url, html } = JSON.parse(body);
  const secretToken = 'F794A060-946C-4317-A01B-A50CD5EA8D3C';

  if (!headers['x-api-key'].includes(secretToken)) {
    return lambdaResponse({
      json: {},
      statusCode: 401,
    });
  }

  const result = await Mercury.parse(url, { html, fallback: false });

  return cb(
    null,
    result
      ? corsSuccessResponse(result)
      : corsErrorResponse({ message: 'There was an error parsing that URL.' })
  );
};

export default runWarm(parseHtml);
