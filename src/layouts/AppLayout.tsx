import { componentFactory } from 'vue-tsx-support';
import { VApp, VContent, VToolbar, VToolbarTitle } from 'vuetify-tsx';

export default componentFactory.create({
  name: 'AppLayout',
  render() {
    return (
      <VApp>
        <VToolbar app dark color="primary">
          <VToolbarTitle>Vue is awesome!</VToolbarTitle>
        </VToolbar>
        <VContent>{this.$slots.default}</VContent>
      </VApp>
    );
  },
});
