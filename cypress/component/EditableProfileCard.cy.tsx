import { EditableProfileCard } from '../../src/widgets/Profile/ui/EditableProfileCard/EditableProfileCard'
import { TestProvider } from '../../src/shared/config/testsDecorators/mainDecorator'

describe('EditableProfileCard.cy.tsx', () => {
  it('playground', () => {
    // cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' })
    cy.mount(
      <TestProvider
        options={{
          initialState: {
            // user: {
            //   authData: {
            //     id: '1'
            //   }
            // },
            profile: {
              currentDataForm: {
                id: '1',
                firstname: 'TEST',
                lastname: 'USER',
                age: 36,
                currency: 'EUR',
                country: 'Ukraine',
                city: 'Kiev',
                username: 'testuser',
                avatar: 'https://cdnn21.img.ria.ru/images/146095/02/1460950266_491:0:3627:3136_1920x0_80_0_0_b2fa213b2de09667975ba6598ae34edb.jpg'
              }
            }
          }
        }}
      >
        <EditableProfileCard />
      </TestProvider>
    )
  })
})
