import { component } from 'vue-tsx-support';
import { VApp, VContent } from 'vuetify-tsx';

const DefaultLayout = component({
  name: 'DefaultLayout',
  render() {
    return (
      <VApp>
        <VContent>{this.$slots.default}</VContent>
      </VApp>
    );
  },
});

export default DefaultLayout;
