
const assert = require('assert');

describe('webpack.base.js test case', () => {
    const baseConfig = require('../../lib/webpack.base.js')

    it('entry', () => {
        assert.equal(baseConfig.entry.index.indexOf('full-webpack/test/smoke/template/src/index/index.js')>-1,true);
        assert.equal(baseConfig.entry.search.indexOf('full-webpack/test/smoke/template/src/search/index.js')>-1,true);
    });
});