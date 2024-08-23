import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

function App() {
  return (
    <>
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
      {/* 1. Render a password field with:
        - label: "Password"
        - id: "password"
        - type: "password"
        - name: "password"
        - placeholder: "Your password"
        - autoComplete: "current-password"
        - required
      */}
      <Button>Hello</Button>
    </>
  );
}

export default App;
