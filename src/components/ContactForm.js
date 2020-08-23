import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import SendIcon from "@material-ui/icons/Send"
import { withStyles } from "@material-ui/core/styles"

const style = {
  display: "flex",
  flexDirection: "column",
  margin: "0",
  padding: "0",
  width: "100%",
}

const inStyles = theme => ({
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `${theme.palette.primary.main} !important`,
    },
  },
  colorText: "white",
  cssFocused: { color: "black" },

  notchedOutline: {
    borderWidth: "1px",
    borderColor: "black !important",
  },
})

const ContactForm = props => {
  const { classes } = props
  return (
    <form
      style={style}
      name="contactFormHealthResult"
      action="/success"
      method="POST"
      data-netlify="true"
    >
      <h3 style={{ marginBottom: "20px" }}>Enquiry Form</h3>
      <input
        type="hidden"
        name="form-name"
        value="contactFormHealthResult"
      ></input>
      <TextField
        style={{ height: "70px" }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
          style: { color: "black" },
        }}
        InputLabelProps={{ style: { color: "black" } }}
        id="outlined-required"
        label="Name"
        name="name"
        variant="outlined"
      />
      <TextField
        style={{ height: "70px" }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
          style: { color: "black" },
        }}
        id="outlined-number"
        label="Phone Number"
        name="number"
        variant="outlined"
        InputLabelProps={{ style: { color: "black" } }}
      />
      <TextField
        style={{ height: "70px" }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
          style: { color: "black" },
        }}
        required
        id="email"
        label="Email"
        type="email"
        name="email"
        variant="outlined"
        InputLabelProps={{ style: { color: "black" } }}
      />
      <TextField
        style={{ height: "70px" }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
          style: { color: "black" },
        }}
        id="message"
        label="Message"
        name="message"
        multiline
        rows={4}
        variant="outlined"
        InputLabelProps={{ style: { color: "black" } }}
      />
      <Button
        style={{ margin: "60px 0", backgroundColor: "#273c75" }}
        variant="contained"
        color="primary"
        type="submit"
        endIcon={<SendIcon />}
      >
        SEND
      </Button>
    </form>
  )
}

export default withStyles(inStyles)(ContactForm)
