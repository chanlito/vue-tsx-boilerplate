import { AppLayout, DefaultLayout } from '@/layouts';
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  render() {
    return this.$route.meta.layout === 'app' ? (
      <AppLayout>
        <router-view />
      </AppLayout>
    ) : (
      <DefaultLayout>
        <router-view />
      </DefaultLayout>
    );
  },
});
