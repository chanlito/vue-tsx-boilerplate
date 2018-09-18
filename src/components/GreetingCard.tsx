import PropTyps from 'vue-strict-prop';
import { component } from 'vue-tsx-support';
import { VCard, VCardText, VCardTitle } from 'vuetify-tsx';

import styles from './GreetingCard.module.styl';

export default component({
  name: 'GreetingCard',
  props: {
    message: PropTyps(String).required,
  },
  render() {
    return (
      <VCard class={[styles.card, styles.cardGlobal]}>
        <VCardTitle primaryTitle>{this.message}</VCardTitle>
        <VCardText>{this.$slots.default}</VCardText>
      </VCard>
    );
  },
});
