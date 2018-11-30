const axios = require('axios');
const xml2js = require('xml2js');
const debug = require('debug')('app:goodreadsService');

const parser = xml2js.Parser({ explicitArray: false });
function goodreadsService() {
  function getBookById(id) {
    return new Promise((resolve, reject) => {
      axios.get(`https://www.goodreads.com/book/show/${id}.xml?key=7ELrSbYG2KWbnE3IJsmOQ`)
        .then((res) => {
          parser.parseString(res.data, (err, result) => {
            if (err) debug(err);
            debug(result);
            resolve(result.GoodreadsResponse.book);
          });
        })
        .catch((err) => {
          reject(err);
          debug(err);
        });
    });
  }

  return { getBookById };
}

module.exports = goodreadsService();
