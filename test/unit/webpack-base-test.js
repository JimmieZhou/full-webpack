
const assert = require('assert');

describe('webpack.base.js test case', () => {
    const baseConfig = require('../../lib/webpack.base.js')

    it('entry', () => {
        !assert.equal(baseConfig.entry.index, '/Users/jingyuan/Desktop/interview/8、webpack/geektime-webpack-course/code/chapter04/full-webpack/test/smoke/template/src/index/index.js');
        !assert.equal(baseConfig.entry.search, '/Users/jingyuan/Desktop/interview/8、webpack/geektime-webpack-course/code/chapter04/full-webpack/test/smoke/template/src/search/index.js');
    });
});