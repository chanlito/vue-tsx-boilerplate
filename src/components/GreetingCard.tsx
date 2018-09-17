import PropTyps from 'vue-strict-prop';
import { componentFactory } from 'vue-tsx-support';
import { VCard, VCardText, VCardTitle } from 'vuetify-tsx';

import styles from './GreetingCard.module.styl';

export default componentFactory.create({
  props: {
    message: PropTyps(String).required,
  },
  render() {
    return (
      <VCard class={styles.card}>
        <VCardTitle primaryTitle>{this.message}</VCardTitle>
        <VCardText>{this.$slots.default}</VCardText>
      </VCard>
    );
  },
});
