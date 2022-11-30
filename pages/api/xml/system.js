var convert = require('xml-js');
const si = require('systeminformation');

export default async function handler(req, res) {
    let _data = await si.getStaticData();
    let _xml = convert.json2xml(_data, {compact: true, spaces: 4});
    res.end(_xml)
  }  