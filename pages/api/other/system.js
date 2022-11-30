const si = require('systeminformation');


export default async function handler(req, res) {
    let _data = await si.getStaticData();
    await res.status(200).json(_data);
  }  