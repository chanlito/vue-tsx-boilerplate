import { component } from 'vue-tsx-support';
import { VBtn, VLayout, VFlex, VContainer } from 'vuetify-tsx';
import GreetingCard from '@/components/GreetingCard';

export default component({
  name: 'Home',
  render() {
    return (
      <VContainer fill-height>
        <VLayout align-center justify-center>
          <VFlex>
            <GreetingCard message="Hello World">
              <VBtn color="accent" to={{ name: 'about' }}>
                Go to About
              </VBtn>
            </GreetingCard>
          </VFlex>
        </VLayout>
      </VContainer>
    );
  },
});
