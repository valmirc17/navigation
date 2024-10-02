
import { Groups } from '@screens/groups';
import { ThemeProvider } from 'react-native-paper';
import theme from "./src/theme"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups/>
    </ThemeProvider>
  );
}