import { useState } from "react";
import Sheet from "@mui/joy/Sheet";
import Box from '@mui/joy/Box';
import { CardContent, IconButton, Typography } from "@mui/material";
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import Divider from '@mui/joy/Divider';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import Input from '@mui/joy/Input';
import SendIcon from '@mui/icons-material/Send';
import Card from '@mui/joy/Card';
import AspectRatio from '@mui/joy/AspectRatio';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import Chip from '@mui/joy/Chip';


const Footer = () => {
  const [color, setColor] = useState("neutral");

  return (
    <Sheet
    style={{margin: '15px'}}
    maxwidth="xl"
      variant="solid"
      color={color}
      sx={{
        ...(color !== "neutral" && {
          bgcolor: `${color}.800`,
        }),
        flexGrow: 1,
        p: 2,
        borderRadius: { xs: 0, sm: "sm" },
      }}
    >
      <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
        <IconButton
        variant="soft"
        size="sm"
        onClick={()=>{
            const colors = [
                'primary',
                'neutral',
                'danger',
                'success',
                'warning'
            ]
            const nextColor = colors.indexOf(color);
            setColor(colors[nextColor+1] ?? colors[0]);
        }}>
            <ColorLensRoundedIcon fontSize="small"/>
        </IconButton>
        <Divider orientation="vertical"/>
        <IconButton variant='plain'>
            <FacebookRoundedIcon/>
        </IconButton>
        <IconButton variant="plain">
            <GitHubIcon/>
        </IconButton>
        <Input
        variant="soft"
        placeholder={'Escribe tu email'}
        type="email"
        name="email"
        endDecorator={
            <IconButton variant="soft" aria-label="subscribe">
                <SendIcon/>
            </IconButton>
        }
        sx={{ml: 'auto', display: {sx: 'none', md: 'flex'}, bgcolor: `${color}.600`}}>
        </Input>
      </Box>
      <Divider sx={{my: 2}}/>
      <Box
      sx={{
        display: 'flex',
        flexDirection: {xs: 'column', md: 'row'},
        alignItems: {md: 'flex-start'},
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 2
      }}>
        <Card
        variant="soft"
        size="sm"
        style={{margin: '5px'}}
        sx={{
            flexDirection: {xs:'row', md: 'column'},
            minWidth: {xs: '100%', md: 'auto'},
            gap: 1,
            bgcolor: `${color}.600`
        }}>
            <AspectRatio
            ratio="21/9"
            minHeight={80}
            sx={{flexBasis: {xs: 200, md: 'initial'},bgcolor: `${color}.600`}}>
                <img alt="Foto Indefinida" src={'Foto'} />
            </AspectRatio>
            <CardContent>
                <Typography level="body-sm">{'Ingresa a nuevo sitio web de Meeting'}</Typography>
                <Typography level='body-xs' sx={{mb: 0.5}}> {'Proyecto para UNEMI'}</Typography>
            </CardContent>
        </Card>

        <List
          size="sm"
          orientation="horizontal"
          wrap
          sx={{ flexGrow: 0, '--ListItem-radius': '8px' }}
        >
          <ListItem nested sx={{ width: { xs: '50%', md: 140} }}>
            <ListSubheader sx={{color: `${color}.900`, fontWeight: "bold", '&:hover': {
                bgcolor: `${color}.600`,
                borderRadius: 8
            }}}>Sitemap</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton>Servicios</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Blog</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Contactenos</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
          <ListItem nested sx={{ width: { xs: '50%', md: 180 } }}>
            <ListSubheader sx={{color: `${color}.900`, fontWeight: "bold", '&:hover': {
                bgcolor: `${color}.600`,
                borderRadius: 8
            }}}>Product</ListSubheader>
            <List sx={{ '--ListItemDecorator-size': '32px' }}>
              <ListItem>
                <ListItemButton>
                  <ListItemDecorator>
                    <img
                      alt=""
                      src="#"
                      width="24"
                    />
                  </ListItemDecorator>
                  Meeting Proyect
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemDecorator>
                    <img
                      alt=""
                      src="#"
                      width="24"
                    />
                  </ListItemDecorator>
                  Blackjack 21 Game
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemDecorator>
                    <img
                      alt=""
                      src="#"
                      width="24"
                    />
                  </ListItemDecorator>
                  Api Rest 
                  <Chip
                    variant="soft"
                    size="sm"
                    sx={{ minHeight: 20, fontSize: 'xs2', ml: 'auto' }}
                  >
                    BETA
                  </Chip>
                </ListItemButton>
              </ListItem>
            </List>
          </ListItem>
        </List>

      </Box>
    </Sheet>
  );
};

export default Footer;
