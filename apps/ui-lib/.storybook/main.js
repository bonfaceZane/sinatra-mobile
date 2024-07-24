/** @type{import("@storybook/react-native").StorybookConfig} */
module.exports = {
  stories: [
    "../components/**/*.stories.?(ts|tsx|js|jsx)",
    "../../native/app/**/*.stories.?(ts|tsx|js|jsx)",
    "../../../packages/ui/**/*.stories.?(ts|tsx|js|jsx)",
  ],
  addons: [
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-actions",
  ],
};
