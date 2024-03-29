import * as React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Checkbox from "@mui/joy/Checkbox";
import FormControl from "@mui/joy/FormControl";
import FormLabel, { formLabelClasses } from "@mui/joy/FormLabel";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "../components/GoogleIcon";


// eslint-disable-next-line react/prop-types
function ColorSchemeToggle({ onClick, ...props }) {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <IconButton size="sm" variant="plain" color="neutral" disabled />;
  }

  return (
    <IconButton
      id="toggle-mode"
      size="sm"
      variant="plain"
      color="neutral"
      aria-label="toggle light/dark mode"
      {...props}
      onClick={(event) => {
        if (mode === "light") {
          setMode("dark");
        } else {
          setMode("light");
        }
        onClick?.(event);
      }}
    >
      {mode === "light" ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickSowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <CssVarsProvider defaultMode="dark" disableTransitionOnChange>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ":root": {
            "--Collapsed-breakpoint": "769px",
            "--Cover-width": "40vw",
            "--Form-maxWidth": "700px",
            "--Transition-duration": "0.4s",
          },
        }}
      />
      <Box
        sx={(theme) => ({
          width:
            "clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)",
          transition: "width var(--Transition-duration)",
          transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "flex-end",
          backdropFilter: "blur(4px)",
          backgroundColor: "rgba(255 255 255 / 0.6)",
          [theme.getColorSchemeSelector("dark")]: {
            backgroundColor: "rgba(19 19 24 / 0.4)",
          },
        })}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100dvh",
            width:
              "clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)",
            maxWidth: "100%",
            px: 2,
          }}
        >
          <Box
            component="main"
            sx={{
              my: "auto",
              py: 2,
              pb: 5,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: 400,
              maxWidth: "100%",
              mx: "auto",
              borderRadius: "sm",
              "& form": {
                display: "flex",
                flexDirection: "column",
                gap: 2,
              },
              [`& .${formLabelClasses.asterisk}`]: {
                visibility: "hidden",
              },
            }}
          >
            <ColorSchemeToggle />
            <div>
              <Typography component="h1" fontSize="xl2" fontWeight="lg">
                Iniciar Sesión
              </Typography>
              <Typography level="body-sm" sx={{ my: 1, mb: 3 }}>
                Bienvenido
              </Typography>
            </div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                const formElements = event.currentTarget.elements;
                const data = {
                  email: formElements.email.value,
                  password: formElements.password.value,
                  persistent: formElements.persistent.checked,
                };
                alert(JSON.stringify(data, null, 2));
              }}
            >
              <FormControl required>
                <FormLabel>Email</FormLabel>
                <Input type="email" name="email" />
              </FormControl>

              <FormControl required>
                <FormLabel>Password</FormLabel>
                <div className="flex flex-direction row">
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    sx={{width: '90%'}}
                  />
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickSowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </div>
              </FormControl>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Checkbox
                  size="sm"
                  label="Remember for 30 days"
                  name="persistent"
                />
                <Link fontSize="sm" href="/register" fontWeight="lg">
                  No tienes cuenta...?
                </Link>
              </Box>
              <Button type="submit" fullWidth>
                Login
              </Button>
            </form>
            <Button
              variant="outlined"
              color="neutral"
              fullWidth
              startDecorator={<GoogleIcon />}
            >
              Login con Google
            </Button>
          </Box>
          <Box component="footer" sx={{ py: 3 }}>
            <Typography level="body-xs" textAlign="center">
              © Meeting Proyect {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          height: "100%",
          position: "fixed",
          right: 0,
          top: 0,
          bottom: 0,
          left: "clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))",
          transition:
            "background-image var(--Transition-duration), left var(--Transition-duration) !important",
          transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
          backgroundColor: "background.level1",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2)",
          [theme.getColorSchemeSelector("dark")]: {
            backgroundImage:
              "url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&w=1000&dpr=2)",
          },
        })}
      />
    </CssVarsProvider>
  );
}
