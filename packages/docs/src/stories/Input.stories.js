import { Input } from '@nonius-software/vue'
import '@nonius-software/vue/dist/style.css'
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
  },

};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Input },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Input v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Email address',
  disabled: true,
}
// More on args: https://storybook.js.org/docs/vue/writing-stories/args

