import { DefaultLayout } from '@/layouts';
import { component } from 'vue-tsx-support';
import { VBtn, VContainer, VFlex, VLayout } from 'vuetify-tsx';

const About = component({
  name: 'About',
  render() {
    return (
      <DefaultLayout>
        <VContainer fill-height>
          <VLayout align-center justify-center>
            <VFlex>
              <VBtn color="accent" to={{ name: 'home' }}>
                Go to Home
              </VBtn>
            </VFlex>
          </VLayout>
        </VContainer>
      </DefaultLayout>
    );
  },
});

export default About;
