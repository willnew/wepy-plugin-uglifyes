import path from 'path';
import uglify from 'uglify-js';

export default class {
  constructor(config = {}) {
    this.setting = Object.assign({}, {
      filter: /\.js$/,
      options: { fromString: true },
    }, config);
  }

  apply (op) {
    const { output, next, file, code } = op;
    const { setting: { filter, options } } = this;

    if (filter.test(file)) {
      output && output({ file, action: '压缩' });
      const result = uglify.minify(code, options);
      for (let key in rst) {
        Object.assign(op, { key: rst[key] });
      }
    }

    next();
  }
}
