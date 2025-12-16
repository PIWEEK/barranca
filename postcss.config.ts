import postcssJitProps from 'postcss-jit-props';
import OpenProps from 'open-props';

module.exports = {
  // only vars used are in build output
  plugins: [postcssJitProps(OpenProps)],
};
