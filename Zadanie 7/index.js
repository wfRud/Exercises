// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')

// returns 'www.codewars.com?page=1'
// removeUrlAnchor('www.codewars.com?page=1')

function removeUrlAnchor(url) {
  const format = /[#]/;
  format.test(url) ? url.slice(0, url.indexOf("#")) : url;
}
removeUrlAnchor("www.codewars.com#about");
// removeUrlAnchor("www.codewars.com?page=1");
