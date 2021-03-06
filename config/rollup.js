const pkg = require('../package.json');

// 兼容 tezos-sign 和 @yugasun/tezos-sign
const name = pkg.name.split('/').pop();
const { version } = pkg;

const banner = `/*!
 * tezos-sign ${version} (https://github.com/yugasun/tezos-sign)
 * API https://github.com/yugasun/tezos-sign/blob/master/doc/api.md
 * Copyright 2017-${new Date().getFullYear()} yugasun. All Rights Reserved
 * Licensed under MIT (https://github.com/yugasun/tezos-sign/blob/master/LICENSE)
 */
`;

exports.name = name;
exports.banner = banner;
