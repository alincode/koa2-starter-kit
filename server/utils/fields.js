import MsgResponse from './MsgResponse';
import _ from 'lodash';
var debug = require('debug')('bc:utils:fields');

export function pickFields(data, arr) {
    if (!(arr instanceof Array)) throw new MsgResponse.Err(config.err.DATA_MUST_BE_ARRAY);

    if (typeof data !== 'object') {
        debug('BAD options %s %j', typeof data, data);
        throw new MsgResponse.Err(config.err.DATA_MUST_BE_OBJECT);
    }

    var options = {};
    _.map(arr, function (item) {
        if (data[item] !== undefined) {
            options[item] = data[item];
        }
    });

    debug('out put options %j', options);
    return options;
}

export function validateFields(object, paths) {
    debug('欄位驗證： %j in %j', object, paths);

    // paths 裡面的每一個值，都要 hsaIn object, 不能是 undefined or '' （可以是null）
    let _validate = _
        .chain(paths)
        .every(function (path) {
            return _.hasIn(object, path)
                && _.get(object, path) !== undefined
                && _.get(object, path) !== '';
        })
        .value();
    debug('_validate', _validate);

    // 驗證失敗拋出錯誤
    if (_validate === false) {
        debug('缺少欄位 %j in %j', object, paths);
        debug(config.err.FIELD_REQUIRED);
        throw new MsgResponse(config.err.FIELD_REQUIRED);
    }
    return object;
}
