import { ErrorBag, FieldFlagsBag } from 'vee-validate';
import Vue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    fields: FieldFlagsBag;
    errors: ErrorBag;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {}
}
