import { component } from 'vue-tsx-support';
import { VApp, VContent, VToolbar, VToolbarTitle } from 'vuetify-tsx';

const AppLayout = component({
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

export default AppLayout;
