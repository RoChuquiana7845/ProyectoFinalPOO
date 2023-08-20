import * as React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel, { formLabelClasses } from "@mui/joy/FormLabel";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { Editor } from "@tinymce/tinymce-react";
import { useTheme } from "../context/ColorTheme.jsx";

// eslint-disable-next-line react/prop-types
function ColorSchemeToggle({ onClick, ...props }) {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  const { handleTheme } = useTheme();

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
          handleTheme("dark");
        } else {
          setMode("light");
          handleTheme("light");
        }
        onClick?.(event);
      }}
    >
      {mode === "light" ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

const EditarGrupo = () => {
  const editorRef = React.useRef(null);
  const [categorias, setCategory] = React.useState([]);
  const { theme } = useTheme();

  React.useEffect(() => {
    setCategory(["React", "Javascript", "PHP"]);
  }, []);

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
              py: 12,
              pb: 5,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "100%",
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
                Editar Grupo
              </Typography>
            </div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                const formElements = event.currentTarget.elements;
                const data = {
                  email: formElements.email.value,
                  descripcion: editorRef.current.getContent(),
                  persistent: formElements.persistent.checked,
                };
                alert(JSON.stringify(data, null, 2));
              }}
            >
              <FormControl required>
                <FormLabel>Nombre</FormLabel>
                <Input type="text" name="nombre" />
              </FormControl>

              <FormControl required>
                <FormLabel>Descripción</FormLabel>

                <Editor
                  apiKey="70r0b3ina9xptt7ccgxtsi8y9y2lsq7rarq6l4224gc78z1v"
                  initialValue="<p>This is the initial content of the editor.</p>"
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "code",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "code",
                      "help",
                      "wordcount",
                    ],
                    toolbar:
                      "undo redo | blocks | " +
                      "bold italic forecolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | help",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
                </FormControl>

                <FormControl required>
                  <FormLabel>Categoría</FormLabel>
                  <select
                    name="categoriaId"
                    className={
                      theme == "light"
                        ? "bg-white rounded-sm"
                        : "bg-black rounded-lg border border-gray-600 rounded-lg py-2"
                    }
                  >
                    <option value={""} selected disabled>
                      -- Elige una categoria --
                    </option>
                    {categorias.map((categoria) => (
                      <option key={categoria}>{categoria}</option>
                    ))}
                  </select>
                </FormControl>

                <FormControl required>
                  <FormLabel>Imagen</FormLabel>
                  <Input type="file" name="imagen" />
                </FormControl>

                <FormControl required>
                  <FormLabel>Sitio Web</FormLabel>
                  <Input type="url" name="name" />
                </FormControl>

              <Button type="submit" fullWidth>
                Editar Grupo
              </Button>
            </form>
          </Box>
          <Box component="footer" sx={{ py: 3 }}>
            <Typography level="body-xs" textAlign="center">
              © Meeting Proyect {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
    </CssVarsProvider>
  );
};

export default EditarGrupo;
