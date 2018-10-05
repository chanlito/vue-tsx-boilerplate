import { AppLayout } from '@/layouts';
import { component } from 'vue-tsx-support';
import { VCard, VCardText, VContainer, VFlex, VLayout } from 'vuetify-tsx';

const Secret = component({
  name: 'Secret',
  render() {
    return (
      <AppLayout>
        <VContainer>
          <VLayout>
            <VFlex>
              <VCard>
                <VCardText>
                  <p>You did not see this.</p>
                </VCardText>
              </VCard>
            </VFlex>
          </VLayout>
        </VContainer>
      </AppLayout>
    );
  },
});

export default Secret;
