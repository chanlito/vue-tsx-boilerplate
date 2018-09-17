import { componentFactory } from 'vue-tsx-support';
import { VApp, VContent } from 'vuetify-tsx';

export default componentFactory.create({
  name: 'DefaultLayout',
  render() {
    return (
      <VApp>
        <VContent>{this.$slots.default}</VContent>
      </VApp>
    );
  },
});
