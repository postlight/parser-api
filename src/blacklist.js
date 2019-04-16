export const URL_BLACKLIST = [
  'https://sspai.com/',
  'https://www.nikonpassion.com',
  'https://m.weibo.cn',
  'https://mp.weixin.qq.com/',
  'https://github.com',
  'forums.adobe.com',
  'https://www.volkskrant.nl',
  'https://www.managementimpact.nl',
];

export const EMPTY_MERCURY_RESPONSE = {
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
};

export function isURLBlacklisted(url) {
  for (let index = 0; index < URL_BLACKLIST.length; index += 1) {
    if (url.includes(URL_BLACKLIST[index])) {
      return true;
    }
  }

  return false;
}
