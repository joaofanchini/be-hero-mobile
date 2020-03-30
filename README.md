Create project `expo init {project-name}`

Start `expo start`

### To emulate your app on your phone, just need:

- Install the Expo app on your phone from the Google Play or Apple Store - Then you start the application and with the QR code, that appears on the screen, you scann the QR Code to run on you phone.

--- PS: To emulate with a simulator, just following some instructions on: RockeatSeat emulator
--- When you don´t have these options to simulate your app, you can use the expo snake (least recommended) on the url snack.expo.io.

### About Expo / React Native

- Don´t have semantic tags as the HTML
  Common tag on the React Native World: <View> (like <div>)

- To style a View tag to need to pass the style attribute, indicanting the style function with StyleSheet object (StyleSheet.create() ). The style-sheet is demonstract by CSS.

- All the element on the React Native, have bu the way, thed display as Flex

- As the JavaFX, the CSS commands use the Camel Case Pattern, just some properties have different names (like padding and paddingHorizontal).

- In the ReactNative, we don´t have inherit style beetween elements. To style the elements, you need to specify all style to the component.

PS: Basic is one script js to view (activity)

Ps: How the application don´t have css (it is just to indicating the style on the app), the style is a script js.

\*\* React Native is a extend from the React, so many import that are essential ont the React application, must bee import too

PS: The concepts of components, state, immutabilty has the same too

### Package

- [React Navigation (package recommended when to use React Native / Expo to config navigation/routes)]('https://reactnavigation.org/docs/getting-started') - Have many ways of navigation (hamburger button, side bar and by click on buttons)
- PS: commands use on this project:
  - npm install @react-navigation/native
  - expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
  - npm install @react-navigation/stack (nagigations by the buttons)
- expo install expo-constants
- expo email-composer (abre tela para escrever email)
- axios (http client)
- intl (instalar pacote que apenas age quando o pacote nativo Intl não existir dentro do contexto trabalhado) - Biblioteca de internacionalização. Se importarmos a biblioteca no APP conseguimos fazer com que ela seja aplicada na aplicação inteira.

PS: The expo already have the icons package, very similar of react-icons on the project.

PS: To link any app from cellphone, is made by DeepLink (Every app have this) - This a url of the app
