import React from 'react';
import { formFieldsTypeToComponent } from "../const/formFieldsTypes";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Form = ({fields = []}) => {
  return (
    <Container maxWidth="xs">
      <Box
        maxWidth="xs"
        sx={{
          marginTop: 8,
          marginBottom: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={2}>
          {fields.map((field, index) => {
            const Component = formFieldsTypeToComponent[field.type]

            if (!Component) return null

            return <Component {...field} key={index}/>
          })}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Grid>
      </Box>
    </Container>
  );
};

export default Form;
