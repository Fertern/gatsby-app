import React from "react"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"

export const ContentCard = ({
  content: { semiLabel, label, semiText, text, buttonText },
}) => (
  <Card
    //style={{ boxShadow: "unset" }}
    style={{ borderRadius: "unset" }}
  >
    <CardContent>
      <Typography gutterBottom>{semiLabel}</Typography>
      <Typography variant="h5" component="h2">
        {label}
      </Typography>
      <Typography color="textSecondary">{semiText}</Typography>
      <Typography variant="body2" component="p">
        {text}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" variant="outlined">
        <Link to="sunset">{buttonText}</Link>
      </Button>
    </CardActions>
  </Card>
)
