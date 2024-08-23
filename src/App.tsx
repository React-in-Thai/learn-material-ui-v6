import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

function App() {
  return (
    <Stack spacing={2}>
      <CssBaseline /> {/* Reset CSS */}
      <TextField
        label="Email"
        id="email"
        type="email"
        name="email"
        placeholder="your@email.com"
        autoComplete="email"
        autoFocus
        required
        fullWidth
        variant="outlined"
      />
      <TextField
        label="Password"
        name="password"
        placeholder="••••••"
        type="password"
        id="password"
        autoComplete="current-password"
        required
        fullWidth
        variant="outlined"
      />
      <Button>Hello</Button>
    </Stack>
  );
}

export default App;
