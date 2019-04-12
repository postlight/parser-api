import Mercury from '@postlight/mercury-parser';

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

  // Black listing

  const blacklist = [
    'https://sspai.com/',
    'https://www.nikonpassion.com',
    'https://m.weibo.cn',
    'https://mp.weixin.qq.com/',
  ];

  for (let index = 0; index < blacklist.length; index += 1) {
    if (url.includes(blacklist[index])) {
      return cb(
        null,
        corsSuccessResponse({
          title: null,
          content: null,
          author: null,
          date_published: null,
          lead_image_url: null,
          dek: null,
          next_page_url: null,
          url: null,
          domain: null,
          excerpt: null,
          word_count: null,
          direction: null,
          total_pages: null,
          rendered_pages: null,
        })
      );
    }
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
