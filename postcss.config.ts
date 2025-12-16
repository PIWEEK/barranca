import postcssJitProps from 'postcss-jit-props';
import OpenProps from 'open-props';
import postcssCustomMedia from 'postcss-custom-media';

module.exports = {
  // only vars used are in build output
  plugins: [postcssJitProps(OpenProps), postcssCustomMedia()],
};
