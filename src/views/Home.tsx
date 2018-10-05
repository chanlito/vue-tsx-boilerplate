import GreetingCard from '@/components/GreetingCard';
import { AppLayout } from '@/layouts';
import { component } from 'vue-tsx-support';
import { VBtn, VContainer, VFlex, VLayout } from 'vuetify-tsx';

const Home = component({
  name: 'Home',
  render() {
    return (
      <AppLayout>
        <VContainer fill-height>
          <VLayout align-center justify-center>
            <VFlex>
              <GreetingCard message="Hello World">
                <VBtn color="accent" to={{ name: 'about' }}>
                  Go to About
                </VBtn>
                <VBtn to={{ name: 'secret', query: { password: 'secret' } }}>
                  Go to Secret
                </VBtn>
              </GreetingCard>
            </VFlex>
          </VLayout>
        </VContainer>
      </AppLayout>
    );
  },
});

export default Home;
