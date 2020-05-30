import React from "react";
import {useTranslation} from "react-i18next";
import ContentText from "../theme/ContentText";
import { makeStyles } from '@material-ui/core'
import ErrorIcon from '@material-ui/icons/Error';

const useStyles = makeStyles( theme => ({
  centeredItems: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
},
  icon: {
    marginTop: "40px",
    fontSize: "100px",
    color: "#bd1c1c",
}
}))

const ServerError = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div>
      <div className={ classes.centeredItems}>
        <ErrorIcon className={classes.icon}/>
      </div>
      <h1 className={classes.centeredItems}>{t("serverError.headline")}</h1>
      <div className={classes.centeredItems}>
        <ContentText >{t("serverError.description")}</ContentText>
      </div>
    </div>
  )

}

export default ServerError
