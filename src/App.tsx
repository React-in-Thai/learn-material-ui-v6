import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// 1. Import the Link component (https://mui.com/material-ui/react-link/)
// 2. Import the Typography component (https://mui.com/material-ui/react-typography/)

function App() {
  return (
    <Box
      sx={{
        padding: "2rem",
        maxWidth: "400px",
        margin: "auto",
        marginTop: "10vh",
        border: "1px solid #eee",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
        borderRadius: "4px",
      }}
    >
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
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
          sx={{
            marginLeft: "-12px",
            "& .MuiFormControlLabel-label": { userSelect: "none" },
          }}
        />
        {/* 3. change this's button variant to `contained` and the text to "Log in" */}
        <Button>Hello</Button>
        {/* 4. Render the Typography and a Link for sign up */}
      </Stack>
    </Box>
  );
}

export default App;
