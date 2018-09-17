import { component } from 'vue-tsx-support';
import { VBtn, VContainer, VFlex, VLayout } from 'vuetify-tsx';

export default component({
  name: 'About',
  render() {
    return (
      <VContainer fill-height>
        <VLayout align-center justify-center>
          <VFlex>
            <VBtn color="accent" to={{ name: 'home' }}>
              Go to Home
            </VBtn>
          </VFlex>
        </VLayout>
      </VContainer>
    );
  },
});
